import {defineStore} from "pinia";
import { ref } from "vue";
import { TTimeFields, TField, TUsersFields, ITable, ITask } from './interface'
import { api } from "@/shared/api";

const USERS = ['Alex']

const usersToFields = (users: string[]) => users.reduce((fieldsAtUser, user) => {
    // fieldsAtUser[user] = {time, text: ''}
    return fieldsAtUser
}, {})

const timesToFields = (times: []): TTimeFields => times.reduce((fieldsAtTime, time) => {
    // fieldsAtTime[time] = usersToFields(USERS, time);
    return fieldsAtTime;
} , {})

const getTasksRequest = (): Promise<ITask[]> => api.get('users/1/tasks')
const updateTaskRequest = (task_id: number, description: string): Promise<any> => api.post(`tasks/${task_id}/add`, { description: description })
const updateNotifyRequest = (task_id: number): Promise<any> => api.post(`tasks/${task_id}/notify`, { notify: true })


export const useTaskStore = defineStore('task-store', () => {
    const tasks = ref<ITask[]>([]);

    const table = ref<ITable>()

    const initTable = async () => {
        const response = await getTasksRequest();

        table.value = {
            titles: ['Time', ...USERS],
            fields: timesToFields([])
        }
    }

    return { table }
})