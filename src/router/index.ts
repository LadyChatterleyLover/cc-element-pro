import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: () => import('../views/home/index.vue'),
          meta: {
            title: '首页',
          },
        },
        {
          path: '/proCard',
          component: () => import('../views/proCard/index.vue'),
          meta: {
            title: '高级卡片',
          },
        },
        {
          path: '/checkCard',
          component: () => import('../views/checkCard/index.vue'),
          meta: {
            title: 'checkCard 多选卡片',
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
