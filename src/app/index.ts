import '@/app/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from "@/app/App.vue"
import router from '@/app/providers/router/index.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

export default app
