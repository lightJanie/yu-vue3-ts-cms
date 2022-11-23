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
    ></page-content>
    <div class="page-modal">
      <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
        <hy-form v-model="" v-bind=""></hy-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Confirm
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import HyForm from '@/base-ui/form'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    HyForm
  },
  setup() {
    const dialogVisible = ref(true)
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      formConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      dialogVisible
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
