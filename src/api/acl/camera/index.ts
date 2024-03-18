// 相机处理

import request from '@/utils/request'
import type { cameraResponse } from './type'
export const reqCamera = (cameranames: string, camerastatus: string) =>
  request.post<any, cameraResponse>('/camera/status', {
    cameranames,
    camerastatus,
  })
