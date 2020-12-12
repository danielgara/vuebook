import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import InputMaskDirective from './directives/formMaskInputDirective';

const app = createApp(App).use(router).use(store);
app.directive('input-mask', InputMaskDirective);
app.mount('#app');
