<template>
  <div class="box8">
    <div class="box8-border">
      <div class="box8-title-left">
        <span class="box8-title">历史统计</span>
      </div>
      <div class="box8-bottom" ref="charts">
        <!--引入echart-->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
//引入echarts
import * as echarts from 'echarts'
let charts = ref()
//组件挂载完毕初始化图形图标
onMounted(() => {
  let mychart = echarts.init(charts.value)
  const fontColor = '#30eee9'
  let bgColor = '#040811'
  let color = ['#018FF5', '#E89202', '#f4e23e']

  const echartData = [
    {
      name: '1月',
      value1: 1366,
      value2: 0,
      value3: 0,
    },
    {
      name: '2月',
      value1: 3694,
      value2: 0,
      value3: 0,
    },
    {
      name: '3月',
      value1: 19727,
      value2: 1000,
      value3: 0,
    },
    {
      name: '4月',
      value1: 17046,
      value2: 1000,
      value3: 500,
    },
    {
      name: '5月',
      value1: 14780,
      value2: 13396,
      value3: 6365,
    },
    {
      name: '6月',
      value1: 19359,
      value2: 13220,
      value3: 5940,
    },
    {
      name: '7月',
      value1: 14229,
      value2: 10836,
      value3: 8234,
    },
  ]

  let legendItem = ['报警率', '故障率', '工单处理率']

  let xAxisData = [
    '08-22',
    '08-24',
    '08-26',
    '08-30',
    '09-01',
    '09-03',
    '09-05',
  ]
  let yAxisData1 = ['12', '30', '41', '23', '60', '30', '60']
  // [100, 138, 350, 173, 180, 150, 180, 230]
  let yAxisData2 = ['28', '60', '45', '60', '13', '60', '8']
  let yAxisData3 = ['60', '14', '60', '22', '60', '20', '60']
  const hexToRgba = (hex, opacity) => {
    let rgbaColor = ''
    let reg = /^#[\da-f]{6}$/i
    if (reg.test(hex)) {
      rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
        '0x' + hex.slice(3, 5),
      )},${parseInt('0x' + hex.slice(5, 7))},${opacity})`
    }
    return rgbaColor
  }
  let option = {
    // backgroundColor: bgColor,

    color: color,
    legend: {
      center: true,
      right: 5,
      top: 2,
      data: legendItem,
      itemWidth: 15, // 设置宽度
      itemHeight: 15, // 设置高度
      itemGap: 20, // 设置间距
      icon: 'rect',

      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 15,
        top: 20,
      },
    },
    calculable: true,
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        let html = ''
        params.forEach((v) => {
          console.log(v)
          html += `<div style="color: #666;font-size: 16px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                  color[v.componentIndex]
                };"></span>
                ${v.name}
                
                 ${v.seriesName}
                <span style="color:${
                  color[v.componentIndex]
                };font-weight:700;font-size: 18px">${v.value}</span>
                人`
        })

        return html
      },
      extraCssText: 'background: #fff; border-radius: 0;color: #333;',
    },
    grid: {
      top: 32,
      left: 25,
      height: 135,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: true,
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(184, 185, 188, 1)',
          },
        },
        axisLabel: {
          inside: false,
          textStyle: {
            color: 'rgba(255, 255, 255, 1)', // x轴颜色
            fontWeight: 'normal',
            fontSize: '16',
            lineHeight: 22,
          },
        },

        data: xAxisData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        // name: '单位：千瓦',
        axisLabel: {
          textStyle: {
            color: 'rgba(255, 255, 255,1)',
          },
        },
        nameTextStyle: {
          color: 'rgba(255, 255, 255,1)',

          fontSize: 16,
          lineHeight: 40,
          padding: [0, 0, 0, 0],
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: 'rgba(233, 233, 233, 0.7)',
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: legendItem[0],
        type: 'line',
        smooth: false, //是否平滑
        // showSymbol: false,/
        symbolSize: 0,
        zlevel: 3,
        lineStyle: {
          normal: {
            width: 4,
            color: color[0],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[0], 0.5),
            shadowOffsetY: 0,
          },
        },
        legendHoverLink: true,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[0], 0.3),
                },
                {
                  offset: 0.5,
                  color: hexToRgba(color[0], 0.1),
                },
              ],
              true,
            ),
            shadowColor: hexToRgba(color[0], 0.1),
            shadowBlur: 10,
          },
        },
        data: yAxisData1,
      },
      {
        name: legendItem[1],
        type: 'line',
        smooth: false,
        // showSymbol: false,
        symbolSize: 0,
        zlevel: 3,
        lineStyle: {
          normal: {
            width: 4,
            color: color[1],
            shadowBlur: 0,
            shadowColor: hexToRgba(color[1], 0.5),
            shadowOffsetY: 0,
          },
        },
        legendHoverLink: true,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[1], 0.3),
                },
                {
                  offset: 0.5,
                  color: hexToRgba(color[1], 0.1),
                },
              ],
              true,
            ),
            shadowColor: hexToRgba(color[1], 0.1),
            shadowBlur: 10,
          },
        },
        data: yAxisData2,
      },
      {
        name: legendItem[2],
        type: 'line',
        smooth: false,
        // showSymbol: false,
        symbolSize: 0,
        zlevel: 3,
        lineStyle: {
          normal: {
            width: 4,
            color: color[2],
            shadowBlur: 0,
            shadowColor: hexToRgba(color[1], 0.5),
            shadowOffsetY: 0,
          },
        },
        legendHoverLink: true,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[2], 0.3),
                },
                {
                  offset: 0.5,
                  color: hexToRgba(color[2], 0.1),
                },
              ],
              true,
            ),
            shadowColor: hexToRgba(color[2], 0.1),
            shadowBlur: 10,
          },
        },
        data: yAxisData3,
      },
    ],
  }
  mychart.setOption(option)
})
</script>
<style lang="scss" scoped>
.box8 {
  background: url(../../images/cell-bg.cd48c156.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex: 3.7 1 0%;

  margin-bottom: 10px;
  .box8-border {
    background-image: url(../../images/background-1.png),
      url(../../images/background-2.png), url(../../images/background-3.png),
      url(../../images/background-4.png);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 25px, 25px, 25px, 25px;
    background-position:
      top left,
      top right,
      bottom left,
      bottom right;
    width: 100%;
    height: 100%;

    .box8-title-left {
      background: url(../../images/cell-title-left.93093e78.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 14px;
      height: 32px;
      width: 140px;
      .box8-title {
        font-size: 16px;
        color: #0ff;
        margin-left: 36px;
        margin-top: 20px;
      }
    }
    .box8-bottom {
      width: 100%;
      height: calc(100% - 100px);
    }
  }
}
</style>
