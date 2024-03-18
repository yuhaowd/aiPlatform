//用户管理模块的接口
import request from '@/utils/request'
import type { UserResponseData, User } from './type'

//获取用户信息的接口
export const reqUserInfo = (pageNum: number, pageSize: number) =>
  request.post<any, UserResponseData>('/aiPlatform/user/list', {
    pageNum,
    pageSize,
  })
//新增和修改接口
export const reqAddOrUpdateUser = (data: User) => {
  //携带有id就修改
  if (data.id) {
    return request.post<any, any>('/aiPlatform/user/updae', data)
  } else {
    return request.post<any, any>('/aiPlatform/user/add', data)
  }
}
//根据用户名查询用户
export const reqSearchUser = (username: string) =>
  request.get<any, any>(`/aiPlatform/user/query?username=${username}`)
//删除
// 逻辑删除用户
//export const reqRemoveUser = () => request.get(`/aiPlatform/user/delete`)
export const reqRemoveUser = (id: string) => {
  console.log(id)
  request.get(`/aiPlatform/user/delete?id=${id}`)
}
