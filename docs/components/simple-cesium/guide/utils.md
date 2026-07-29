# Utils

共享工具函数，包括坐标转换、Turf 地理计算、数据类型判断等。

## 坐标工具

```typescript
import {
  cartesian3ToDegrees, screenPosToCartesian, screenPosToLBH,
  computedGroundDistance, computedGroundDistanceByDegrees,
  WGS84TransformToJ2000, getWorldPosition, translateByHeight
} from '@simple/cesium'
```

### cartesian3ToDegrees

笛卡尔坐标转经纬高。

```typescript
const degrees = cartesian3ToDegrees(cartesian3)
// { longitude: 116.4, latitude: 39.9, height: 0 }
```

### screenPosToCartesian

屏幕坐标转笛卡尔坐标（地球表面）。

```typescript
const cartesian = screenPosToCartesian(new Cartesian2(x, y))
```

### screenPosToLBH / screenToDegrees

屏幕坐标转经纬高。

```typescript
const lbh = screenPosToLBH(mouseEvent)
// { longitude: number, latitude: number, height: number }
```

### computedGroundDistance

计算两点地面距离（千米）。

```typescript
const km = computedGroundDistance(startCartesian, endCartesian)
```

### computedGroundDistanceByDegrees

通过经纬度计算地面距离。

```typescript
const distance = computedGroundDistanceByDegrees(
  { longitude: 116, latitude: 39, height: 0 },
  { longitude: 121, latitude: 31, height: 0 }
)
```

### 高级函数

| 函数 | 说明 |
|------|------|
| `WGS84TransformToJ2000(pos)` | WGS84 转 CGCS2000 |
| `getWorldPosition(scene, eventPos)` | 获取世界坐标（优先 pickPosition） |
| `translateByHeight(scene, eventPos, flightNode)` | 按高度平移坐标 |

## Turf 工具

基于 @turf/turf 的地理计算封装。

```typescript
import {
  getTurfPoint, getTwoPointsCenter, getTwoPointsDistance,
  getCenterByPoints, calculateAreaByPoints, calculateDestination,
  turfPolygon, turfArea
} from '@simple/cesium'
```

### getTwoPointsCenter

计算两点中点。

```typescript
const center = getTwoPointsCenter([116, 39], [121, 31])
```

### getTwoPointsDistance

计算两点距离。

```typescript
const km = getTwoPointsDistance([116, 39], [121, 31], { units: 'kilometers' })
```

### calculateAreaByPoints

计算多边形面积（平方公里）。

```typescript
const areaKm2 = calculateAreaByPoints([
  { longitude: 116, latitude: 39 },
  { longitude: 117, latitude: 39 },
  { longitude: 117, latitude: 40 },
])
```

### calculateDestination

根据起点、距离、方位角计算目标点。

```typescript
const dest = calculateDestination({
  origin: [116, 39],
  distance: 100,
  bearing: 45,
  options: { units: 'kilometers' }
})
```

## 数据类型判断

```typescript
import { isMap, isSet, isObject, isArray, isString, isNumber, isDefine } from '@simple/cesium'
```

## nextTick

等待 Viewer 就绪后执行回调。

```typescript
import { nextTick } from '@simple/cesium'

nextTick((viewer) => {
  // Viewer 已就绪
})
```
