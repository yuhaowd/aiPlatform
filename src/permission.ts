//路由鉴权
import router from '@/router'
import nprogress from 'nprogress'
import setting from './setting'

//引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
//获取用户相关的小仓库内部token数据，去判断用户是否登录成功
//import useUserStore from './store/modules/user'
//引入大仓库
//import pinia from './store'

//let userStore = useUserStore(pinia)
router.beforeEach((to, from, next) => {
  // 启动页面进度条
  nprogress.start()
  // 修改页面标题
  document.title = `${setting.title}-${to.meta.title || ''}`

  // 这里不需要检查 token，因为所有路由都是公开的
  next()
})

//1.任意路由切换实现进度条业务nprogress（插件）
//2.路由鉴权(路由组件访问权限设置)
