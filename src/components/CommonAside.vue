<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    background-color="#ffffff"
    text-color="black"
  >
    <el-aside width="$base-menu_width">
      <!--滚动组件-->
      <el-scrollbar>
        <!--菜单组件-->

        <el-menu-item style="font-size: 15px" index="3" @click="todep">
          <el-icon>
            <span class="iconfont icon-zuzhijigou"></span>
          </el-icon>
          <template #title>机构用户</template>
        </el-menu-item>

        <el-menu-item index="7" style="font-size: 15px" @click="tocamera">
          <el-icon>
            <span class="iconfont icon-shexiangtou"></span>
          </el-icon>
          <template #title>相机管理</template>
        </el-menu-item>
        <el-menu-item index="10" style="font-size: 15px" @click="toworkorder">
          <el-icon>
            <span class="iconfont icon-gongdanguanli"></span>
          </el-icon>
          <template #title>工单处理</template>
        </el-menu-item>

        <el-menu-item index="12" style="font-size: 15px" @click="toanalysis">
          <el-icon>
            <span class="iconfont icon-shujufenxi"></span>
          </el-icon>
          <template #title>数据分析</template>
        </el-menu-item>
      </el-scrollbar>
    </el-aside>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useRouter } from 'vue-router'

//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
//获取路由器对象
let $router = useRouter()
//获取路由对象

import { useRoute } from 'vue-router'
//路由跳转到用户管理
const todep = () => {
  $router.push({ path: '/acl/dep' })
}
//路由跳转到相机管理
const tocamera = () => {
  $router.push({ path: '/acl/camera' })
}
//路由跳转到工单处理
const toworkorder = () => {
  $router.push({ path: '/acl/workorder-process' })
}
//路由跳转到数据分析
const toanalysis = () => {
  $router.push({ path: '/analysis' })
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: $base-menu-width;
  height: calc(100vh - $base-tabber-height);
  background: $base-menu-background;
  margin-left: -20px;
  .el-menu-item {
    height: 50px;
    margin-left: 5px;
  }
}
</style>
