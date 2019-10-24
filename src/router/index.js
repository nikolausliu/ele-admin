import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: { title: '首页', icon: 'home' }
      },
    ]
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test/menu1/menu1-1',
    meta: { title: '多级菜单' },
    children: [
      {
        path: '/test/menu1/menu1-1',
        component: () => import('@/views/test/menu-1-1'),
        name: 'test-menu1-1',
        meta: { title: '菜单1-1', }
      },
      {
        path: '/test/menu1/menu1-2/menu1-2-1',
        component: () => import('@/views/test/menu-1-2-1'),
        name: 'test-menu1-2-1',
        meta: { title: '菜单1-2-1', }
      },
      {
        path: '/test/menu1/menu1-2/menu1-2-2',
        component: () => import('@/views/test/menu-1-2-2'),
        name: 'test-menu1-2-2',
        meta: { title: '菜单1-2-2', }
      },
      {
        path: '/test/menu2',
        component: () => import('@/views/test/menu-2'),
        name: 'test-menu2',
        meta: { title: '菜单2', }
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/common/login.vue'),
    name: 'login',
    meta: { title: 'login' }
  },
  {
    path: '/404',
    component: () => import('@/views/common/404.vue'),
    name: '404',
    meta: { title: '404' }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})
