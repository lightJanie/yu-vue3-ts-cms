<template>
  <div class="page-content">
    <hy-table
      v-bind="contentTableConfig"
      :listData="dataList"
      :listCount="dataCount"
      v-model:page="pageInfo"
    >
      <!-- header中的插槽 -->
      <template #HeaderHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>
      <!-- 列中的插槽 -->
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

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'

import HyTable from '@/base-ui/table'

export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    const pageInfo = ref({ currentPage: 0, pageSize: 10 })

    watch(pageInfo, (newVal) => {
      getPageData()
    })

    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()
    // 从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    // 获取其他动态插槽的名称
    const otherPropSlots = props.contentTableConfig?.propsList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )
    return { dataList, dataCount, getPageData, pageInfo, otherPropSlots }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
