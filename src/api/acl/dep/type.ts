//账号信息ts类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//代表一个账号信息的ts类型
export interface User {
  id?: string
  email?: string
  password?: string
  username?: string
  level?: number //用户权限
  deleted: number
}
//数组包含全部的用户信息
export type Records = User[]
//获取全部用户信息接口返回的数据ts类型
export interface UserResponseData extends ResponseData {
  data: {
    records: Records
    searchCount: boolean
    size: number
    total: number
  }
}
