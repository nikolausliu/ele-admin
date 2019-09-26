import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
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
        // {
        //   path: 'test/menu1/menu1-1',
        //   component: () => import('@/views/test/menu-1-1'),
        //   name: 'test-menu1-1',
        //   meta: { title: '菜单1-1', }
        // },
        // {
        //   path: 'test/menu1/menu1-2/menu1-2-1',
        //   component: () => import('@/views/test/menu-1-2-1'),
        //   name: 'test-menu1-2-1',
        //   meta: { title: '菜单1-2-1', }
        // },
        // {
        //   path: 'test/menu1/menu1-2/menu1-2-2',
        //   component: () => import('@/views/test/menu-1-2-2'),
        //   name: 'test-menu1-2-2',
        //   meta: { title: '菜单1-2-2', }
        // },
        // {
        //   path: 'test/menu2',
        //   component: () => import('@/views/test/menu-2'),
        //   name: 'test-menu2',
        //   meta: { title: '菜单2', }
        // },
      ]
    },
    {
      path: '/test',
      component: Layout,
      redirect: '/test/menu1/menu1-1',
      meta: { title: '嵌套菜单' },
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
    // {
    //   path: '/test',
    //   redirect: '/test/menu1/menu1-1',
    //   component: Layout,
    //   meta: {
    //     title: '嵌套菜单'
    //   },
    //   children: [
    //     {
    //       path: 'menu1',
    //       name: 'test-menu1',
    //       // redirect: '/test/menu1/menu1-1',
    //       meta: { title: '菜单1' },
    //       children: [
    //         {
    //           path: 'menu1-1',
    //           component: () => import('@/views/test/menu-1-1'),
    //           name: 'test-menu1-1',
    //           meta: { title: '菜单1-1', }
    //         },
    //         {
    //           path: 'menu1-2',
    //           name: 'test-menu1-2',
    //           // redirect: '/test/menu1/menu1-2/menu1-2-1',
    //           meta: { title: '菜单1-2', },
    //           children: [
    //             {
    //               path: 'menu1-2-1',
    //               component: () => import('@/views/test/menu-1-2-1'),
    //               name: 'test-menu1-2-1',
    //               meta: { title: '菜单1-2-1', }
    //             },
    //             {
    //               path: 'menu1-2-2',
    //               component: () => import('@/views/test/menu-1-2-2'),
    //               name: 'test-menu1-2-2',
    //               meta: { title: '菜单1-2-2', }
    //             },
    //           ]
    //         },
    //       ]
    //     },
    //     {
    //       path: 'menu2',
    //       component: () => import('@/views/test/menu-2'),
    //       name: 'test-menu2',
    //       meta: { title: '菜单2', }
    //     },
    //   ]
    // },
  ]
})
