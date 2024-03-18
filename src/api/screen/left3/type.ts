//缺陷信息ts类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
  data: Face[]
}

//代表一个账号信息的ts类型
export interface Face {
  cause: string
  id: number
  image: string
  isAlarm: number
  isGenWorkorder: number
  level: number
  location: string
  time: string
  type: string
}
