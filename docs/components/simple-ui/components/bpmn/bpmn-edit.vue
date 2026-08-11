<template>
  <ClientOnly>
    <component
      v-if="CBpmnEditor"
      :is="CBpmnEditor"
      style="border: 1px solid #e4e7ed; border-radius: 4px;"
      :role-list="roleList"
    />
    <!-- props-width="200px" -->
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const CBpmnEditor = ref<any>(null)
const roleList = [
  { id: 'admin', name: '管理员' },
  { id: 'manager', name: '经理' },
  { id: 'finance', name: '财务' },
]

onMounted(async () => {
  const module = await import('@simple/ui')
  CBpmnEditor.value = module.CBpmnEditor
})
</script>
