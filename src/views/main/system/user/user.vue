<template>
  <div class="user">
    <div class="search">
      <hy-form v-bind="formConfig"></hy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    return { formConfig }
  }
})
</script>

<style scoped>
.user {
}
</style>
