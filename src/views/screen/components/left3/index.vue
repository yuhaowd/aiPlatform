<template>
  <div class="box3">
    <div class="box3-border">
      <div class="header-left">
        <span class="header-title">缺陷列表</span>
      </div>
      <div class="box3-bottom">
        <div class="box3-bottom-header">
          <span class="first-col">缺陷类型</span>
          <span style="flex: 2">时间</span>
          <span style="flex: 1">原因</span>
          <span style="flex: 2">位置</span>
          <span style="flex: 1">等级</span>
        </div>
        <div class="box3-bottom-list">
          <div>
            <div
              style="
                width: auto;

                /*transform: translate(0px, -509px);*/
                transform: translate(0px, -425px);
                transition: all 300ms ease-in 0s;
                overflow: hidden;
                display: block;
              "
            >
              <div style="overflow: hidden">
                <div
                  v-for="(item, index) in faultArr"
                  :key="index"
                  class="row fault-list-body"
                  style="display: flex"
                >
                  <span class="fault-list-row" style="flex: 1.5 1 0%">
                    {{ item.cause }}
                  </span>
                  <span
                    class="fault-list-row"
                    style="flex: 2 1 0%; color: rgb(138, 160, 163)"
                  >
                    {{ item.time }}
                  </span>
                  <span class="fault-list-row" style="flex: 1 1 0%">
                    {{ item.cause }}
                  </span>
                  <span class="fault-list-row" style="flex: 2 1 0%">
                    {{ item.location }}
                  </span>
                  <span class="fault-list-row" style="flex: 1 1 0%">
                    {{ item.level }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reqFault } from '@/api/screen/left3/index'
import { onMounted, ref } from 'vue'
import type { ResponseData, Face } from '@/api/screen/left3/type'

//数组显示信息

let faultArr = ref<Face[]>([])
//缺陷类型
//let type = ref<string>('管道')
//时间
//let time = ref<string>('')
//原因
//let reason = ref<string>('')
//位置
//let location = ref<string>('')
//等级
//let level = ref<number>(0)

//挂载
onMounted(() => {
  getFaceFault()
})
//获取信息
const getFaceFault = async () => {
  let result: ResponseData = await reqFault()
  if (result.code == 200) {
    // type.value = result.data.type
    // time.value = result.data.time
    //reason.value = result.data.cause
    //location.value = result.data.location
    // level.value = result.data.level
    faultArr.value = result.data
  }
}
</script>
<style scoped lang="scss">
.box3 {
  background: url(../../images/cell-bg.cd48c156.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  .box3-border {
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
    .header-left {
      background: url(../../images/cell-title-left.93093e78.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 14px;
      height: 32px;
      width: 140px;
      .header-title {
        font-size: 16px;
        color: #0ff;
        margin-left: 36px;
        margin-top: 20px;
      }
    }
    .box3-bottom {
      height: calc(100% - 46px);
      width: 100%;
      padding: 15px;
      display: flex;
      flex-direction: column;
      color: #fff;
      .box3-bottom-header {
        border-bottom: 1px solid #00f6ff;
        color: #0ff;
        display: flex;
        flex-direction: row;
        text-align: center;
        .first-col {
          color: #00304c;
          background-color: #00f6ff;
          border-radius: 5px 5px 0 0;
          flex: 1.5;
        }
      }
      .box3-bottom-list {
        overflow: hidden;
        margin-bottom: 15px;
        .fault-list-body {
          animation: slide-up-down 1s ease-in-out infinite;
          display: flex;
          text-align: center;
          overflow: hidden;
          @keyframes slide-up-down {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(-200%);
            }
          }
          .fault-list-row {
            text-align: center;
            padding: 5px 0;
            border-bottom: 1px solid #0b698c;
          }
        }
      }
    }
  }
}
</style>
