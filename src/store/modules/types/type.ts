import type { RouteRecordRaw } from 'vue-router'
//定义 小仓库数据state类型
export interface UserState {
  menuRoutes: RouteRecordRaw[]
  nameOrEmail: string
  password: string
  //avatar: string
  pageSelect: string
}
