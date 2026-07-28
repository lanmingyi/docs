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

## CInfoPopup

实体信息弹窗，跟随实体位置移动。

### Props

| 参数 | 类型 | 说明 |
|------|------|------|
| `data` | `{ id: string, source: string, name: string }` | 实体标识与名称 |

### Events

| 事件 | 说明 |
|------|------|
| `close` | 关闭面板 |

## CRightMenu

右键菜单组件。


### 配置菜单

```typescript
import { useRightMenu } from '@simple/cesium'

const rightMenu = useRightMenu()

rightMenu.setMenu(
  {
    group: 'baseGroup',
    key: 'locate',
    label: '定位',
    isShow: ({ data, position }) => true
  },
  (data) => {
    console.log('定位点击', data)
  }
)
```

### 注册右键事件

```typescript
rightMenu.setRightClick(({ position }) => {
  console.log('右键点击位置', position)
})
```

### 清除菜单

```typescript
rightMenu.clearMenu()                // 清除所有
rightMenu.clearByGroup('customGroup') // 按组清除
```



## CNavigation

导航控件（指南针 / 缩放 / 比例尺）。

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `duration` | `number` | `3` | 重置动画时长（秒） |
| `enableCompass` | `boolean` | `true` | 是否显示指南针 |
| `enableZoomControls` | `boolean` | `true` | 是否显示缩放控件 |
| `enableDistanceLegend` | `boolean` | `false` | 是否显示距离图例 |
| `enableCompassOuterRing` | `boolean` | `true` | 是否显示指南针外环 |
| `resetTooltip` | `string` | `'重置'` | 重置按钮提示文字 |
| `zoomInTooltip` | `string` | `'放大'` | 放大按钮提示文字 |
| `zoomOutTooltip` | `string` | `'缩小'` | 缩小按钮提示文字 |



## CScale

比例尺控件，显示在场景底部中央。

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `viewerName` | `string` | `'cesium-box'` | 关联的 Viewer 名称 |
| `count` | `number` | `3` | 显示几个刻度 |
| `updateType` | `'change' \| 'update'` | `'change'` | 更新方式：相机变化时或每帧更新 |


<!-- 
## CScaleSelect

带下拉菜单的 CScale，可切换预设比例尺级别。

### 预设级别

| 比例 | 标签 |
|------|------|
| 1 | 1:1400万 |
| 4 | 1:100万 |
| 5 | 1:50万 |
| 13.5 | 1:25万 |
| 60 | 1:5万 |
| 200 | 1:1万 |

--- -->
