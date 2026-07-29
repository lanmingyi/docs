# Extensions

高级功能模块，包括影像图层、自定义材质和经纬网。

## 经纬网

```typescript
import { Graticule } from '@simple/cesium'

// 创建并添加经纬网到场景
const graticule = new Graticule(viewer)
```

## TileCoordinatesImageryProvider

瓦片坐标影像提供器（用于调试瓦片边界）。

```typescript
import { TileCoordinatesImageryProvider } from '@simple/cesium'

const provider = new TileCoordinatesImageryProvider()
viewer.scene.imageryLayers.addImageryProvider(provider)
```

## WGS84GridLayer

WGS84 经纬网格图层。

```typescript
import { WGS84GridLayer, addImageryProvider } from '@simple/cesium'

addImageryProvider('grid', new WGS84GridLayer())
```
