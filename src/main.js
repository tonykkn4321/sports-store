import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import store from './store';    // ✅ Import your store
import router from './router';  // ✅ Import your router

const app = createApp(App);

// Inject the store and router into the app
app.use(store);
app.use(router);

app.mount('#app');
