<script setup lang="ts">
import { TableField } from "@/components/table";
</script>

<template>
  <tr v-for="(item, time) in table.fields">
    <td>{{ time }}</td>
    <table-field v-for="i in 1" />
  </tr>
</template>

<style scoped>

</style>