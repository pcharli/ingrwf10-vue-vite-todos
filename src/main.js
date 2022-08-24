import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//import './assets/bulma.min.css'
//import 'bulma'

import './assets/main.css'
import './assets/base.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
