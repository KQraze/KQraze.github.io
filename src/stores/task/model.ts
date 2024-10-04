import {defineStore} from "pinia";
import { ref } from "vue";
import type { ITask, ITable, TTimeFields, IResponseTasks } from './interface'
import { api } from "@/shared/api";

const tasksToRows = (tasks: ITask[]) => tasks.reduce((fieldsAtTime, task) => {
    const timeWithoutSeconds = task.time.split(':', 2).join(':');

    fieldsAtTime[timeWithoutSeconds] = { ...task }
    return fieldsAtTime;
} , {} as TTimeFields)

/** api */
const getTasksRequest = async (): Promise<IResponseTasks> => {
    const response = await api.get('users/1/tasks')

    return response.data;
}
const updateTaskRequest = (task_id: number, description: string): Promise<any> => api.post(`tasks/${task_id}/add`, { description: description })
const updateNotifyRequest = (task_id: number): Promise<any> => api.post(`tasks/${task_id}/notify`, { notify: true })

/** store */
export const useTaskStore = defineStore('task-store', () => {
    const tasks = ref<ITask[]>([]);

    const table = ref<ITable>()

    const initTable = async () => {
        const data = await getTasksRequest();

        table.value = {
            titles: ['Time', data.user_name],
            fields: tasksToRows(data.tasks)
        }
    }

    return { table, initTable }
})