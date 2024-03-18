<template>
  <div class="box4">
    <div class="box4-border">
      <div class="camera_outer">
        <video
          id="videoCamera"
          :width="videoWidth"
          :height="videoHeight"
          autoplay
        ></video>
        <canvas
          style="display: none"
          id="canvasCamera"
          :width="videoWidth"
          :height="videoHeight"
        ></canvas>
        <div v-if="imgSrc" class="img_bg_camera">
          <img :src="imgSrc" alt="" class="tx_img" />
        </div>
        <div>
          <button @click="getCompetence()">打开摄像头</button>
          <button @click="stopNavigator()">关闭摄像头</button>
          <button @click="setImage()">拍照</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoWidth: 540,
      videoHeight: 410,
      imgSrc: '',
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      validTip: '验证中',
    }
  },
  computed: {},
  methods: {
    /*调用权限*/
    getCompetence() {
      let _this = this
      this.thisCancas = document.getElementById('canvasCamera')
      this.thisContext = this.thisCancas.getContext('2d')
      this.thisVideo = document.getElementById('videoCamera')
      // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.getUserMedia
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {
            return Promise.reject(
              new Error('getUserMedia is not implemented in this browser'),
            )
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      let constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: 'scaleX(-1)',
        },
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          // 旧的浏览器可能没有srcObject
          if ('srcObject' in _this.thisVideo) {
            _this.thisVideo.srcObject = stream
          }
          // 1 2 3 4 5 6 7 8 9
          else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream)
          }
          _this.thisVideo.onloadedmetadata = function () {
            _this.thisVideo.play()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    /*绘制图片*/
    setImage() {
      let _this = this
      // 点击，canvas画图
      _this.thisContext.drawImage(
        _this.thisVideo,
        0,
        0,
        _this.videoWidth,
        _this.videoHeight,
      )
      // 获取图片base64链接
      let image = this.thisCancas.toDataURL('image/png')
      _this.imgSrc = image
      this.$emit('refreshDataList', this.imgSrc)
    },

    /*base64转文件*/
    dataURLtoFile(dataurl, filename) {
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },
    /*关闭摄像头*/
    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop()
    },
  },
  mounted() {
    this.getCompetence()
  },
  beforeUnmount() {
    this.stopNavigator()
  },
}
</script>
<style lang="scss">
.box4 {
  flex: 7 1 0%;
  background: none;
  .box4-border {
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
    position: relative;
    .camera_outer {
      position: relative;
      overflow: hidden;
      background-size: 100%;

      video,
      canvas,
      .tx_img {
        -moz-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        transform: scaleX(-1);
      }

      .btn_camera {
        position: absolute;
        bottom: 4px;
        left: 0;
        right: 0;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.3);
        line-height: 50px;
        text-align: center;
        color: #ffffff;
      }

      .bg_r_img {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }

      .img_bg_camera {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;

        img {
          width: 100%;
          height: 100%;
        }

        .img_btn_camera {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.3);
          color: #ffffff;

          .loding_img {
            width: 50px;
            height: 50px;
          }
        }
      }
    }

    /** .video {
      padding: 2px;
      border-radius: 6px;
      object-fit: fill;
      height: 80%;
      width: 100%;
      position: absolute;
      z-index: 9997;
    }*/
    /* .box4-face {
      background: url(../../images/cell-bg.cd48c156.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      margin: -150px 20px 0;
      bottom: 20px;
      width: calc(100% - 40px);
      height: 140px;
      z-index: 9998;
      .box4-box {
        float: left;
        height: 100%;
        width: 100%;
        background-image: url(../../images/background-1.png),
          url(../../images/background-2.png), url(../../images/background-3.png),
          url(../../images/background-4.png);
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
        background-size: 15px, 15px, 15px, 15px;
        background-position:
          top left,
          top right,
          bottom left,
          bottom right;
        display: flex;
        flex-direction: row;
        .face-wrapper {
          display: flex;
          height: 100%;
          padding: 20px 20px 20px 5px;
          flex: 1;
          height: 100%;
          .face-arrow {
            flex: 0.25;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABMCAYAAAAFpxWvAAADrklEQVRogc2aW4iNURTHf2fcQ2OQMciDmuRBhHgQDwjFgxd3KQpN45LJ5cGdQu5FbuHBlIl44YloxBMxhBIShmbKlOZhzIw5M3O0xjqn45tz/c7e+zv/p9P5vrPPr73/a+299t4hfkbIEw0HygvyBKYIKAPW9MwDmBHAemADUBw00ChgHbBJe+lXUEAhYCCwUXtmkH5fEBRQIXAQWKqfYwoCaCSwS2EGe54576GxwBZgNdDf80zyz2+XQKXAVjVxsnTT7AJI/rwY2AssTwGDqyErAc4Cc4Ae6V62nanFM+eAuRrmaXls9tBkYCewKMP3O216aCKwOwsYNMqMA0l7Y4ATwGwfvw+ZBhLPXAKm+G3ApKmnKcxUoI9fHlNAs4CjwHSgl882jJl6JrAfmJFjO2LqllyA+mo0nQYm5QgTUy5AUc+UmoIhB1MvAC5oVJkMDF9hvxjYAYwzCIKaOisP9QYW6uJqgmEYsjV1oYb2cc3E1pQJUD9gHnBGizmrSmdIWb+s0J4p0WrBplKaWtL/WmAzMNp2z6ipW5MBSZ20Eqiw7Zk4JTX1MGCJTgdDHMFEFfECSZ20CtjjLeBcKR6oSEvbsrjS1rVippYypZx/JrYe2kkUM/V4YJluiQwNCIZ4oDVaTQ4IECYGVaBzVHMewHRJgI4B94COPOAJCVAtcBK4EzCMJMY/0bnsvUJVBwjUtR6Kn1yfA/uAj0obhDq8s/0zYBvQEBBQyAvUBjwFDgQE1Q1I1AjcAK7KNq1DGLFJW7IFWqOWOLfF+Y6Aupnaq69a6tx3mKPa0y1hX2vNLmmh3QFQQg95VQNsd2TyjIDEQ490e67OMlA40zI4DFRqKVRvCSatqRNJtnevaxSaViSbHoqqFbis6aDTAlRGHvLqmyZNGxOxLyDJSS+BI8A7w0Bp81AyhTXyDunqwIR8mdqrWzrFmIi8lHNZNjqlngobaMuXhxLpPHDRREOmgGTIrugQ5qJuK8Zc9Eb3kZ74zFFdhaLp87IXGnk1PpYsxkzt1UPN5p99FAvGTO1Vlc55Ldn+0BZQE3BNoy8bddo8c63X1UFlhu8bydTpVKvH4w8ySJz/ldK2oSoyjDxrpo6XDMUH4LAWCynl6oZVu6YDmYi/p3gv4vLKl2yK3dSJuCnBcxnOZtd30BoUqEqXw/FyZmqvfuhlpuoEidOJqROpTu8RvfU+CwpIIu+TFp+v8gEoqse6ZPmixxpOb1glk0SenGzPT3U85VIyfHe7fAWhvxbnzd8q3OVEAAAAAElFTkSuQmCC)
              50% 50%/40% 20% no-repeat;
          }
          .face-image {
            border: 1px solid #01e7fc;
            border-radius: 6px;
            margin-left: 10px;
            flex: 1;
          }
        }
      }
    }*/
  }
}
</style>
