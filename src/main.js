import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import './registerServiceWorker'
import './registerFirebaseMessages'


const app = createApp(App)

app.use(createPinia()).mount('#app')