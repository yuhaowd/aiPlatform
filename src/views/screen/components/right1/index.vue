<template>
  <div class="box6">
    <div class="box6-border">
      <div class="box6-top">
        <span class="box6-title">行走路径</span>
      </div>
      <div class="top-path">
        <span>
          <i class="circle-icon1" aria-hidden="true" role="presentation"></i>
          <span style="color: #fff; font-size: 14; margin-right: 10px">
            正常
          </span>
        </span>
        <span>
          <i class="circle-icon2" aria-hidden="true" role="presentation"></i>
          <span style="color: #fff; font-size: 14; margin-right: 10px">
            故障
          </span>
        </span>
        <span>
          <i class="circle-icon3" aria-hidden="true" role="presentation"></i>
          <span style="color: #fff; font-size: 14; margin-right: 10px">
            离线
          </span>
        </span>
      </div>

      <div class="bottom-path">
        <div class="bottom-path-border"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.box6 {
  background: url(../../images/cell-bg.cd48c156.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  margin-top: 10px;
  flex: 3.4 1 0%;

  .box6-border {
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

    .box6-top {
      background: url(../../images/cell-title-left.93093e78.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 14px;
      height: 32px;
      width: 140px;

      .box6-title {
        font-size: 16px;
        color: #0ff;
        margin-left: 36px;
        margin-top: 20px;
      }
    }
    .top-path {
      float: right;
      margin: -34px 10px 0 0;

      .circle-icon1 {
        display: inline-block;
        width: 15px; /* 正方形的宽度 */
        height: 15px; /* 正方形的高度 */
        background-color: rgb(17, 253, 4); /* 正方形的背景色 */
        margin-left: 5px; /* 正方形与文本之间的间距 */
        vertical-align: middle; /* 与文本垂直对齐 */
      }

      .circle-icon2 {
        display: inline-block;
        width: 15px; /* 正方形的宽度 */
        height: 15px; /* 正方形的高度 */
        background-color: rgb(255, 0, 25); /* 正方形的背景色 */
        margin-left: 5px; /* 正方形与文本之间的间距 */
        vertical-align: middle; /* 与文本垂直对齐 */
      }
      .circle-icon3 {
        display: inline-block;
        width: 15px; /* 正方形的宽度 */
        height: 15px; /* 正方形的高度 */
        background-color: rgb(120, 120, 120); /* 正方形的背景色 */
        margin-left: 5px; /* 正方形与文本之间的间距 */
        vertical-align: middle; /* 与文本垂直对齐 */
      }
    }
    .bottom-path {
      width: 100%;

      margin: -6px 10px 0 0;

      height: calc(100% - 60px);
      // position: relative;
      .bottom-path-border {
        background: url(../../images/path.ecd1049b.png) no-repeat;
        height: calc(100% - 10px);
        // position: absolute;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
