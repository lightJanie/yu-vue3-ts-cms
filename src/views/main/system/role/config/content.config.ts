export const contentTableConfig = {
  title: '用户列表',
  propsList: [
    {
      prop: 'name',
      label: '姓名',
      minWidth: '100'
    },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '120'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '200',
      slotName: 'handler'
    }
  ],
  howIndexColumn: true,
  showSelectColumn: true
}
