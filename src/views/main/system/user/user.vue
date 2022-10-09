<template>
  <div class="user">
    <div class="search">
      <hy-form v-bind="formConfig" :formData="formData"></hy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HyForm from '@/base-ui/form'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formConfig, formData }
  }
})
</script>

<style scoped>
.user {
}
</style>
