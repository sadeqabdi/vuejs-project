import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useProductsStore } from './stores/products'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

const productsStore = useProductsStore(pinia)
productsStore.fetchProducts()

app.use(router)

app.mount('#app')
