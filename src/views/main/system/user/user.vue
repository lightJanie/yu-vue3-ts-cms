<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="name" label="用户名" min-width="180" />
      <el-table-column prop="realname" label="真实姓名" min-width="180" />
      <el-table-column prop="cellphone" label="电话号码" min-width="180" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import { useStore } from '@/store'

import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
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
    const propsList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'name', label: '', minWidth: '100' },
      { prop: 'name', label: '', minWidth: '100' }
    ]
    return { formConfig, userList, userCount, propsList }
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
</style>
