<script setup lang="ts">
import {storeToRefs} from "pinia";
import { useTaskStore } from '@/stores/task';
import { TableTitles, TableRows } from "@/components/table";

const { table } = storeToRefs(useTaskStore())
</script>

<template>
  <table>
    <thead>
      <tr>
        <table-titles :titles="table?.titles ?? []" />
      </tr>
    </thead>
    <tbody>
      <table-rows />
    </tbody>
  </table>
</template>

<style>
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
