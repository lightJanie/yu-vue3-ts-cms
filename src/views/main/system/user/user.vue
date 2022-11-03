<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <div class="content">
      <hy-table
        :title="title"
        :listData="userList"
        :propsList="propsList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectionChange="selectionChange"
      >
        <template #status="scope">
          <el-button
            plain
            :type="scope.row.enable ? 'success' : 'danger'"
            size="small"
          >
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handler>
          <div class="handle-btns">
            <el-button size="small" type="text" :icon="Edit">编辑</el-button>
            <el-button size="small" type="text" :icon="Delete">删除</el-button>
          </div>
        </template>
        <template #footer> hhh </template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HyTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const title = '用户列表'
    const propsList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: '100'
      },
      {
        prop: 'cellphone',
        label: '手机号码',
        minWidth: '120'
      },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
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
    ]
    const showIndexColumn = true
    const showSelectColumn = true
    return {
      formConfig,
      title,
      userList,
      userCount,
      propsList,
      showIndexColumn,
      showSelectColumn
    }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}

.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
