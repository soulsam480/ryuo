import { createRouter, createMemoryHistory } from 'vue-router';
import Home from './pages/Home.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/note/:id',
      component: () => import('/@/pages/Note.vue'),
    },
  ],
});

export default router;
