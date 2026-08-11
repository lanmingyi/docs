# @simple/cesium

基于 Cesium 与 Vue 3 的地理信息可视化组件库。

## 特性

- **Vue 3 组件** - CViewer / CInfoPopup / CRightMenu / CNavigation / CScale 等开箱即用组件
- **Core** - 对 Cesium Viewer / Camera / Scene / Event / Clock 等核心 API 进行封装，简化调用
- **Hooks** - Vue 组合式 API：绘制区域、地图标记
- **Utils** - 坐标转换、Turf 地理计算、数据类型判断等工具函数
- **Extensions** - 经纬网、TileCoordinates 影像、WGS84 格网图层
- **ViewModel** - 多选与选中高亮的状态管理
- **自定义材质** - 
<!-- 弹爆辐射、传感器波、通信流光、圆扩散、线箭头等特效材质 -->
<!-- - **事件系统** - 左键 / 右键 / 双击 / 鼠标移动 / Tick 等事件的分区域管理 -->


## 安装

```bash
npm install @simple/cesium
```

要求 peer 依赖：`vue ^3.4`、`cesium 1.143` `(^1.129)`。

## 全局注册组件

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import SimpleCesium from '@simple/cesium'
import '@simple/cesium/dist/style.css';

const app = createApp(App)
app.use(SimpleCesium)
app.mount('#app')
```

## 按需引入

```typescript
import { CViewer, CInfoPopup, CRightMenu} from '@simple/cesium'
```

## 基础用法

```vue
<template>
  <c-viewer name="my-viewer" @viewer-created="onCreated">
    <c-info-popup />
    <c-rightMenu />
  </c-viewer>
</template>

<script setup lang="ts">
import { onViewerCreated } from '@simple/cesium'

const onViewerCreated((viewer) => {
  console.log('viewer 已创建')
})
</script>
```

## 使用 API

```typescript
import { createViewer, getViewer, getScene } from '@simple/cesium'

// 创建 Viewer
const viewer = createViewer('cesium-box', {
  infoBox: false,
  animation: false
})

// 获取 Viewer
const viewer = getViewer()

// 获取 Scene
const scene = getScene()
```
