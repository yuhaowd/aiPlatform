//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@/api/user'
//引入数据类型
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
//引入操作本地存储的工具方法
//import { SET_TOKEN, GET_TOKEN } from '@/utils/tokens'
//引入常量路由
import { constantRoute } from '@/router/routes'
//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state: (): UserState => {
    return {
      //token: GET_TOKEN(), //用户的唯一标识token
      menuRoutes: constantRoute, //仓库存储生成菜单需要的数组（路由）
      nameOrEmail: '',
      pageSelect: 'admin',
      password: '',
      //  avatar: '',
    }
  },
  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data)
      if (result == null) {
        // console.log(1);
      }
      // console.log(result)
      if (result.code == 200) {
        console.log(12334520)

        // 直接从登录接口获取用户信息并存储到仓库中
        //   this.token = result.data.token as string
        //this.nameOrEmail = result.data.nameOrEmail // 假设登录接口返回了 user 对象，其中包含 nameOrEmail 属性
        // this.avatar = result.data.avatar // 假设登录接口返回了 user 对象，其中包含 avatar 属性
        this.pageSelect = result.data.pageSelect // 假设登录接口返回了 user 对象，其中包含 pageSelect 属性
        //this.password = result.data.password
        // 本地存储持久化存储一份
        //  SET_TOKEN(result.data.token as string)

        return 'ok'
      } else {
        //console.log(1233)

        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

//对外暴露获取小仓库方法
export default useUserStore
