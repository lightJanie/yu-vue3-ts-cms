<template>
  <div class="user">
    <div class="search">
      <hy-form :formItems="formItems"></hy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: 'id',
        rules: [],
        placeholder: '请输入id'
      },
      {
        type: 'input',
        label: '用户名',
        rules: [],
        placeholder: '请输入用户名'
      },
      {
        type: 'password',
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        type: 'select',
        label: '喜欢的运动',
        placeholder: '请选择喜欢的运动',
        options: [
          { title: '篮球', value: 'basketball' },
          { title: '足球', value: 'football' }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        placeholder: '请输入创建时间',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ]
    return { formItems }
  }
})
</script>

<style scoped>
.user {
}
</style>
