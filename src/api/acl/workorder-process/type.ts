// 响应数据的主体部分
export interface WarningRecord {
  id: string
  warning_type: string
  date: number[]
  reason: string
  ticketStatus: string
  time: string
}

// 完整的响应数据
export interface WorkerResponse {
  code: number
  message: string
  data: WarningRecord[] // 数据部分是一个包含WarningRecord对象的数组
}
