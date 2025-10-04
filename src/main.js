import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import store from './store';
import router from './router';

const app = createApp(App);

// 🌍 Global currency formatter
app.config.globalProperties.$currency = (value, currency = "USD", locale = "en-US") =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(value);

// Inject the store and router into the app
app.use(store);
app.use(router);

app.mount('#app');
