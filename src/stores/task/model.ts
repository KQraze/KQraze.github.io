import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import { Time, TTimeFields, TField, TUsersFields, ITable } from './interface'
import {api} from "@/shared/api";

const USERS = ['Alex']
const TIMES_ARRAY: Time[] = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00']

const usersToFields = (users: string[], time: Time) => users.reduce((fieldsAtUser, user) => {
    fieldsAtUser[user] = {time, text: ''}
    return fieldsAtUser
}, {})

const timesToFields = (times: Time[]): TTimeFields => times.reduce((fieldsAtTime, time) => {
    fieldsAtTime[time] = usersToFields(USERS, time);
    return fieldsAtTime;
} , {}) as TTimeFields


export const useTaskStore = defineStore('task-store', () => {
    const tasks = ref([]);

    const table = ref<ITable>()

    const getUserTasks = (): Promise<any> => {
        return api.get('users/1/tasks')
    }

    const updateTask = (id: number, description: string) => api.post(`tasks/${id}/add`, { description: description })


    const initTable = () => {
        table.value = {
            titles: ['Time', ...USERS],
            fields: timesToFields(TIMES_ARRAY)
        }
    }

    return { table }
})