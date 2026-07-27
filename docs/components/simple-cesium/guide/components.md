# Vue 组件

::: preview
demo-preview=./CesiumViewer.vue
:::

## CViewer

Cesium Viewer 容器组件，自动创建并管理 Viewer 生命周期。

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `name` | `string` | `'cesium-box'` | 容器 ID，用于区分多个 Viewer |
| `eventList` | `Function[]` | `[]` | Viewer 创建后执行的回调列表 |
| `defaultViewerConfig` | `CreateViewerType` | `undefined` | 覆盖默认的 Viewer 构造参数 |
| `defaultCamera` | `{ west, south, east, north }` | `{90,10,120,40}` | 默认相机视角范围 |

### Events

| 事件 | 说明 |
|------|------|
| `viewer-created` | Viewer 创建完成后触发 |

---
