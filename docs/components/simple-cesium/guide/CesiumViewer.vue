<template>
  <div class="demo-box">
    <ClientOnly>
      <CViewer>
        <div class="toolbar">
          <div class="toolbar-row">
            <span class="label">绘图</span>
            <button :class="{ active: drawType === 'point' }" @click="toggleDraw('point')">点</button>
            <button :class="{ active: drawType === 'polyline' }" @click="toggleDraw('polyline')">折线</button>
            <button :class="{ active: drawType === 'polygon' }" @click="toggleDraw('polygon')">多边形</button>
            <button :class="{ active: drawType === 'rect' }" @click="toggleDraw('rect')">矩形</button>
            <button :class="{ active: drawType === 'ellipsis' }" @click="toggleDraw('ellipsis')">椭圆</button>
            <button :class="{ active: isMarking }" @click="toggleMark">标记</button>
            <button v-if="drawType === 'polyline' || drawType === 'polygon'" @click="finishDraw">完成</button>
            <button @click="clearDraw">清除</button>
          </div>
          <div class="toolbar-row">
            <span class="label">材质</span>
            <button v-for="item in matItems" :key="item.key" :class="{ active: activeMat === item.key }"
              @click="showMat(item.key)">{{ item.label }}</button>
            <button @click="clearMat">清除</button>
          </div>
        </div>
        <CInfoPopup v-if="entityData" :data="entityData" @close="onClose" />
        <CNavigation :defaultResetView="resetPosition" />
        <CScale />
        <CRightMenu />
      </CViewer>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CViewer, CInfoPopup, CRightMenu, CNavigation, CScale, useRightMenu, getOrCreateEntitySource, onViewerCreated, onLeftDown, onRightClick, onDoubleClick, defaultConfig } from '@simple/cesium'
import { useDrawPointArea, useDrawPolylineArea, useDrawPolygonArea, useDrawRectangleArea, useDrawEllipsisArea, useCreatePlaceEntity, screenToDegrees } from '@simple/cesium'
import { Cartesian3, Cartographic, Color, Material, Primitive, EllipseGeometry, RectangleGeometry, Rectangle, CorridorGeometry, GeometryInstance, MaterialAppearance, VertexFormat, SceneMode, Entity, DistanceDisplayCondition, CallbackProperty, Transforms, Matrix4 } from 'cesium'

defaultConfig.defaultImageryUrl = {
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  minimumLevel: 0,
  maximumLevel: 19
} as any
defaultConfig.viewerConfig.sceneMode = SceneMode.SCENE3D
defaultConfig.DEFAULT_VIEWER_NAME = 'demo-viewer'

const resetPosition = Cartographic.fromDegrees(119, 35.5, 2000000)
const entityData = ref<{ id: string; source: string; name: string } | null>(null)
const onClose = () => { entityData.value = null }
let bjEntity: Entity | null = null
let shEntity: Entity | null = null
let dynamicUpdater: (() => void) | null = null

// --- Drawing ---
const drawType = ref('')
const pointDrawer = useDrawPointArea()
const polylineDrawer = useDrawPolylineArea()
const polygonDrawer = useDrawPolygonArea()
const rectDrawer = useDrawRectangleArea()
const ellipsisDrawer = useDrawEllipsisArea()
const placeEntity = useCreatePlaceEntity()

const getDrawer = () => {
  if (drawType.value === 'point') return pointDrawer
  if (drawType.value === 'polyline') return polylineDrawer
  if (drawType.value === 'polygon') return polygonDrawer
  if (drawType.value === 'rect') return rectDrawer
  if (drawType.value === 'ellipsis') return ellipsisDrawer
  return null
}

const setRotate = (enable: boolean) => {
  const v = (window as any).viewer
  if (v) v.scene.screenSpaceCameraController.enableRotate = enable
}
const toggleDraw = (type: string) => {
  if (drawType.value === type) { drawType.value = ''; setRotate(true); return }
  getDrawer()?.stopAndClear()
  drawType.value = type
  const drawer = getDrawer()
  if (!drawer) return
  setRotate(false)
  drawer.start((params) => {
    if (params.timing === 'stop') {
      drawer.stop()
      drawType.value = ''
      setRotate(true)
      queueMicrotask(() => rightMenu.closeMenu())
    }
  })
}
const finishDraw = () => {
  const drawer = getDrawer()
  drawer?.stop()
  polylineDrawer.stop?.()
  polygonDrawer.stop?.()
  drawType.value = ''
  setRotate(true)
}
const clearDraw = () => {
  pointDrawer.stopAndClear?.()
  polylineDrawer.stopAndClear?.()
  polygonDrawer.stopAndClear?.()
  rectDrawer.stopAndClear?.()
  ellipsisDrawer.stopAndClear?.()
  placeEntity.clear()
  drawType.value = ''
  setRotate(true)
}

const isMarking = ref(false)
const toggleMark = () => {
  isMarking.value = !isMarking.value
  if (isMarking.value) {
    getDrawer()?.stopAndClear()
    drawType.value = ''
    setRotate(false)
  } else {
    setRotate(true)
  }
}

// --- Materials ---
const activeMat = ref('')
const matPrimitives: Primitive[] = []
const matItems = [
  { key: 'bomb', label: '弹爆辐射' }, { key: 'circle', label: '圆扩散' },
  { key: 'flow', label: '通信流光' }, { key: 'sensor', label: '传感器波' },
  { key: 'ellipse', label: '椭圆扩散' }, { key: 'pline', label: '流光线' },
  // { key: 'trail', label: '轨迹线' }
]
const trackEntity = (p: Primitive, refPos?: Cartesian3) => {
  const tick = viewer.scene.preUpdate.addEventListener(() => {
    const pos = bjEntity?.position?.getValue(viewer.clock.currentTime)
    if (!pos) return
    if (refPos) {
      const t = Transforms.eastNorthUpToFixedFrame(pos)
      p.modelMatrix = Matrix4.multiply(t, Matrix4.inverseTransformation(Transforms.eastNorthUpToFixedFrame(refPos), new Matrix4()), new Matrix4())
    } else {
      p.modelMatrix = Transforms.eastNorthUpToFixedFrame(pos)
    }
  })
  return () => { tick(); viewer.scene.primitives.remove(p) }
}
const showMat = (key: string) => {
  activeMat.value = key
  clearMat()
  const C = Color
  const refBj = Cartesian3.fromDegrees(116.4, 39.9, 0)
  const pos: any = { bomb: [116.4, 39.9, 600000], circle: [116.4, 39.9, 600000], flow: [116.4, 39.9, 600000], sensor: [116.4, 39.9, 600000], ellipse: [116.4, 39.9, 600000], pline: [118, 35, 2000000], trail: [118, 35, 2000000] }
  const actions: any = {
    bomb: () => { const p = new Primitive({ geometryInstances: new GeometryInstance({ geometry: new EllipseGeometry({ center: refBj, semiMajorAxis: 50000, semiMinorAxis: 50000, vertexFormat: VertexFormat.POSITION_AND_ST }) }), appearance: new MaterialAppearance({ material: new Material({ fabric: { type: 'BombRadiation', uniforms: { color: new C(1, 0, 0, 0.7), speed: 3, count: 3, gradient: 0.5 } } }), translucent: true, closed: false }) }); viewer.scene.primitives.add(p); dynamicUpdater = trackEntity(p, refBj) },
    circle: () => { const p = new Primitive({ geometryInstances: new GeometryInstance({ geometry: new EllipseGeometry({ center: refBj, semiMajorAxis: 50000, semiMinorAxis: 50000, vertexFormat: VertexFormat.POSITION_AND_ST }) }), appearance: new MaterialAppearance({ material: new Material({ fabric: { type: 'CircleDiffuse', uniforms: { color: new C(0, 1, 0, 0.7), speed: 15 } } }), translucent: true, closed: false }) }); viewer.scene.primitives.add(p); dynamicUpdater = trackEntity(p, refBj) },
    flow: () => { const p = new Primitive({ geometryInstances: new GeometryInstance({ geometry: new EllipseGeometry({ center: refBj, semiMajorAxis: 60000, semiMinorAxis: 60000, vertexFormat: VertexFormat.POSITION_AND_ST }) }), appearance: new MaterialAppearance({ material: new Material({ fabric: { type: 'CommunicationFlow', uniforms: { color: new C(1, 1, 0, 0.5), repeat: 30, speed: 0.1, thickness: 0.3 } } }), translucent: true, closed: false }) }); viewer.scene.primitives.add(p); dynamicUpdater = trackEntity(p, refBj) },
    sensor: () => { const p = new Primitive({ geometryInstances: new GeometryInstance({ geometry: new RectangleGeometry({ rectangle: Rectangle.fromDegrees(116.0, 39.5, 116.8, 40.3), vertexFormat: VertexFormat.POSITION_AND_ST }) }), appearance: new MaterialAppearance({ material: new Material({ fabric: { type: 'SensorWave', uniforms: { color: new C(0, 0.5, 1, 0.7), speed: 3, count: 4, gradient: 0.2 } } }), translucent: true, closed: false }) }); viewer.scene.primitives.add(p); matPrimitives.push(p) },
    ellipse: () => { const p = new Primitive({ geometryInstances: new GeometryInstance({ geometry: new EllipseGeometry({ center: refBj, semiMajorAxis: 60000, semiMinorAxis: 60000, vertexFormat: VertexFormat.POSITION_AND_ST }) }), appearance: new MaterialAppearance({ material: new Material({ fabric: { type: 'EllipseDiffuse', uniforms: { color: new C(0, 1, 1, 0.7), speed: 3, gradient: 0.3, percent: 0.1, number: 3, maxAngle: 360, minAngle: 0 } } }), translucent: true, closed: false }) }); viewer.scene.primitives.add(p); dynamicUpdater = trackEntity(p, refBj) },
    pline: () => {
      if (!bjEntity || !shEntity) return
      const uniforms = { color: new C(1, 0, 0, 0.7), speed: 15, percent: 0.1, gradient: 0.5, number: 3 }
      let active: Primitive | null = null
      const retired: { p: Primitive; age: number }[] = []
      const tick = viewer.scene.postUpdate.addEventListener(() => {
        const bjP = bjEntity!.position!.getValue(viewer.clock.currentTime) as any
        const shP = shEntity!.position!.getValue(viewer.clock.currentTime) as any
        if (!bjP || !shP) return
        const bj = Cartographic.fromCartesian(bjP)
        const sh = Cartographic.fromCartesian(shP)
        const next = new Primitive({
          geometryInstances: new GeometryInstance({
            geometry: new CorridorGeometry({ positions: Cartesian3.fromDegreesArray([bj.longitude * 180 / Math.PI, bj.latitude * 180 / Math.PI, sh.longitude * 180 / Math.PI, sh.latitude * 180 / Math.PI]), width: 8000, vertexFormat: VertexFormat.POSITION_AND_ST })
          }),
          appearance: new MaterialAppearance({ material: new Material({ fabric: { type: 'PolylineFlow', uniforms } }), translucent: true, closed: false })
        })
        viewer.scene.primitives.add(next)
        if (active) retired.push({ p: active, age: 0 })
        active = next
        for (let i = retired.length - 1; i >= 0; i--)
          if (++retired[i].age > 3) { viewer.scene.primitives.remove(retired[i].p); retired.splice(i, 1) }
      })
      dynamicUpdater = () => { tick(); retired.forEach(r => viewer.scene.primitives.remove(r.p)); if (active) viewer.scene.primitives.remove(active); dynamicUpdater = null }
    },
    trail: () => { const p = new Primitive({ geometryInstances: new GeometryInstance({ geometry: new CorridorGeometry({ positions: Cartesian3.fromDegreesArray([116.4, 39.9, 118.0, 37.0, 121.5, 31.2]), width: 8000, vertexFormat: VertexFormat.POSITION_AND_ST }) }), appearance: new MaterialAppearance({ material: new Material({ fabric: { type: 'PolylineTrail', uniforms: { color: new C(0, 0.5, 1, 0.7), speed: 10 } } }), translucent: true, closed: false }) }); viewer.scene.primitives.add(p); matPrimitives.push(p) }
  }
  actions[key]?.()
  const target = pos[key]
  if (target) {
    const camPos = viewer?.camera.positionCartographic
    const destPos = Cartographic.fromDegrees(...target)
    const distance = Math.sqrt(
      Math.pow((camPos.longitude - destPos.longitude) * 6371000, 2) +
      Math.pow((camPos.latitude - destPos.latitude) * 6371000, 2) +
      Math.pow(camPos.height - destPos.height, 2)
    )
    if (distance > 1000000)
      viewer?.camera.flyTo({ destination: Cartesian3.fromDegrees(...target) })
  }
}
const clearMat = () => {
  matPrimitives.forEach(p => viewer?.scene.primitives.remove(p))
  matPrimitives.length = 0
  activeMat.value = ''
  if (dynamicUpdater) { dynamicUpdater(); dynamicUpdater = null }
}

// --- Viewer setup ---
onViewerCreated((viewer) => {
  (window as any).viewer = viewer
  viewer.camera.setView({ destination: Cartesian3.fromDegrees(119, 35.5, 2000000) })
  viewer.selectedEntityChanged.addEventListener(() => viewer.selectedEntity = undefined)

  const source = getOrCreateEntitySource('demo')!
  const modelDist = new DistanceDisplayCondition(0, 200000)
  const pointDist = new DistanceDisplayCondition(200000, Number.MAX_VALUE)
  const t0 = performance.now()
  const orbit = (cx: number, cy: number, r: number, speed: number, phase: number) =>
    new CallbackProperty(() => Cartesian3.fromDegrees(
      cx + r * Math.cos((performance.now() - t0) / 1000 * speed + phase),
      cy + r * Math.sin((performance.now() - t0) / 1000 * speed * 0.7 + phase),
      0),
      false)
  bjEntity = source.entities.add({
    name: '目标实体',
    position: orbit(116.4, 39.9, 0.5, 0.1, 0),
    point: { pixelSize: 12, color: Color.RED, distanceDisplayCondition: pointDist },
    label: { text: '目标实体', font: '14px sans-serif', pixelOffset: { x: 0, y: -20 } },
    model: {
      uri: '/docs/model/Cesium_Air.glb',
      minimumPixelSize: 64,
      maximumScale: 10000,
      distanceDisplayCondition: modelDist
    }
  })
  source.entities.add({
    name: '目标实体3',
    position: Cartesian3.fromDegrees(117.2, 39.1, 10000),
    model: {
      uri: '/docs/model/Cesium_Air.glb',
      minimumPixelSize: 64,
      maximumScale: 10000
    }
  })
  shEntity = source.entities.add({
    name: '目标实体2',
    position: orbit(121.5, 31.2, 0.4, 0.2, Math.PI),
    point: { pixelSize: 10, color: Color.DODGERBLUE, distanceDisplayCondition: pointDist },
    label: { text: '上海', font: '14px sans-serif', pixelOffset: { x: 0, y: -20 } },
    model: {
      uri: '/docs/model/GroundVehicle.glb',
      minimumPixelSize: 64,
      maximumScale: 10000,
      distanceDisplayCondition: modelDist
    }
  })

  let markerCount = 0
  onLeftDown(({ position: pos }) => {
    if (drawType.value) return
    if (isMarking.value) {
      const deg = screenToDegrees(pos.position)
      if (deg) {
        markerCount++
        placeEntity.create(`标记${markerCount}`, { longitude: deg.longitude, latitude: deg.latitude })
      }
      return
    }
    entityData.value = null
  })

  onRightClick(({ entity }) => {
    lastRightClickedEntity = entity
  }, { isEntity: true })

  onDoubleClick(({ entity }) => {
    viewer.trackedEntity = entity
  }, { isEntity: true })

  onDoubleClick(() => {
    viewer.trackedEntity = undefined
    viewer.camera.flyTo({ destination: Cartesian3.fromDegrees(119, 35.5, 2000000) })
  }, { isEmpty: true })

  entityData.value = { id: bjEntity.id!, source: 'demo', name: '目标实体' }
  showMat('bomb')
})

let lastRightClickedEntity: Entity | null = null
const rightMenu = useRightMenu()
rightMenu.setMenu({ group: 'demo', key: 'info', label: '查看属性', isShow: () => true }, () => {
  if (lastRightClickedEntity) {
    entityData.value = { id: lastRightClickedEntity.id!, source: 'demo', name: lastRightClickedEntity.name ?? lastRightClickedEntity.id! }
  }
})

</script>

<style scoped>
.demo-box {
  height: 500px;
  position: relative;
  overflow: hidden;
}

.demo-box :deep(.cesium-viewer) {
  border-radius: 4px;
}

.toolbar {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px 16px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  min-width: 450px;
  pointer-events: auto;
}

.toolbar-row {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.label {
  color: rgba(255, 255, 255, 0.5);
  font-size: 11px;
  margin-right: 2px;
}

.coord-text {
  font-size: 12px;
  color: #fff;
  font-family: monospace;
  margin-right: 4px;
}

.coord-text.muted {
  color: #999;
}

.sep {
  width: 1px;
  height: 18px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 4px;
}

.toolbar button {
  padding: 2px 5px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 11px;
  white-space: nowrap;
  line-height: 1.6;
}

.toolbar button:hover {
  background: rgba(255, 255, 255, 0.25);
}

.toolbar button.active {
  background: #409eff;
  border-color: #409eff;
}
</style>
