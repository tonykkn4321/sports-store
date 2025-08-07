import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import store from "./store"

const app = createApp(App)

// Inject the store into the app
app.use(store)

app.mount('#app')
