# Core

对 Cesium 核心 API 封装，每个模块提供便捷的函数式调用。

## Viewer

```typescript
import { createViewer, getViewer, destroyViewer, hasViewer } from '@simple/cesium'
```

| 函数 | 说明 |
|------|------|
| `createViewer(name, opt?)` | 创建 Viewer，已存在则返回已有实例 |
| `getViewer(name?)` | 获取 Viewer 实例 |
| `destroyViewer(name?)` | 销毁 Viewer 并从 Map 中移除 |
| `hasViewer(name?)` | 判断 Viewer 是否存在 |
| `viewerFlyTo(target, options?)` | 调用 Viewer.flyTo |
| `setViewerCursor(style?)` | 设置鼠标样式 |
| `hiddenAdvertise()` | 隐藏 Cesium 底部广告 |
| `getViewerCanvas()` | 获取 canvas 元素 |
| `getViewerContainer()` | 获取 container 元素 |

### Viewer 生命周期

```typescript
import { onViewerCreated, onViewerDestroyed } from '@simple/cesium'

onViewerCreated((viewer) => {
  console.log('Viewer 已创建', viewer)
})

onViewerDestroyed((viewer) => {
  console.log('Viewer 已销毁', viewer)
})
```

## Camera

```typescript
import { getCamera, setDefaultCamera, cameraFlyTo, flyToRectangle } from '@simple/cesium'
```

| 函数 | 说明 |
|------|------|
| `getCamera(name?)` | 获取 Camera |
| `setDefaultCamera({west,south,east,north})` | 设置默认相机视角 |
| `cameraFlyTo(options)` | 调用 Camera.flyTo |
| `flyToRectangle({west,south,east,north})` | 飞行到指定矩形范围 |
| `setCameraScale(level)` | 按比例级别缩放 |
| `setCameraHeight(height)` | 设置相机高度 |
| `getCameraHeight()` | 获取相机高度 |
| `onCameraChange(fn)` | 监听相机变化 |

### 控制器重置

```typescript
import { resetCameraController } from '@simple/cesium'

resetCameraController(viewer)
// 右键拖拽旋转，滚轮缩放，右键平移
```

### 实体跟踪

```typescript
import { setTrackedEntity, setSelectedEntity, setFirstPerspective } from '@simple/cesium'

setTrackedEntity(entity)       // 锁定跟踪实体
setSelectedEntity(entity)      // 选中实体
setFirstPerspective(entity)    // 第一人称视角
removeFirstPerspective()       // 取消第一人称
```

## 事件系统

分区域（实体上 / 空白区域 / 全局）的事件注册。

```typescript
import { onLeftClick, onRightClick, onDoubleClick, onMouseMove, onLeftDown, onLeftUp } from '@simple/cesium'
```

### 选项

```typescript
// 仅在实体上触发
onLeftClick(callback, { isEntity: true })

// 仅在空白区域触发
onRightClick(callback, { isEmpty: true })

// 全局触发
onMouseMove(callback)
```

### 清除事件

```typescript
import { onClearEvent, executeClearEvent } from '@simple/cesium'

onClearEvent((viewer) => {
  // 自定义清理逻辑
})
executeClearEvent() // 执行所有注册的清除事件
```

### 拖动实体

```typescript
import { onMoveEntity } from '@simple/cesium'

onMoveEntity(
  ({ entity, position }) => {
    console.log('拖动结束', entity.id)
  },
  { condition: (entity) => entity.id?.includes('movable') }
)
```

### 时钟与渲染 Tick

```typescript
import { onPreUpdate, onPostRender, onTick } from '@simple/cesium'

onPreUpdate((scene, time) => { /* 每帧渲染前 */ })
onPostRender(() => { /* 每帧渲染后 */ })
onTick((clock) => { /* 时钟 tick */ })
```

## 数据源

```typescript
import {
  createEntityDatasource, getEntitySource, getOrCreateEntitySource,
  deleteDatasourceByName, clearEntitySourceBySourceName,
  createEntitySource, createCzmlSource
} from '@simple/cesium'
```

| 函数 | 说明 |
|------|------|
| `createEntityDatasource(name)` | 创建 CustomDataSource |
| `createCzmlSource(name)` | 创建 CzmlDataSource |
| `getOrCreateEntitySource(name)` | 获取或创建数据源 |
| `getEntitySource(name)` | 获取数据源 |
| `deleteDatasourceByName(name)` | 按名称删除数据源 |
| `clearEntitySourceBySourceName(name)` | 清空数据源中的实体 |
| `dataSourceClearEntity()` | 清空当前 Viewer 所有数据源 |

## 场景与图层

```typescript
import { getScene } from '@simple/cesium'
```

### 场景模式

```typescript
import { changeSceneMode2D, changeSceneMode3D, changeSceneModeColumbus, onSceneChange } from '@simple/cesium'

changeSceneMode2D()   // 切换到 2D
changeSceneMode3D()   // 切换到 3D
changeSceneModeColumbus() // 切换到哥伦布视图

onSceneChange((mode) => {
  console.log('场景模式变更', mode)
})
```

### 影像图层

```typescript
import {
  addImageryProvider, setImageryProvider, removeAllImageryProvider,
  hiddenImageryProvider, visibleImageryProvider, hasImageryProviderByViewer,
  createWebMapServiceImageryProvider, createWebTileMapServiceImageryProvider
} from '@simple/cesium'

// 添加图层
addImageryProvider('myLayer', new UrlTemplateImageryProvider({ url: '...' }))

// 设置唯一图层（会清空其他所有图层）
setImageryProvider('base', provider)

// 显示/隐藏
hiddenImageryProvider('myLayer')
visibleImageryProvider('myLayer')

// 创建 WMS / WMTS
createWebMapServiceImageryProvider({ url: '...', layers: '...' })
createWebTileMapServiceImageryProvider({ url: '...', layer: '...' })
```

### 地形

```typescript
import { addTerrain, resetTerrain, hasTerrain, addDefaultTerrain } from '@simple/cesium'

addTerrain({ url: '/map/terrain/' })
resetTerrain() // 还原为 EllipsoidTerrainProvider
```

### 接图表

```typescript
import { addConnectChart, removeConnectChart } from '@simple/cesium'

await addConnectChart({ clampToGround: true, color: Color.RED, width: 2 })
removeConnectChart()
```

## 时钟

```typescript
import {
  getClock, setSpeed, getSpeed, setShouldAnimate, getShouldAnimate,
  setCurrentTime, getCurrentTimeDayJs, setStartTime, setStopTime,
  setStopTimeInfinity, watchCurrentTime
} from '@simple/cesium'
```

| 函数 | 说明 |
|------|------|
| `setSpeed(1.0)` | 设置动画速率 |
| `setShouldAnimate(true)` | 启停动画 |
| `setCurrentTime('2024/01/01 00:00:00')` | 设置当前时间 |
| `getCurrentTimeDayJs()` | 获取当前时间的 dayjs 对象 |
| `setStopTimeInfinity()` | 设置结束时间为无穷 |
| `watchCurrentTime(cb)` | 监听仿真时间变化 |

### 时间同步

```typescript
import { synchronizeTime } from '@simple/cesium'

const sync = synchronizeTime()
sync.run({ logicTime: '2024/01/01 00:00:00', actualSpeed: 1.0 })
```

## Entity

```typescript
import { createEntity, getEntityById, getEntityProperties, getEntityMetaData } from '@simple/cesium'
```

| 函数 | 说明 |
|------|------|
| `createEntity(options, collection?)` | 创建实体 |
| `getEntityById(id, sourceName)` | 按 ID 查找实体 |
| `getEntityProperties(entity)` | 获取实体的 properties |
| `getEntityMetaData(entity)` | 获取实体 metadata |
| `setEntityPosition(entity, position)` | 设置实体位置 |
