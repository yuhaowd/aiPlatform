<template>
  <div class="chart-container">
    <div class="left-top">
      <span class="left-title" >故障占比</span>
    </div>
    <!--图形图标的容器-->
    <div class="left-bottom" ref="charts1"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
//引入echarts
import * as echarts from 'echarts'
import { autoResizerProps } from 'element-plus'
let charts1 = ref()
onMounted(() => {
  let mychart1 = echarts.init(charts1.value)

  //设置配置项
  let max = 100
  let min = 0
  //左侧
  let areaValueData = [20, 50, 80, 40, 60, 95, 74]
  let areaData = [
    {
      name: '未戴口罩',
      max: 100,
      num: 100,
      value: areaValueData[0],
    },
    {
      name: '划痕',
      max: 100,
      num: 100,
      value: areaValueData[1],
    },
    {
      name: '掉漆II',
      max: 100,
      num: 100,
      value: areaValueData[2],
    },
    {
      name: '生锈',
      max: 100,
      num: 100,
      value: areaValueData[3],
    },
    {
      name: '掉漆I',
      max: 100,
      num: 100,
      value: areaValueData[4],
    },
    {
      name: '未戴头盔',
      max: 100,
      num: 100,
      value: areaValueData[5],
    },
    {
      name: '进入危险区域',
      max: 100,
      num: 100,
      value: areaValueData[6],
    },
  ]
  let option1 = {
    color: [
      '#00e4ff',
      '#8E42FF',
      '#FF6B6B',
      '#FF9B42',
      '#F0D418',
      '#4346D3',
      '#F7517F',
    ],
    tooltip: {},

    radar: {
      zlevel: 20,
      shape: 'circle',
      scale: true,
      //雷达图的指示器，用来指定雷达图中的多个变量（维度）
      indicator: areaData,
      center: ['50%', '50%'],
      radius: '40%',
      startAngle: 30,
      name: {
        show: true,
        color: 'transparent',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(32,126,255, .5)',
          // opacity: 0.2
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(32,126,255, .5)',
          // opacity: 0.2
        },
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(32,126,255, 0.1)',
        },
      },
    },
    polar: {
      radius: '40%',
    },
    angleAxis: {
      zlevel: 0,
      min: 0,
      max: 360,
      interval: 5,
      clockwise: false,
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      zlevel: 0,
      min: 0,
      max: 100,

      axisLabel: {
        textStyle: {
          color: 'rgba(29,208,240,.5)',
        },
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      splitArea: {
        show: false,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: areaValueData,
            name: '指数',
            max: 100,
            //   label:{
            //       show:true,
            //   },
            areaStyle: {
              normal: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(32,126,255, 0.5)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(32,126,255, 0.1)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
        ],
        zlevel: 2,
        z: 4,
      },
      {
        type: 'pie',
        startAngle: 0,
        data: areaData
          .map((item) => {
            return {
              name: item.name, // + ' ' + item.value,
              value: item.value,
            }
          })
          .reverse(),
        radius: ['45%', '60%'],
        zlevel: -1,
        name: '',
        itemStyle: {
          normal: {
            // borderColor: 'white'
          },
        },
        label: {
          normal: {
            // position: 'top',
            fontSize: '16',
            color: '#18a058',
          },
        },
      },
    ],
  }
  mychart1.setOption(option1)

  //右侧
  const offsetX = 20
  const offsetY = 10
  // 绘制左侧面
  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      // 会canvas的应该都能看得懂，shape是从custom传入的
      const xAxisPoint = shape.xAxisPoint
      // console.log(shape);
      const c0 = [shape.x, shape.y]
      const c1 = [shape.x - offsetX, shape.y - offsetY]
      const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY]
      const c3 = [xAxisPoint[0], xAxisPoint[1]]
      ctx
        .moveTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .closePath()
    },
  })
  // 绘制右侧面
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const c1 = [shape.x, shape.y]
      const c2 = [xAxisPoint[0], xAxisPoint[1]]
      const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY]
      const c4 = [shape.x + offsetX, shape.y - offsetY]
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath()
    },
  })
  // 绘制顶面
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y]
      const c2 = [shape.x + offsetX, shape.y - offsetY] // 右点
      const c3 = [shape.x, shape.y - offsetX]
      const c4 = [shape.x - offsetX, shape.y - offsetY]
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath()
    },
  })
  // 注册三个面图形
  echarts.graphic.registerShape('CubeLeft', CubeLeft)
  echarts.graphic.registerShape('CubeRight', CubeRight)
  echarts.graphic.registerShape('CubeTop', CubeTop)

  const VALUE = [750, 600, 500, 400, 300, 200, 120]
  let yData = [120, 220, 160, 280, 112, 450, 679]
  //let yData2 = [10, 50, 20, 30, 40, 50, 20]
})
</script>
<style scoped>
.chart-container {
  flex: 1 1 0%;
  height: 230px;
  display: flex;
  margin-right: 5px;

  .left-top {
   

    height: 32px;
    width: 140px;
    .left-title {
      font-size: 15px;
font-weight: bold;
      color: #18a058;
margin-left:-5px;
      margin-top: -20px;
    }
  }
  .left-bottom {
    width: 100%;
    height: calc(100% - 36px);
    margin-left: -110px;
    margin-top:-20px;
  }
}
</style>
