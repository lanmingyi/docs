# Hooks

Vue 组合式 API，用于交互式图形绘制与地图标记。

## useDrawPointArea

绘制点。

```typescript
import { useDrawPointArea } from '@simple/cesium'

const drawer = useDrawPointArea()

drawer.start(({ type, degrees, cartesian }) => {
  console.log('点位', degrees)
})

drawer.stop()       // 停止绘制
drawer.clear()      // 清除绘制的点
drawer.stopAndClear()
```

## useDrawPolylineArea

绘制折线（左键加点，右键结束）。

```typescript
import { useDrawPolylineArea } from '@simple/cesium'

const drawer = useDrawPolylineArea()

drawer.start(({ timing, type, degrees }) => {
  if (timing === 'stop') {
    console.log('折线完成', degrees)
  }
})
```

## useDrawRectangleArea

绘制矩形（左键拖拽）。

```typescript
import { useDrawRectangleArea } from '@simple/cesium'

const drawer = useDrawRectangleArea()

drawer.start(({ timing, type, degrees, cartesian }) => {
  if (timing === 'stop') {
    console.log('矩形完成', degrees)
  }
})
```

## useDrawPolygonArea

绘制多边形（左键加点，右键闭合）。

```typescript
import { useDrawPolygonArea } from '@simple/cesium'

const drawer = useDrawPolygonArea()

drawer.start(({ timing, type, degrees }) => {
  if (timing === 'stop') {
    console.log('多边形完成', degrees)
  }
})
```

## useDrawEllipsisArea

绘制椭圆 / 圆形（左键拖拽）。

```typescript
import { useDrawEllipsisArea } from '@simple/cesium'

const drawer = useDrawEllipsisArea()

drawer.start(({ timing, type, majorAxis, minorAxis }) => {
  if (timing === 'stop') {
    console.log('椭圆完成', { majorAxis, minorAxis })
  }
})
```

## useCreatePlaceEntity

地图标记实体创建。

```typescript
import { useCreatePlaceEntity } from '@simple/cesium'

const placeEntity = useCreatePlaceEntity()

placeEntity.create('天安门', {
  longitude: 116.397,
  latitude: 39.908,
  height: 0
})

placeEntity.clear()
placeEntity.destroy()
```

<!-- ## useCesiumEvent

底层事件注册（未在 hooks/index.ts 中导出）。

```typescript
import { useCesiumEvent } from '@simple/cesium/hooks/use-cesium-event'
``` -->
