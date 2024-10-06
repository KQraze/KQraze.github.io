import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import './registerServiceWorker'
import './firebase/index.ts'


const app = createApp(App)

app.use(createPinia()).mount('#app')