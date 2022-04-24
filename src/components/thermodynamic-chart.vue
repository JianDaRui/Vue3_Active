<template>
  <div class="container">
    <div id="echart"></div>
  </div>
</template>
<script lang='tsx'>
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
export default defineComponent({
  setup() {
    const echart = ref(null)
    
    const getLoadEcharts = () => {
      const echartInstance = echarts.init(document.getElementById('echart'))
      var colorList = ["#4FE894", "#EF0C27", "#FEE7EA"];
      var listData = [
        { name: "不明", value: 20 },
        { name: "已判明", value: 20 },
        { name: "未发现", value: 20 }
      ];
      var option = {
        color: colorList,
        title: {
          x: "center",
          y: "center",
          textStyle: {
            color: "#000",
            fontSize: 20
          }
        },
        legend: {
          orient: "vertical",
          bottom: 5,
          align: "right",
          right: 15,
          textStyle: {
            color: "#000",
            fontSize: 20
          },
          selectedMode: false,
          data: ["元素1", "元素2", "元素3"]
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            type: "pie",
            center: ['50%', '50%'],
            radius: ['55%', '35%'],
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorList[params.dataIndex];
                }
              }
            },
            label: {
              show: true,
              fontSize: 10,
              color: "#000",
              formatter: function(data) {
                return data.name + ":" + data.percent.toFixed(0) + "%";
              }
            },
            labelLine: {
              normal: {
                length: 15,
                length2: 15,
                lineStyle: {
                  width: 2
                }
              }
            },
            data: listData
          }
        ]
      };
      echartInstance.setOption(option);
    }
    onMounted(() => {
      getLoadEcharts()
    })
    return {
      echart
    };
  }
})
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
