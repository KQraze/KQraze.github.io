<script setup lang="ts">
interface IProps {
  fields: any
}

defineProps<IProps>()

import { TableField } from "@/components/table";
</script>

<template>
  <tr v-for="(field, time) in fields">
    <td>{{ time }}</td>
    <td>{{ field }}</td>
<!--    <table-field v-for="field in field" :id="field.id" />-->
  </tr>
</template>

<style scoped>

</style>