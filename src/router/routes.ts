//对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    //登录
    path: '/',

    component: () => import('@/views/login/index.vue'),
    //component: () => import('@/layout/index.vue'),
    name: 'Login', //命名路由

    //路由原信息
    meta: {
      title: '登录',
      hidden: true, //true隐藏
    },
    // redirect: '/screen',
  },

  {
    //screen
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: '首页',
      hidden: false,
      icon: 'Avatar',
    },
  },

  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      hidden: true,
    },
    redirect: '/acl/user',
    children: [
      {
        //dep//机构用户
        path: '/acl/dep',
        component: () => import('@/views/acl/dep/index.vue'),
        name: 'Dep',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'Plus',
        },
      },
      {
        //camera//相机管理
        path: '/acl/camera',
        component: () => import('@/views/acl/camera/index.vue'),
        name: 'Camera',
        meta: {
          title: '相机管理',
          hidden: false,
          icon: 'Avatar',
        },
      },
      {
        //workorder-process//工单处理
        path: '/acl/workorder-process',
        component: () => import('@/views/acl/workorder-process/index.vue'),
        name: 'Workorder-process',
        meta: {
          title: '工单处理',
          hidden: false,
        },
      },
    ],
  },

  {
    //登录成功以后展示数据的路由
    path: '/layout',
    component: () => import('@/layout/index.vue'),
    // component: () => import('@/views/login/index.vue'),
    name: 'Layout',
    meta: {
      title: '功能',
      hidden: false,
    },
    children: [
      {
        //analysis//数据分析
        path: '/analysis',
        component: () => import('@/views/analysis/index.vue'),
        name: 'Analysis',
        meta: {
          title: '数据分析',
          hidden: false,
        },
      },
    ],
  },

  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    //任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404', //重定向
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
