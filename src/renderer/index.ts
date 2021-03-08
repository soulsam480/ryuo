import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'shoyo/dist/main.css';
import '/@/styles/app.scss';
const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
