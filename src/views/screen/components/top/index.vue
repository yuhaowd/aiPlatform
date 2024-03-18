<template>
  <div class="top">
    <div class="left">
      <img
        :src="userStore.avatar"
        style="width: 50px; margin: 0px 10px; border-radius: 50%"
      />
      <!--退出登录-->
      <el-dropdown style="color: #38fff7; font-size: 20px; margin-top: 10px">
        <span class="el-dropdown-link">
          {{ userStore.nameOrEmail }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-if="userStore.pageSelect === 'admin'"
              @click="acllogout"
            >
              后台管理页面
            </el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="center">
      <div class="title">AI预警平台</div>
    </div>
    <div class="right">
      <span class="time">{{ time }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import moment from 'moment'
import { useRouter } from 'vue-router'
import { reqLogin } from '@/api/user'

//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
//获取路由器对象
let $router = useRouter()
import { ref, onMounted, onBeforeUnmount } from 'vue'
//存储当前时间
let time = ref(moment().format('YYYY-MM-DD/hh:mm:ss'))
let timer = ref(0)
//退出登录点击的回调
const logout = () => {
  //1.需要向服务器发请求[退出登录接口]
  //2.仓库中关于用户相关的数据进行清空
  //3.跳转到登录页面
  //userStore.userLogout()

  //userStore.userLogout()
  //跳转到登录页面
  $router.push({ path: '/' })
}
const acllogout = () => {
  //跳转到后台管理页面
  $router.push({ path: '/layout' })
}
//组件挂载完毕更新当前的时间
onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format('dddd/YYYY-MM-DD/hh:mm:ss')
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(timer.value)
})
onMounted(() => {
  reqLogin()
})
</script>
<style scoped lang="scss">
.top {
  width: 100%;
  height: 58px;
  background: url(../../images/head-bg.png) no-repeat;
  background-size: cover;
  display: flex;

  .left {
    flex: 3;
  }
  .center {
    flex: 5;

    .title {
      width: 100%;
      text-align: center;
      font-family:
        Times New Roman,
        Microsoft YaHei,
        monospace;
      background: linear-gradient(to bottom, #ffffff, #38fff7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 0.2em;
      font-size: 30px;
      font-weight: 700;
      margin-top: 10px;
    }
  }
  .right {
    flex: 3;

    .time {
      text-align: center;
      font-family:
        Times New Roman,
        Microsoft YaHei,
        monospace;
      letter-spacing: 0.1em;
      font-size: 24px;
      font-weight: 700;
      background: linear-gradient(to bottom, #ffffff, #ffffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      float: right;
    }
  }
}
</style>
