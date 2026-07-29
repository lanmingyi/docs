# 快速开始

## 安装

```bash
npm install @simple/cesium cesium vue@3
```

## 全局注册组件

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { SimpleCesium } from '@simple/cesium'

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
