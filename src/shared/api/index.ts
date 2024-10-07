import axios from "axios";

import {
    ref,
    onValue,
    update,
    get,
} from "firebase/database";
import {
    database,
} from "@/firebase";
import {toast} from "vue3-toastify";
import {useNotificationStore} from "@/stores/notification";
import {storeToRefs} from "pinia";

export const api = axios.create({
    // @ts-ignore
    baseURL: import.meta.env.VITE_API_URL,
    headers: { 'Content-Type': 'application/json' }
})

export const useTaskDatabase = (setData: (data: any) => any) => {
    const data = ref(database, '/');
    const { notificationAvailable } = storeToRefs(useNotificationStore())
    onValue(data, (snapshot) => {
        setData(snapshot.val())

        notificationAvailable.value ? toast(`The tasks have been changed`, {
            theme: "light",
            type: "info",
            position: "top-center",
            autoClose: 3000,
            transition: "slide",
            dangerouslyHTMLString: true
        }) : null;
    })

    const updateTask = (id: number, description: string) => {
        const updates = {} as { [key: string]: string }

//      seeders
//      const tasks = ref(database, 'tasks')
//         set(tasks, [
//     {description: '', id: 1, notify: true, time: '08:00:00', user_id: 1},
//     {description: '', id: 2, notify: true, time: '08:30:00', user_id: 1},
//     {description: '', id: 3, notify: true, time: '09:00:00', user_id: 1},
//     {description: '', id: 4, notify: true, time: '09:30:00', user_id: 1},
//     {description: '', id: 5, notify: true, time: '10:00:00', user_id: 1},
//     {description: 'fdsfsfdffssdadsdf', id: 6, notify: true, time: '10:30:00', user_id: 1},
//     {description: '', id: 7, notify: true, time: '11:00:00', user_id: 1},
//     {description: '', id: 8, notify: true, time: '11:30:00', user_id: 1},
//     {description: '', id: 9, notify: false, time: '12:00:00', user_id: 1},
//     {description: '', id: 10, notify: true, time: '12:30:00', user_id: 1},
//     {description: 'fdsfssd', id: 11, notify: false, time: '13:00:00', user_id: 1},
//     {description: 'fdsfsfdffsdf', id: 12, notify: false, time: '13:30:00', user_id: 1},
//     {description: 'dsdasd', id: 13, notify: false, time: '14:00:00', user_id: 1},
//     {description: 'fdsfsdfsdfds', id: 14, notify: false, time: '14:30:00', user_id: 1},
//     {description: '', id: 15, notify: true, time: '15:00:00', user_id: 1},
//     {description: 'fsfdfsd', id: 16, notify: false, time: '15:30:00', user_id: 1},
//     {description: '12212', id: 17, notify: false, time: '16:00:00', user_id: 1},
// ])

        let index;
        get(data).then((snap) => {
            const tasks = snap.val().tasks;

            index = tasks.findIndex((item: any) => item.id === id)

            if (typeof index === 'number' && index >= 0) {
                updates[`/tasks/${index}/description`] = description;
                return update(data, updates)
            }
        })
    }

    return { updateTask }
}

