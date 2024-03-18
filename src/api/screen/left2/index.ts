import request from '@/utils/request'
import type { ResponseData } from './type'
export const reqImage = (fileName: string) =>
  request.get<any, ResponseData>(
     `/aiPlatform/file/download?fileName=${fileName}`,
    //`/aiPlatform/file/download/{fileName}?fileName=${fileName}`,
  )
