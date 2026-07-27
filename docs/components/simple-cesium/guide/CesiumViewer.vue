<template>
  <div class="demo-box">
    <CViewer name="demo-viewer" :defaultCamera="null">
      <div class="toolbar">
        <div class="toolbar-row">
          <span class="label">绘图</span>
          <button :class="{ active: drawType === 'point' }" @click="toggleDraw('point')">绘点</button>
          <button :class="{ active: drawType === 'polyline' }" @click="toggleDraw('polyline')">折线</button>
          <button :class="{ active: drawType === 'polygon' }" @click="toggleDraw('polygon')">多边形</button>
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
      <CNavigation viewerName="demo-viewer" :defaultResetView="resetPosition"/>
      <CScale viewerName="demo-viewer" />
      <CBreastplate :data="entityData" viewerName="demo-viewer" @close="onClose" />
      <CRightMenu viewerName="demo-viewer" />
    </CViewer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { CViewer, CNavigation, CScale, CBreastplate, CRightMenu, useRightMenu, getOrCreateEntitySource, onViewerCreated, onLeftDown, onRightClick, defaultConfig } from '@simple/cesium'
import { Cartesian2, Cartesian3, Cartographic, Color, Math as CesiumMath, CustomDataSource, PolygonHierarchy, ConstantProperty, Material, Primitive, EllipseGeometry, RectangleGeometry, Rectangle, CorridorGeometry, GeometryInstance, MaterialAppearance, VertexFormat, SceneMode } from 'cesium'

defaultConfig.defaultImageryUrl = {
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  minimumLevel: 0,
  maximumLevel: 19
} as any
defaultConfig.viewerConfig.sceneMode = SceneMode.SCENE3D

const resetPosition = Cartographic.fromDegrees(116.3975, 39.9075, 10000000)
const entityData = ref<{ id: string; source: string; name: string } | null>(null)
const onClose = () => { entityData.value = null }
const clickPos = ref<{ lng: number; lat: number } | null>(null)
let _viewer: any = null
let removeClick: Function | undefined

const flyTo = (lng: number, lat: number, h: number) => {
  _viewer?.camera.flyTo({ destination: Cartesian3.fromDegrees(lng, lat, h) })
}
const zoomIn = () => _viewer?.camera.zoomIn(200000)
const zoomOut = () => _viewer?.camera.zoomOut(200000)
const flyHome = () => _viewer?.camera.flyTo({ destination: Cartesian3.fromDegrees(116.4, 39.9, 8000000) })

// --- Drawing ---
const DRAW_SRC = 'cesium-viewer-draw'
const drawType = ref('')
let drawSource: CustomDataSource
let drawPoints: Cartesian3[] = []
let drawEntity: any = null
let drawCleanups: Function[] = []

const toggleDraw = (type: string) => {
  if (drawType.value === type) { drawType.value = ''; return }
  finishDraw()
  drawType.value = type
  if (type === 'point') {
    const close = onLeftDown(({ position: pos }) => {
      const c = _viewer.camera.pickEllipsoid(pos.position, _viewer.scene.globe.ellipsoid)
      if (!c) return
      drawSource.entities.add({ position: c, point: { pixelSize: 8, color: Color.RED } })
    }, { viewerName: 'demo-viewer' })
    drawCleanups.push(close)
  }
  if (type === 'polyline' || type === 'polygon') {
    const close = onLeftDown(({ position: pos }) => {
      const c = _viewer.camera.pickEllipsoid(pos.position, _viewer.scene.globe.ellipsoid)
      if (!c) return
      drawPoints.push(c.clone())
      drawSource.entities.add({ position: c, point: { pixelSize: 6, color: Color.RED } })
      if (type === 'polyline' && drawPoints.length >= 2) {
        if (drawEntity) {
          drawEntity.polyline.positions = new ConstantProperty([...drawPoints])
        } else {
          drawEntity = drawSource.entities.add({
            polyline: { positions: [...drawPoints], width: 3, material: Color.ORANGE, clampToGround: true }
          })
        }
      }
      if (type === 'polygon' && drawPoints.length >= 3) {
        if (drawEntity) {
          drawEntity.polygon.hierarchy = new ConstantProperty(new PolygonHierarchy([...drawPoints]))
        } else {
          drawEntity = drawSource.entities.add({
            polygon: {
              hierarchy: new PolygonHierarchy([...drawPoints]),
              material: Color.RED.withAlpha(0.25), outline: true, outlineColor: Color.RED
            }
          })
        }
      }
    }, { viewerName: 'demo-viewer' })
    drawCleanups.push(close)
  }
}
const finishDraw = () => {
  if ((drawType.value === 'polyline' || drawType.value === 'polygon') && drawPoints.length >= 2) {
    if (drawType.value === 'polyline') {
      drawSource.entities.add({
        polyline: { positions: [...drawPoints], width: 3, material: Color.ORANGE, clampToGround: true }
      })
    } else {
      drawSource.entities.add({
        polygon: {
          hierarchy: new PolygonHierarchy([...drawPoints]),
          material: Color.RED.withAlpha(0.25), outline: true, outlineColor: Color.RED
        }
      })
    }
  }
  if (drawEntity) { drawSource.entities.remove(drawEntity); drawEntity = null }
  drawPoints = []
  drawCleanups.forEach(f => f())
  drawCleanups = []
  drawType.value = ''
}
const clearDraw = () => {
  drawType.value = ''
  drawCleanups.forEach(f => f())
  drawCleanups = []
  drawPoints = []
  drawEntity = null
  drawSource?.entities.removeAll()
}

// --- Materials ---
const activeMat = ref('')
let matPrimitives: Primitive[] = []
const matItems = [
  { key: 'bomb', label: '弹爆辐射' }, { key: 'circle', label: '圆扩散' },
  { key: 'flow', label: '通信流光' }, { key: 'sensor', label: '传感器波' },

  { key: 'ellipse', label: '椭圆扩散' }, { key: 'pline', label: '流光线' }
]
const addEllipse = (lng: number, lat: number, r: number, type: string, uniforms: any) => {
  const p = new Primitive({
    geometryInstances: new GeometryInstance({
      geometry: new EllipseGeometry({ center: Cartesian3.fromDegrees(lng, lat, 0), semiMajorAxis: r, semiMinorAxis: r, vertexFormat: VertexFormat.POSITION_AND_ST })
    }),
    appearance: new MaterialAppearance({ material: new Material({ fabric: { type, uniforms } }), translucent: true, closed: false })
  })
  _viewer.scene.primitives.add(p); matPrimitives.push(p)
}
const addRect = (w: number, s: number, e: number, n: number, type: string, uniforms: any) => {
  const p = new Primitive({
    geometryInstances: new GeometryInstance({
      geometry: new RectangleGeometry({ rectangle: Rectangle.fromDegrees(w, s, e, n), vertexFormat: VertexFormat.POSITION_AND_ST })
    }),
    appearance: new MaterialAppearance({ material: new Material({ fabric: { type, uniforms } }), translucent: true, closed: false })
  })
  _viewer.scene.primitives.add(p); matPrimitives.push(p)
}
const addCorridor = (pts: number[], type: string, uniforms: any, w = 8000) => {
  const p = new Primitive({
    geometryInstances: new GeometryInstance({
      geometry: new CorridorGeometry({ positions: Cartesian3.fromDegreesArray(pts), width: w, vertexFormat: VertexFormat.POSITION_AND_ST })
    }),
    appearance: new MaterialAppearance({ material: new Material({ fabric: { type, uniforms } }), translucent: true, closed: false })
  })
  _viewer.scene.primitives.add(p); matPrimitives.push(p)
}
const showMat = (key: string) => {
  activeMat.value = key
  clearMat()
  const C = Color; const pos: any = { bomb: [116.4, 39.9, 600000], circle: [116.4, 39.9, 600000], flow: [116.4, 39.9, 600000], sensor: [116.4, 39.9, 600000], ellipse: [116.4, 39.9, 600000], pline: [118, 35, 600000] }
  const actions: any = {
    bomb: () => addEllipse(116.4, 39.9, 50000, 'BombRadiation', { color: new C(1, 0, 0, 0.7), speed: 3, count: 3, gradient: 0.5 }),
    circle: () => addEllipse(116.4, 39.9, 50000, 'CircleDiffuse', { color: new C(0, 1, 0, 0.7), speed: 15 }),
    flow: () => addEllipse(116.4, 39.9, 60000, 'CommunicationFlow', { color: new C(1, 1, 0, 0.5), repeat: 30, speed: 0.1, thickness: 0.3 }),
    sensor: () => addRect(116.0, 39.5, 116.8, 40.3, 'SensorWave', { color: new C(0, 0.5, 1, 0.7), speed: 3, count: 4, gradient: 0.2 }),
    ellipse: () => addEllipse(116.4, 39.9, 60000, 'EllipseDiffuse', { color: new C(0, 1, 1, 0.7), speed: 10, gradient: 0.3, percent: 0.1, number: 3, maxAngle: 360, minAngle: 0 }),
    pline: () => addCorridor([116.4, 39.9, 118.0, 37.0, 121.5, 31.2], 'PolylineFlow', { color: new C(1, 0, 0, 0.7), speed: 45, percent: 0.03, gradient: 0.2, number: 5 })
  }
  actions[key]?.()
  _viewer?.camera.flyTo({ destination: Cartesian3.fromDegrees(...pos[key]) })
}
const clearMat = () => {
  matPrimitives.forEach(p => _viewer?.scene.primitives.remove(p))
  matPrimitives = []; activeMat.value = ''
}

// --- Viewer setup ---
onViewerCreated((viewer) => {
  _viewer = viewer
  viewer.selectedEntityChanged.addEventListener(() => viewer.selectedEntity = undefined)
  viewer.camera.setView({ destination: Cartesian3.fromDegrees(116.4, 39.9, 8000000) })
  drawSource = new CustomDataSource(DRAW_SRC)
  viewer.dataSources.add(drawSource)

  const source = getOrCreateEntitySource('demo', 'demo-viewer')!
  const entity = source.entities.add({
    position: Cartesian3.fromDegrees(116.4, 39.9, 0),
    point: { pixelSize: 12, color: Color.RED },
    label: { text: '目标实体', font: '14px sans-serif', pixelOffset: { x: 0, y: -20 } }
  })
  source.entities.add({
    position: Cartesian3.fromDegrees(121.5, 31.2, 0),
    point: { pixelSize: 10, color: Color.DODGERBLUE },
    label: { text: '上海', font: '14px sans-serif', pixelOffset: { x: 0, y: -20 } }
  })
  source.entities.add({
    position: Cartesian3.fromDegrees(113.3, 23.1, 0),
    point: { pixelSize: 10, color: Color.FORESTGREEN },
    label: { text: '广州', font: '14px sans-serif', pixelOffset: { x: 0, y: -20 } }
  })
  source.entities.add({
    polygon: {
      hierarchy: Cartesian3.fromDegreesArray([113.3, 23.1, 114.5, 23.1, 114.5, 24.2, 113.3, 24.2]),
      material: Color.GREEN.withAlpha(0.25), outline: true, outlineColor: Color.GREEN
    }
  })
  source.entities.add({
    polyline: {
      positions: Cartesian3.fromDegreesArray([116.4, 39.9, 121.5, 31.2]),
      width: 3, material: Color.ORANGE
    }
  })

  removeClick = onLeftDown(({ position: pos }) => {
    if (drawType.value) return
    const c = _viewer.camera.pickEllipsoid(pos.position, _viewer.scene.globe.ellipsoid)
    if (!c) return
    const carto = Cartographic.fromCartesian(c)
    clickPos.value = { lng: CesiumMath.toDegrees(carto.longitude), lat: CesiumMath.toDegrees(carto.latitude) }
  }, { viewerName: 'demo-viewer' })

  setTimeout(() => { entityData.value = { id: entity.id!, source: 'demo', name: '目标实体' } }, 1000)
}, { viewerName: 'demo-viewer' })

onBeforeUnmount(() => {
  removeClick?.()
  drawCleanups.forEach(f => f())
})

const rightMenu = useRightMenu()
rightMenu.setMenu({ group: 'demo', key: 'locate', label: '定位', isShow: () => true }, () => alert('定位点击'))
rightMenu.setMenu({ group: 'demo', key: 'info', label: '查看属性', isShow: () => true }, () => alert('属性查看'))
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
  gap: 4px;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  min-width: 500px;
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

.toolbar button {
  padding: 3px 8px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 11px;
  white-space: nowrap;
}

.toolbar button:hover {
  background: rgba(255, 255, 255, 0.25);
}

.toolbar button.active {
  background: #409eff;
  border-color: #409eff;
}
</style>
