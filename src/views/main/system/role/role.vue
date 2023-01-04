<template>
  <div class="role">
    <page-search :formConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{
            children: 'children',
            label: 'name'
          }"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 20px;
}
</style>
