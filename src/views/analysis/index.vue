<template>
  <div style="font-size: 20px; font-weight: bold; color: black;margin-left:20px">数据分析</div>
  <el-row>
    <el-col :span="11" style="margin-left: 20px">
      <div class="grid-content ep-bg-purple" />
      <el-card class="box-card" style="margin-top: 10px; height: 195px">
        <Left1 class="left1"></Left1>
      </el-card>
      <el-card class="box-card" style="margin-top: 10px; height: 235px">
        <Left2 class="left2"></Left2>
      </el-card>
      <el-card class="box-card" style="margin-top: 10px; height: 235px">
        <Left3 class="left3"></Left3>
      </el-card>
    </el-col>

    <el-col :span="12" style="margin-left: 20px">
      <div class="grid-content ep-bg-purple" />
      <el-card class="box-card" style="margin-top: 10px; height: 300px">
        <Right1 class="right1"></Right1>
      </el-card>
      <el-card class="box-card" style="margin-top: 20px; height: 365px">
        <Right2 class="right2"></Right2>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

//引入左侧三个组件
import Left1 from '../analysis/component/left1/index.vue'
import Left2 from '../analysis/component/left2/index.vue'
import Left3 from '../analysis/component/left3/index.vue'

//引入右侧er个组件
import Right1 from '../analysis/component/right1/index.vue'
import Right2 from '../analysis/component/right2/index.vue'
</script>
<style lang="scss">
/*.container {
width: 100%;
height: 100%;

.screen {
  position: fixed;
  width: 1426px;
  height: 913px;

  left: 50%;
  top: 50%;
  //基点
  transform-origin: left top;

  .bottom {
    display: flex;
    .right {
      flex: 4;
      display: flex;
      flex-direction: column;
      margin-left: 40px;
      margin-right: 10px;
      .right1 {
        flex: 3.4 1 0%;
      }
      .right2 {
        flex: 3 1 0%;
        margin: 10px 0px;
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
}* */
//}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
}
</style>
