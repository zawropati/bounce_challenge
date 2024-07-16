import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, setMapStoreSuffix } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

setMapStoreSuffix('')

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)


app.use(pinia)

app.mount('#app')
