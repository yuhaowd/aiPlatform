//统一管理项目用户相关接口
import request from '@/utils/request'
//import type { loginForm, loginResponseData, userResponseData } from './type'
import type { loginForm, loginResponseData } from './type'

//暴露请求函数
//注册接口方法

//登录接口方法:
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>('/aiPlatform/user/login', data)

//获取用户信息接口方法
//export const reqUserInfo = () =>
//request.post<any, userResponseData>(API.LOGIN_URL)
