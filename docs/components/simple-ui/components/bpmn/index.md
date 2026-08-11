---
aside: false
pageClass: bpmn-docs-page
---
<!-- ---
layout: home
--- -->


<style>
.bpmn-docs-page .vp-doc.container,
.bpmn-docs-page .vp-doc.content,
.bpmn-docs-page .vp-doc.content-container{
  max-width:100% !important;
}
.bpmn-docs-page .VPContent.has-sidebar{
  padding-right: 0px !important; 
}

/* 覆盖 bpmn 组件内 100vh 硬编码高度，避免画布超出 docs 布局 */
/* .bpmn-docs-page .main, */
.bpmn-docs-page .bpmn-viewer-container {
  height: 750px !important;
}
.bpmn-docs-page .djs-palette.two-column.open {
  width: 48px !important;
}
/* .bpmn-docs-page .bpmn-viewer-content {
  min-height: 0 !important;
  height: 100% !important;
} */
</style>

# 流程设计器
基于 bpmn-js 的 BPMN 2.0 流程编辑器，支持可视化拖拽设计业务流程、Token 模拟仿真、自定义属性面板。

## 基本使用
::: preview
demo-preview=./bpmn.vue
:::


# 流程仿真
::: preview
demo-preview=./bpmn-edit.vue
:::

## 关于 BPMN
BPMN（Business Process Model and Notation）是一套标准的业务流程建模符号，广泛应用于企业级流程设计、工作流引擎、审批流等场景。

## 完整流程设计器

`CBpmn` 为带顶部工具栏和属性面板的完整流程设计器，支持新建、保存、XML/SVG 导出、Token 模拟：

### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| product | `string` | `''` | 引擎类型，`activiti` / `flowable`，决定 moddle 扩展 |
| formFeildList | `array` | `[]` | 表单字段列表，传给属性面板 |
| isEdit | `boolean` | `false` | 是否可编辑 |
| isInit | `boolean` | `false` | 是否初始化状态 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| bpmSave | `object` | 保存流程，返回流程定义及表单/按钮/字段数据 |
| processSave | `object` | 流程保存回调 |
| close | `-` | 关闭设计器 |

## 模拟仿真

点击工具栏的模拟开关，可对流程进行 Token 仿真，直观展示流程流转路径。
## 功能说明

**流程设计**：拖拽左侧工具栏的元素到画布，通过连线构建完整流程
**属性编辑**：选中 UserTask 节点，在右侧面板编辑名称和审核角色
**XML 导入/导出**：支持传入 XML 加载流程，导出为 XML 供引擎执行
**Token 模拟**：仿真运行流程，验证逻辑正确性
## API

### Attributes

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| xml | `string` | `''` | BPMN XML 字符串，传入后自动加载渲染流程图 |
| props-width | `string` | `'320px'` | 右侧属性面板宽度 |
| role-list | `{ id: string, name: string }[]` | `[]` | 审核角色列表，选中 UserTask 节点时显示 |

### Methods

| 方法名 | 返回值 | 说明 |
|--------|--------|------|
| saveXml | `string \| false` | 导出当前流程为 XML 字符串，失败返回 `false` |
| processSimulation | `void` | 切换 Token 模拟模式 |

## 加载 XML

通过 `xml` 属性传入 BPMN XML 字符串，编辑器会自动加载并渲染流程图：
```vue
<template>
  <CBpmnEditor :xml="bpmnXml" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CBpmnEditor } from '@simple/ui'

const bpmnXml = ref(`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
  xmlns:camunda="http://camunda.org/schema/1.0/bpmn"
  targetNamespace="Examples">
  <process id="process_1" isExecutable="true">
    <startEvent id="start" name="开始" />
    <endEvent id="end" name="结束" />
    <sequenceFlow id="flow1" sourceRef="start" targetRef="end" />
  </process>
</definitions>`)
</script>
```

## 导出 XML

通过 `ref` 获取组件实例，调用 `saveXml()` 方法导出为 XML：
```vue
<template>
  <CBpmnEditor ref="editorRef" />
  <el-button @click="handleSave">保存</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CBpmnEditor } from '@simple/ui'

const editorRef = ref<InstanceType<typeof CBpmnEditor>>()

const handleSave = async () => {
  const xml = await editorRef.value?.saveXml()
  if (xml) {
    console.log('Saved XML:', xml)
  }
}
</script>
```
