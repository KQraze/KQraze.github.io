<script setup lang="ts">
import {ref} from "vue";
interface IProps {
  id: number;
  description: string;
}

defineProps()
defineEmits<{ (e: 'update-task', id: number, value: string): void }>()
</script>

<template>
  <td>
    <input
        type="text"
        placeholder="Assign a task..."
        @change="(e) => $emit('update-task', )"
    >
  </td>
</template>

<style scoped>

</style>