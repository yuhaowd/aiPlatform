<template>
  <div class="box9">
    <div class="header-left">
      <span class="header-title">预警信息</span>
    </div>
    <div class="box9-bottom">
      <div class="box9-bottom-header">
        <span class="first-col">预警类型</span>
        <span style="flex: 2">时间</span>
        <span style="flex: 2.5">原因</span>
        <span style="flex: 2">位置</span>
        <span style="flex: 1">等级</span>
      </div>
      <div class="box9-bottom-list">
        <div>
          <div
            style="
              width: auto;
              transform: translate(0px, -120px);
              transition: all 300ms ease-in 0s;
              overflow: hidden;
              display: block;
            "
          >
            <div style="overflow: hidden">
              <div
                class="row fault-list-body"
                v-for="(item, index) in FaultArr"
                :key="index"
                style="display: flex"
              >
                <span class="fault-list-row" style="flex: 1.5 1 0%">
                  {{ item.type }}
                </span>
                <span
                  class="fault-list-row"
                  style="flex: 2 1 0%; color: rgb(138, 160, 163)"
                >
                  {{ item.time }}
                </span>
                <span class="fault-list-row" style="flex: 2.5 1 0%">
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
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { reqFault } from '@/api/screen/right4/index.ts'
import type { Fault, ResponseData } from '@/api/screen/right4/type.ts'
let FaultArr = ref<Fault[]>([])
//挂载
onMounted(() => {
  getFault()
})

const getFault = async () => {
  let result: ResponseData = await reqFault()
  if (result.code == 200) {
    FaultArr.value = result.data
  }
}
</script>
<style scoped lang="scss">
.box9 {
  display: flex;
  flex: 3.7 1 0%;
  margin-bottom: 10px;
  overflow: hidden;

  .header-left {
    height: 32px;
    width: 140px;
    .header-title {
      font-size: 15px;
      font-weight: bold;
      color: #18a058;
    }
  }
  .box9-bottom {
    height: calc(100% - 46px);
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin-left: -80px;
    color: #000;
    .box9-bottom-header {
      border-bottom: 1px solid #18a058;
      color: #18a058;
      display: flex;
      flex-direction: row;
      text-align: center;
      .first-col {
        color: #00304c;
        background-color: #18a058;
        border-radius: 5px 5px 0 0;
        flex: 1.5;
      }
    }
    .box9-bottom-list {
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
</style>
