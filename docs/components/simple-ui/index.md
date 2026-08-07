# @simple/ui

基于 Vue 3 与 TypeScript 的组件库，覆盖业务表单、数据展示、拖拽编排、图形可视化等场景。

## 特性

- **Vue 3 组件** - CButton / CCard / CTable / CForm 等 60+ 开箱即用组件
- **业务组件** - 行为树编辑器（Behavior）、甘特图（Gantt）、BPMN 编辑器、Monaco 代码编辑器、拖拽编排（Draggable）
- **Element Plus 封装** - NavMenu / Breadcrumb / Pagination / Table / TreeSelect 等基于 Element Plus 的封装组件
- **表单场景** - Input / Select / DatePicker / DictionarySelect / Upload / InputNumber 等
- **数据展示** - DataList / HeaderTable / KeyVal / Steps / Tabs / IconImg 等
- **Hooks** - 组合式 API：useResizable / useDropdown / useBooleanState / useRoute 等
- **主题** - 内置亮色 / 暗色主题变量

## 安装

```bash
npm install @simple/ui
```

依赖 peer：`vue ^3.4`、`element-plus`（部分组件依赖）、`naive-ui`（Dropdown / Modal 依赖）。

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
import { CButton, CCard, CModal } from '@simple/ui'
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

## 组件列表

- **基础组件**：Button / Card / Icon / Link / Loading / Mask / Modal / Drawer / Dropdown / Tabs / Steps / Switch / Slider / Select / Input / InputNumber / DatePicker / TimeSelect / RadioGroup / TreeSelect
- **业务组件**：DataList / HeaderTable / KeyVal / Breadcrumb / NavMenu / Pagination / Table / Upload / PickFile / DictionarySelect / InputFilter / HeaderBlock / CloseBlock / DragItem
- **可视化 / 编辑器**：Gantt / Behavior（行为树编辑器）/ BpmnEditor / Monaco（代码编辑器）/ G6Graph / DrawingBoard / TinymceEditor
- **交互组件**：Draggable / Draggable2 / Draggable3 / Resizable / Split / Fold / IndividualCenter
