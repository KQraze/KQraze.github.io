import {defineStore} from "pinia";
import { ref } from "vue";
import type {ITask, ITable, IResponseTasks, TTimeFields} from './interface'
import 'vue3-toastify/dist/index.css';

const getTimeWithoutSeconds = (time: string) => time.split(':', 2).join(':');

const tasksToRows = (tasks: ITask[]) => tasks.reduce((fieldsAtTime, task) => {
    fieldsAtTime[getTimeWithoutSeconds(task.time)] = { ...task }
    return fieldsAtTime;
} , {} as TTimeFields)

export const useTaskStore = defineStore('task-store', () => {
    const table = ref<ITable>()

    const initTable = async (data: IResponseTasks) => {
        table.value = {
            titles: ['Time', data.user_name],
            fields: Object.entries(tasksToRows(data.tasks ?? [])).sort((a, b) => a[0].localeCompare(b[0]))
        }
    }

    return { table, initTable }
})