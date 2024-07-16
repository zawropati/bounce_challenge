import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, setMapStoreSuffix } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

// completely remove the suffix: this.user, this.cart
setMapStoreSuffix('')

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)


app.use(pinia)
app.use(router)

app.mount('#app')
