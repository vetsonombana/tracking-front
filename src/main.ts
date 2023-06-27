import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.scss'
import App from './App.vue'
import { router } from './routes'

const app = createApp(App)

app.use(router)

app.mount('#app')
