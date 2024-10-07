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

export const api = axios.create({
    // @ts-ignore
    baseURL: import.meta.env.VITE_API_URL,
    headers: { 'Content-Type': 'application/json' }
})

export const useTaskDatabase = (setData: (data: any) => any) => {
    const data = ref(database, '/');

    onValue(data, (snapshot) => {
        setData(snapshot.val())

        toast(`The tasks have been changed`, {
            theme: "light",
            type: "info",
            position: "top-center",
            autoClose: 3000,
            transition: "slide",
            dangerouslyHTMLString: true
        });
    })

    const updateTask = (id: number, description: string) => {
        const updates = {} as { [key: string]: string }

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

// set(tasks, [
//     {description: '', id: 5, notify: false, time: '12:00:00', user_id: 1},
//     {description: 'fdsfssd', id: 7, notify: false, time: '13:00:00', user_id: 1},
//     {description: 'fdsfsfdffsdf', id: 8, notify: false, time: '13:30:00', user_id: 1},
//     {description: 'dsdasd', id: 9, notify: false, time: '14:00:00', user_id: 1},
//     {description: 'fdsfsdfsdfds', id: 10, notify: false, time: '14:30:00', user_id: 1},
//     {description: 'fsfdfsd', id: 12, notify: false, time: '15:30:00', user_id: 1},
//     {description: '12212', id: 13, notify: false, time: '16:00:00', user_id: 1},
//     {description: '', id: 1, notify: true, time: '10:00:00', user_id: 1},
//     {description: 'fdsfsfdffssdadsdf', id: 2, notify: true, time: '10:30:00', user_id: 1},
//     {description: '', id: 3, notify: true, time: '11:00:00', user_id: 1},
//     {description: '', id: 4, notify: true, time: '11:30:00', user_id: 1},
//     {description: '', id: 11, notify: true, time: '15:00:00', user_id: 1},
//     {description: '', id: 6, notify: true, time: '12:30:00', user_id: 1}
// ])