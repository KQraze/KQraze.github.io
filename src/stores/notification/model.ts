import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useNotificationStore = defineStore('useNotificationStore', () => {
    const sendNotificationRule = ref(localStorage.getItem('notification'))

    const notificationAvailable = computed(() => sendNotificationRule.value === 'true')
    const setNotificationRule = (rule: 'true' | 'false') => {
        sendNotificationRule.value = rule;
        localStorage.setItem('notification', sendNotificationRule.value);
    };

    const showModalForNotification = () => {
        !localStorage.getItem('notification') ? setNotificationRule(confirm('Do you agree to the notifications?') ? 'true' : 'false') : null
    }

    return { notificationAvailable, showModalForNotification };
})