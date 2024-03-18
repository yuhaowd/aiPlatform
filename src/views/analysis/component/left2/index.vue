<template>
  <!--右侧-->
  <div class="box5-right">
    <div class="right-top">
      <span class="right-title">故障分类</span>
    </div>
    <div class="split"><div class="right-bottom" ref="charts2"></div></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
//引入echarts
import * as echarts from 'echarts'
import { autoResizerProps } from 'element-plus'

let charts2 = ref()
//组件挂载完毕初始化图形图标
onMounted(() => {
  let mychart2 = echarts.init(charts2.value)

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

  let option2 = {
    //你的代码
    backgroundColor: '#fff',
    legend: {
      show: true,
      right: 10,
      top: 10,
      itemGap: 30,
      itemWidth: 20,
      itemHeight: 50,

      // data: ['时长', '占比'],
      textStyle: {
        fontSize: 18,
        color: '#ffffff',
      },
    },
    color: ['#E7D36B', '#26D6D7', '#43EFFF'],
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontSize: 20, // 字体大小
      },
      axisPointer: {
        type: 'shadow',
      },
    },
    //网格
    grid: {
      top: '30%',
      left: '2%',
      right: '3%',
      bottom: 0,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: [
        '掉漆I',
        '生锈',
        '掉漆II',
        '划痕',
        '未戴口罩',
        '进入危险区域',
        '未戴头盔',
      ],
      axisLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'rgba(0, 0, 0, .8)',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 16,
        color: '#26a69a',
        margin: 20,
      },
    },
    yAxis: [
      {
        type: 'value',
        //   name: '时长：天',
        nameGap: 30,
        nameTextStyle: {
          color: '#26a69a',
          fontWeight: 400,
          fontSize: 16,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: 'rgba(0, 0, 0, .8)',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(239, 220, 220, 1)', //横向分割线
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 16,
          color: '#18a058',
        },
        min: 0,
        max: Math.ceil(Math.max.apply(null, yData) / 5) * 5,
        interval: Math.ceil(Math.max.apply(null, yData) / 5),
      },
      {
        type: 'value',
        // name: '%',cjdllldldllddlldkdfjldld;
        nameGap: 30,
        nameTextStyle: {
          color: '#26a69a',
          fontWeight: 400,
          fontSize: 16,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: 'rgba(239, 247, 253, .1)',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(239, 247, 253, .1)',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 16,
          color: '#E7FCFF',
        },
      },
    ],
    series: [
      {
        //  name: '时长',
        type: 'custom',
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)])
          return {
            type: 'group',
            x: 0,
            children: [
              {
                type: 'CubeLeft',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#F4D363',
                    },
                    {
                      offset: 1,
                      color: '#1FD6DB',
                    },
                  ]),
                  stroke: 'rgba(3, 25, 63, .1)', //边框颜色
                },
              },
              {
                type: 'CubeRight',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#F4D363',
                    },
                    {
                      offset: 1,
                      color: '#1FD6DB',
                    },
                  ]),
                  stroke: 'rgba(3, 25, 63, .1)', //边框颜色
                },
              },
              {
                type: 'CubeTop',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#A58D3B',
                    },
                    {
                      offset: 1,
                      color: '#F4D363',
                    },
                  ]),
                  stroke: 'rgba(3, 25, 63, .1)', //边框颜色
                },
              },
            ],
          }
        },
        data: yData,
      },
      {
        // name: '占比',
        type: 'line',
        showSymbol: true,
        // smooth: true,
        symbol: 'circle',
        symbolSize: 15,
        yAxisIndex: 1,
        itemStyle: {
          color: '#01EEFD',
        },
        lineStyle: {
          width: 3,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(67, 239, 255, .9)',
              },
              {
                offset: 1,
                color: 'rgba(1, 17, 49, .3)',
              },
            ]),
          },
        },
        // data: yData2,
      },
    ],
  }

  mychart2.setOption(option2)
})
</script>
<style lang="scss">
.box5-right {
  height: 250px;
  display: flex;
  margin-bottom: 10px;

  //右部模块

  .right-top {
    height: 38px;
    width: 80px;

    .right-title {
      font-size: 15px;
      color: #18a058;
      font-weight: bold;
    }
  }
  .split {
    width: 100%;

    height: calc(100% - 36px);
    position: relative;
    .right-bottom {
      position: absolute;
      width: 90%;
      height: calc(95% - 26px);
    }
  }
}
</style>
