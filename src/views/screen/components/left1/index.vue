<template>
  <div class="box1">
    <div class="box1-border">
      <div class="box1-left">
        <span class="box1-title">巡检机器人</span>
      </div>

      <div class="box1-bottom">
        <div class="box1-bottom-left">
          <div class="box1-dog"></div>
        </div>

        <div class="box1-bottom-right">
          <div class="box1-bottom-right-inner">
            <div>
              <div class="row">
                <div class="key">名称</div>
                <div class="value">RoboDog-01</div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="key">型号</div>
                <div class="value">CMEB-123456</div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="key">电量</div>
                <div class="value">60%</div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="key">速度</div>
                <div class="value">1.5m/s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.box1 {
  background: url(../../images/cell-bg.cd48c156.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  margin-left: 20px;
  .box1-border {
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

    .box1-left {
      background: url(../../images/cell-title-left.93093e78.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 14px;
      height: 32px;
      width: 140px;

      .box1-title {
        font-size: 16px;

        color: #0ff;
        margin-left: 36px;
        margin-top: 20px;
      }
    }
  }
}

.box1-bottom {
  height: calc(100% - 100px);
  display: flex;
  flex-direction: row;

  margin-top: 20px;
  .box1-bottom-left {
    width: 320px;

    .box1-dog {
      background: url(../../images/dog.d9b5f25e.png) 0 0/100% 100% no-repeat;
      margin-top: -40px;
      margin-left: -20px;
      width: 300px;
      height: 290px;
    }
  }
  .box1-bottom-right {
    width: calc(100% - 320px);
    display: flex;
    height: 100%;

    .box1-bottom-right-inner {
      .row {
        display: flex;

        border-bottom: 1px solid rgb(19, 41, 69);
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: -20px;
        margin-right: 20px;
        .key {
          background: url(../../images/dog-key.afc960ee.png) no-repeat;
          padding: 2px 5px 2px 10px;
          color: #0ff;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .value {
          padding: 2px 5px 2px 10px;
          color: #0ff;
        }
      }
    }
  }
}
</style>
