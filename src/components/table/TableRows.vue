<script setup lang="ts">
import { TableField } from "@/components/table";
import {type TTimeField, useTaskStore} from "@/stores/task";

interface IProps {
  fields: TTimeField[]
}

defineProps<IProps>()

const { updateTaskRequest } = useTaskStore()
</script>

<template>
  <tr v-for="(item, ind) in fields" :key="ind">
    <td>{{ item[0] }}</td>
    <table-field
        :id="item[1]?.id"
        :description="item[1]?.description"
        :time="item[1]?.time"
        @update-task="updateTaskRequest"
    />
  </tr>
</template>

<style scoped>

</style>