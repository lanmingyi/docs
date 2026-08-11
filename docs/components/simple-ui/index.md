<!-- ---
layout: home
--- -->

# @simple/ui

基于 Vue 3 与 TypeScript 的组件库。

## 特性

- **Vue 3 组件** - CButton / CTable / CForm 等 60+ 开箱即用组件
- **业务组件** - BPMN 设计器、表单设计、门户设计、行为树编辑器（Behavior）
- **自定义组件** - 甘特图（Gantt）、拖拽面板（Draggable）、G6Graph
<!-- - **Element Plus 封装** - NavMenu / Breadcrumb / Pagination / Table / TreeSelect 等基于 Element Plus 的封装组件 -->
<!-- - **表单场景** - Input / Select / DatePicker / DictionarySelect / Upload / InputNumber 等 -->
<!-- - **数据展示** - DataList / HeaderTable / KeyVal / Steps / Tabs / IconImg 等 -->
<!-- - **Hooks** - 组合式 API：useResizable / useDropdown / useBooleanState / useRoute 等 -->
<!-- - **主题** - 内置亮色 / 暗色主题变量 -->


## 安装

```bash
npm install @simple/ui
```

依赖 peer：`vue ^3.4`、`ant-design-vue`、`element-plus`、`naive-ui`。

## 全局注册组件

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import SimpleUI from '@simple/ui'
import '@simple/ui/dist/style.css'

const app = createApp(App)
app.use(SimpleUI)
app.mount('#app')
```

## 按需引入

```typescript
import { CButton, CModal } from '@simple/ui'
```

## 基础用法

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CButton, CModal } from '@simple/ui'

const visible = ref(false)
</script>

<template>
  <CButton type="primary" @click="visible = true">打开弹窗</CButton>
  <CModal v-model="visible" title="标题">
    这里是弹窗内容
  </CModal>
</template>
```
