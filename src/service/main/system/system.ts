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

export function createPageData(url: string, newData: any) {
  return yuRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return yuRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
