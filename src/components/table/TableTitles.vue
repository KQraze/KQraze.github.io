<script setup lang="ts">
interface IProps {
  titles: string[];
}
defineProps<IProps>()
</script>

<template>
  <th v-for="(title, ind) in titles" :key="ind">{{ title }}</th>
</template>

<style scoped>

</style>