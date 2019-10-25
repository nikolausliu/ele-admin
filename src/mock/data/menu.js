const menu = [
  {
    path: '/home',
    title: '首页',
    icon: 'el-icon-s-shop',
    children: [],
  },
  {
    path: '/test',
    title: '多级菜单',
    icon: 'el-icon-s-promotion',
    children: [
      {
        path: '/test/menu1',
        title: '菜单1',
        children: [
          {
            path: '/test/menu1/menu1-1',
            title: '菜单1-1',
            children: [],
          },
          {
            path: '/test/menu1/menu1-2',
            title: '菜单1-2',
            children: [
              {
                path: '/test/menu1/menu1-2/menu1-2-1',
                title: '菜单1-2-1',
                children: [],
              },
              {
                path: '/test/menu1/menu1-2/menu1-2-2',
                title: '菜单1-2-2',
                children: [],
              },
            ],
          },
        ],
      },
      {
        path: '/test/menu2',
        title: '菜单2',
        children: [],
      },
    ],
  },
]

export default menu
