import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/css/materialIcons.css';

createApp(App).use(router).use(store).mount('#app');
