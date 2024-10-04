<script setup lang="ts">
import {storeToRefs} from "pinia";
import { useTaskStore } from '@/stores/task';

const { table } = storeToRefs(useTaskStore())
</script>

<template>
  <table>
<!--    <thead>-->
<!--      <tr>-->
<!--        <th v-for="(title, ind) in table.titles" :key="ind">{{ title }}</th>-->
<!--      </tr>-->
<!--    </thead>-->
<!--    <tbody>-->
<!--      <tr v-for="(item, time) in table.fields">-->
<!--        <td>{{ time }}</td>-->
<!--        <td v-for="field in Object.keys(item)"><input type="text" placeholder="Assign a task..." v-model="item[field].text"></td>-->
<!--      </tr>-->
<!--    </tbody>-->
  </table>
</template>

<style scoped>
table {
  width: 100%;
  min-height: 90vh;
  background: #fbffef;
}
table, th, td {
  border: 2px solid #202020;
  border-collapse: collapse;
}

th {
  font-size: 24px;
  padding-block: 2vh;
  padding-inline: 2vw;
}

td:first-child {
  max-width: 20px;
  text-align: center;
  font-size: 24px;
  background: aliceblue;
}

td:not(:first-child) {
  width: 100%;
  padding: 0;
  background: white;
}

input {
  border: none;
  outline: none;
  background: transparent;
  padding-block: 1vh;
  padding-inline: 2vw;
  font-size: 18px;
  width: 100%;
  height: 100%;
  font-family: Verdana, sans-serif;
}
</style>
