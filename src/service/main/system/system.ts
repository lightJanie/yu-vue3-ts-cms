import yuRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return yuRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
