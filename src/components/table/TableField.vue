<script setup lang="ts">
interface IProps {
  id: number;
  description: string | null;
  time: string;
}

const props = defineProps<IProps>()
const emits = defineEmits<{ (e: 'update-task', id: number, text: string, time: string): void }>()

const change = (e: any) => {
  emits('update-task', props.id, e?.target?.value, props.time)
}
</script>

<template>
  <td>
    <input
        type="text"
        placeholder="Assign a task..."
        :value="description"
        @change="change"
    >
  </td>
</template>

<style scoped>

</style>