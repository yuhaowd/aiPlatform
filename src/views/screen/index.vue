<template>
  <div class="container">
    <!--数据大屏展示内容区域-->
    <div class="screen" ref="screen">
      <div class="top">
        <Top />
      </div>
      <div class="bottom">
        <div class="left">
          <Left1 class="left1"></Left1>
          <Left2 class="left2"></Left2>
          <Left3 class="left3"></Left3>
        </div>
        <div class="center">
          <CenterTop class="center-top"></CenterTop>
          <CenterBottom class="center-bottom"></CenterBottom>
        </div>
        <div class="right">
          <Right1 class="right1"></Right1>
          <Right2 class="right2"></Right2>
          <Right3 class="right3"></Right3>
          <Right4 class="right4"></Right4>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
//引入顶部的子组件
import Top from './components/top/index.vue'
//引入左侧三个组件
import Left1 from './components/left1/index.vue'
import Left2 from './components/left2/index.vue'
import Left3 from './components/left3/index.vue'
//引入中间的组件
import CenterTop from './components/center-top/index.vue'
import CenterBottom from './components/center-bottom/index.vue'
//引入右侧四个组件
import Right1 from './components/right1/index.vue'
import Right2 from './components/right2/index.vue'
import Right3 from './components/right3/index.vue'
import Right4 from './components/right4/index.vue'
//获取数据大屏展示内容盒子的DOM元素
let screen = ref()
onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})
//定义大屏缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
}
//监听视口变化
window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>
<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/screen-background.png) no-repeat;
  background-size: cover;
  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;

    left: 50%;
    top: 50%;
    //基点
    transform-origin: left top;
    .top {
      width: 100%;
      height: 58px;
    }
    .bottom {
      display: flex;
      .right {
        flex: 4;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-right: 10px;
        .right1 {
          flex: 3.4 1 0%;
        }
        .right2 {
          flex: 3 1 0%;
          margin: 10px 0px;
        }
        .right3 {
          flex: 3.7 1 0%;
          margin-bottom: 10px;
        }
        .right4 {
          flex: 3.7 1 0%;
          overflow: hidden;
        }
      }
      .center {
        flex: 6;
        display: flex;
        flex-direction: column;
        margin: 15px 20px 0;
        .center-top {
          flex: 6 1 0%;
          background: none;
        }
        .center-bottom {
          flex: 3 1 0%;
          display: flex;
          flex-direction: row;
          margin-top: 10px;
        }
      }

      .left {
        flex: 4;
        height: 1022px;
        display: flex;
        //竖着排列
        flex-direction: column;
        .left1 {
          flex: 2.6 1 0%;
        }
        .left2 {
          flex: 3.2 1 0%;
        }
        .left3 {
          flex: 4 1 0%;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
