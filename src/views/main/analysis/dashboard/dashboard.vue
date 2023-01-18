<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '300px', height: '300px' }">
      dashboard
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      const echartInstance = echarts.init(divRef.value!)
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      }

      echartInstance.setOption(option)
    })
    return { divRef }
  }
})
</script>

<style scoped></style>
