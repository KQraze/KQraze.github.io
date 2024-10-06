import {defineStore} from "pinia";
import { ref } from "vue";
import type {ITask, ITable, IResponseTasks, TTimeFields} from './interface'
import { api } from "@/shared/api";
import 'vue3-toastify/dist/index.css';

const getTimeWithoutSeconds = (time: string) => time.split(':', 2).join(':');

const tasksToRows = (tasks: ITask[]) => tasks.reduce((fieldsAtTime, task) => {
    fieldsAtTime[getTimeWithoutSeconds(task.time)] = { ...task }
    return fieldsAtTime;
} , {} as TTimeFields)

export const useTaskStore = defineStore('task-store', () => {
    const table = ref<ITable>()

    // api requests
    const updateNotifyRequest = async (task_id: number, notifyTime: string): Promise<any> => {
        await api.post(`tasks/${task_id}/notify`, {notify: true});
    }
    const updateTaskRequest = async (task_id: number, description: string, time: string): Promise<void> => {
        await Promise.all([api.post(`tasks/${task_id}/add`, {description: description}), updateNotifyRequest(task_id, time)])
    }
    const getTasksRequest = async (): Promise<IResponseTasks> => {
        const response = await api.get('users/1/tasks')

        return response.data;
    }

    const initTable = async () => {
        const data = await getTasksRequest();

        table.value = {
            titles: ['Time', data.user_name],
            fields: Object.entries(tasksToRows(data.tasks)).sort((a, b) => a[0].localeCompare(b[0]))
        }
    }

    return { table, initTable, updateTaskRequest }
})