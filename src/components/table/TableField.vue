<script setup lang="ts">
import {ref} from "vue";
interface IProps {
  id: number;
  description: string;
}

const props = defineProps<IProps>()
const emits = defineEmits<{ (e: 'update-task', id: number, value: string): void }>()

const change = (e: Event) => emits('update-task', props.id, e?.target?.value)
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