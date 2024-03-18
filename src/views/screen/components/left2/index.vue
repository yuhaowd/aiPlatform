<template>
  <div class="box2">
    <div class="box2-border">
      <div class="header-left">
        <span class="header-title">缺陷检测</span>
      </div>
      <div class="box2-bottom">
        <div class="box2-bottom-top">
          <div class="buttom-image">
            <img
              src="http://localhost:8081/aiPlatform/file/download/{fileName}"
              alt="123"
            />
          </div>
          <div class="buttom-image">
            <img
              src="http://localhost:8081/aiPlatform/file/download/a.jpg"
              alt="123"
              style="width: 150px; height: 100px"
            />
          </div>
          <div class="buttom-image">
            <img
              src="http://localhost:8081/aiPlatform/file/download/a.jpg"
              alt="123"
              style="width: 150px; height: 100px"
            />
          </div>
        </div>
        <div class="box2-bottom-bottom">
          <div class="buttom-image">
            <img
              src="http://localhost:8081/aiPlatform/file/download/a.jpg"
              alt="123"
              style="width: 150px; height: 100px"
            />
          </div>
          <div class="buttom-image">
            <img
              src="http://localhost:8081/aiPlatform/file/download/a.jpg"
              alt="123"
              style="width: 150px; height: 100px"
            />
          </div>
          <div class="buttom-image">
            <img
              src="http://localhost:8081/aiPlatform/file/download/a.jpg"
              alt="123"
              style="width: 150px; height: 100px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reqImage } from '@/api/screen/left2/index.ts'
import { onMounted, ref } from 'vue'
import type { ResponseData } from '@/api/screen/left2/type.ts'
const fileName = ref<string>('')
onMounted(() => {
  getImage()
})
const getImage = async () => {
  let result: ResponseData = await reqImage(fileName.value)
  console.log(141422334444)
  if (result.code == 200) {
    console.log(1414)
  }
}
</script>
<style scoped lang="scss">
.box2 {
  background: url(../../images/cell-bg.cd48c156.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  .box2-border {
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
    .box2-bottom {
      height: calc(100% - 46px);
      width: 100%;
      padding: 15px;
      display: flex;
      flex-direction: column;
      color: #fff;

      .box2-bottom-top {
        flex: 1 1 0%;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        .buttom-image {
          background: url(../../images/cell-bg.cd48c156.png) 0px 0px /100% 100% no-repeat;
          color: #00304c;
          border-bottom: 1px solid #00f6ff;
          border: 1px solid #01e7fc;
          border-radius: 6px;
          flex: 1 1 0%;
          margin-left: 5px;
        }
      }
      .box2-bottom-bottom {
        flex: 1 1 0%;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        .buttom-image {
          background: url(../../images/cell-bg.cd48c156.png) 0px 0px /100% 100% no-repeat;
          color: #00304c;
          border-bottom: 1px solid #00f6ff;
          border: 1px solid #01e7fc;
          border-radius: 6px;
          flex: 1 1 0%;
          margin-left: 6px;
          display: flex;
        }
      }
    }
  }
}
</style>
