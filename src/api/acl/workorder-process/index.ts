// 工单处理
import type { WorkerResponse } from './type'
import request from '@/utils/request'
export const reqWorker = (pageNum: number, pageSize: number) =>
  request.post<any, WorkerResponse>('/ticket/download', {
    pageNum,
    pageSize,
  })
