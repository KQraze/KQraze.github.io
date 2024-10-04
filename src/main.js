import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import './registerServiceWorker'


const app = createApp(App)

app.use(createPinia()).mount('#app')
