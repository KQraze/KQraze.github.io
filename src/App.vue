<script setup lang="ts">
import {storeToRefs} from "pinia";
import { useTaskStore } from '@/stores/task';
import { TableTitles, TableRows } from "@/components/table";
import {onMounted, onUnmounted} from "vue";

const { table } = storeToRefs(useTaskStore())
const { initTable } = useTaskStore()

let refreshInterval: any;

onMounted(() => {
  initTable()
  refreshInterval = setInterval(() => initTable(), 3000)
});

onUnmounted(() => clearInterval(refreshInterval))
</script>

<template>
  <table v-if="table">
    <thead>
      <tr>
        <table-titles :titles="table?.titles ?? []" />
      </tr>
    </thead>
    <tbody>
      <table-rows :fields="table?.fields ?? []" />
    </tbody>
  </table>
  <main class="table" v-else>
    <p>Загрузка таблицы...</p>
  </main>
</template>

<style>
table {
  width: 100%;
  min-height: 100dvh;
  background: #fff6e5;
}
table, th, td {
  border: 1px solid rgba(32, 32, 32, 0.75);
  border-collapse: collapse;
  font-size: 3vh;
}

th {
  padding-block: 2vh;
  padding-inline: 2vw;
}

td:first-child {
  max-width: 20px;
  text-align: center;
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
  font-size: 1em;
  width: 100%;
  height: 100%;
  font-family: "JetBrains Mono", sans-serif;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background: #fff6e5;
}

main p {
  font-size: 5vw;
}
</style>
