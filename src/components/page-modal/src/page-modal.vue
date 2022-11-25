<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <hy-form v-bind="modalConfig"></hy-form>
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import HyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  setup() {
    const dialogVisible = ref(true)
    const formData = ref({})
    return { dialogVisible, formData }
  }
})
</script>

<style scoped></style>
