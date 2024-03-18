//登录接口需要携带参数ts类型
export interface loginForm {
  nameOrEmail: string
  password: string
  pageSelect: string
}

interface dataType {
  //token?: string
  message?: string
  pageSelect: string
}
//登录接口返回的数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

/*interface userInfo {
  useId: number
  avatar: string
  nameOrEmail: string
  password: string
  pageSelect: string
  token: string
}

//定义服务器返回用户信息相关的数据类型
interface user {
  checkUser: userInfo
}

export interface userResponseData {
  code: number
  data: user
}*/
