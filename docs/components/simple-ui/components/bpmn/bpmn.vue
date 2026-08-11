<template>
  <ClientOnly>
    <component
      v-if="CBpmn"
      :is="CBpmn"
      style="border: 1px solid #e4e7ed; border-radius: 4px;"
      :is-edit="true"
      @bpmSave="handleBpmSave"
      @processSave="handleProcessSave"
      @close="handleClose"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const CBpmn = ref<any>(null)

onMounted(async () => {
  const module = await import('@simple/ui')
  CBpmn.value = module.CBpmn
})

const handleBpmSave = (data: unknown) => {
  console.log('bpmSave:', data)
}
const handleProcessSave = (data: unknown) => {
  console.log('processSave:', data)
}
const handleClose = () => {
  console.log('close')
}
</script>
