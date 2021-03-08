import { createRouter, createMemoryHistory } from 'vue-router';
import Home from './pages/Home.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});

export default router;
