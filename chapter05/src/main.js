import './server/server';
import { createApp } from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import './assets/css/style.css';

createApp(App).use(Vuesax).mount('#app')
