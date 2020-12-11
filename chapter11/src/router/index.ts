import { createRouter, createWebHashHistory } from 'vue-router';
/*import Home from '../views/Home.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];*/


const routes:any = [];
const requireRoutes = require.context(
  './routes',
  true,
  /^(?!.*test).*\.js$/is,
);

requireRoutes.keys().forEach((fileName) => {
  routes.push({
    ...requireRoutes(fileName).default,
  });
});

//console.log(routes);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
