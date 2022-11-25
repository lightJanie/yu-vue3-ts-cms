<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal ref="pageModalRef" :modalConfig="modalConfig"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const handleNewData = () => {
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    const handleEditData = (item: any) => {
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    return {
      formConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfig,
      handleNewData,
      handleEditData,
      pageModalRef
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
</style>
