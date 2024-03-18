<template>
  <div class="box5">
    <div class="box5-left">
      <div class="box5-left-border">
        <div class="left-top">
          <span class="left-title">故障占比</span>
        </div>
        <!--图形图标的容器-->
        <div class="left-bottom" ref="charts1"></div>
      </div>
    </div>
    <!--右侧-->
    <div class="box5-right">
      <div class="box5-right-border">
        <div class="right-top">
          <span class="right-title">故障分类</span>
        </div>
        <div class="split"><div class="right-bottom" ref="charts2"></div></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
//引入echarts
import * as echarts from 'echarts'
import { autoResizerProps } from 'element-plus'
let charts1 = ref()
let charts2 = ref()
//组件挂载完毕初始化图形图标
onMounted(() => {
  let mychart1 = echarts.init(charts1.value)
  let mychart2 = echarts.init(charts2.value)
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
            color: '#fff',
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

  let option2 = {
    //你的代码
    backgroundColor: '#031a40',
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
          color: 'rgba(239, 247, 253, .1)',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 16,
        color: '#E7FCFF',
        margin: 20,
      },
    },
    yAxis: [
      {
        type: 'value',
        //   name: '时长：天',
        nameGap: 30,
        nameTextStyle: {
          color: '#ffffff',
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
        min: 0,
        max: Math.ceil(Math.max.apply(null, yData) / 5) * 5,
        interval: Math.ceil(Math.max.apply(null, yData) / 5),
      },
      {
        type: 'value',
        // name: '%',cjdllldldllddlldkdfjldld;
        nameGap: 30,
        nameTextStyle: {
          color: '#ffffff',
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
                color: 'rgba(67, 239, 255, .3)',
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
.box5 {
  flex: 3 1 0%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  display: flex;
  margin-bottom: 10px;
  //左部模块
  .box5-left {
    flex: 1 1 0%;
    background: url(../../images/cell-bg.cd48c156.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    margin-right: 5px;

    .box5-left-border {
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
      .left-top {
        background: url(../../images/cell-title-left.93093e78.png) no-repeat;
        background-size: 100% 100%;
        margin-top: 14px;

        height: 32px;
        width: 140px;
        .left-title {
          font-size: 16px;

          color: #0ff;
          margin-left: 36px;
          margin-top: 20px;
        }
      }
      .left-bottom {
        width: 100%;
        height: calc(100% - 56px);
      }
    }
  }
  //右部模块
  .box5-right {
    flex: 1 1 0%;
    background: url(../../images/cell-bg.cd48c156.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    margin-left: 5px;

    .box5-right-border {
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

      .right-top {
        background: url(../../images/cell-title-right.9b6472b4.png) no-repeat;
        float: right;
        background-size: 100% 100%;
        margin-top: 14px;
        height: 38px;
        width: 140px;

        .right-title {
          font-size: 16px;
          color: #0ff;
          margin-left: 36px;
          margin-top: 20px;
        }
      }
      .split {
        width: 100%;
        margin-top: 50px;
        height: calc(100% - 36px);
        position: relative;
        .right-bottom {
          position: absolute;
          width: 100%;
          height: calc(90% - 36px);
        }
      }
    }
  }
}
</style>
