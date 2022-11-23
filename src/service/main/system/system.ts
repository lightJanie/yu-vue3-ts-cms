import yuRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return yuRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url:/users/id
export function deletePageData(url: string) {
  return yuRequest.delete<IDataType>({
    url: url
  })
}
