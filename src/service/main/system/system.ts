import yuRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return yuRequest.post({
    url: url,
    data: queryInfo
  })
}
