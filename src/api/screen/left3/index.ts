// 左三调用缺陷数据接口------人脸数据相关接口
import request from '@/utils/request'
import type { ResponseData } from './type'

// 导出 reqFault 函数，该函数调用 API 并返回结果
export const reqFault = () =>
  request.get<any, ResponseData>('/aiPlatform/face/download')
