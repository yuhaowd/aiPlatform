//右四调用缺陷数据接口------
import request from '@/utils/request'
import type { ResponseData } from './type'

// 导出 reqFault 函数，该函数调用 API 并返回结果
export const reqFault = () =>
  request.get<any, ResponseData>('/aiPlatform/fault/download')
