// 响应数据的主体部分
export interface cameraRecord {
  id: string
  cameranames: string
  camerastatus: string
}

// 完整的响应数据
export interface cameraResponse {
  code: number
  message: string
  data: cameraRecord[]
}
