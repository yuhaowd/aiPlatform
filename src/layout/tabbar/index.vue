<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Logo></Logo>
    </div>

    <div class="tabbar-right">
      <img
        :src="userStore.avatar"
        style="width: 24px; margin: 0px 10px; border-radius: 50%"
      />
      <!--退出登录-->
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.nameOrEmail }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-divider direction="vertical" />

      <el-tooltip
        class="box-item"
        effect="dark"
        content="数据大屏"
        placement="bottom-start"
      >
        <el-button size="18px" @click="toscreen" icon="Platform"></el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="全屏"
        placement="bottom-start"
      >
        <el-button
          size="18px"
          icon="FullScreen"
          @click="FullScreen"
        ></el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="刷新"
        placement="bottom-start"
      >
        <el-button size="18px" icon="Refresh" @click="updateRefsh"></el-button>
      </el-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Logo from '../logo/index.vue'
import { useRouter } from 'vue-router'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
import { use } from 'echarts'
import useLayOutSettingStore from '@/store/modules/setting'
let LayOutSettingStore = useLayOutSettingStore()
let userStore = useUserStore()
//获取路由器对象
let $router = useRouter()
//全屏按钮点击的回调
const FullScreen = () => {
  //DOM对象的一个属性，用来判断当前是不是全屏模式[全屏：true]
  let full = document.fullscreenElement
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen，实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    //退出全屏
    document.exitFullscreen()
  }
}
//退出登录点击的回调
const logout = () => {
  //1.需要向服务器发请求[退出登录接口]
  //2.仓库中关于用户相关的数据进行清空
  //3.跳转到登录页面
  // userStore.userLogout()
  //跳转到登录页面
  $router.push({ path: '/' })
}
//点击跳转到大屏页面
const toscreen = () => {
  $router.push({ path: '/screen' })
}
//刷新
const updateRefsh = () => {
  LayOutSettingStore.refsh = !LayOutSettingStore.refsh
}
//目前挂载完毕获取用户信息
</script>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  .tabbar-left {
    display: flex;
    align-items: center;
  }
  .tabbar-right {
    display: flex;
    //竖直方向居中
    align-items: center;
  }
}
</style>
