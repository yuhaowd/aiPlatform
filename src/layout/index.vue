<template>
  <div class="common-layout">
    <el-container class="layout_tabber">
      <el-header class="el-header" style="padding: 0px, 0px, 0px, 0px">
        <!--<Logo></Logo>-->
        <Tabbar></Tabbar>
      </el-header>

      <el-container>
        <el-aside
          width="$base-menu_width"
          class="layout_aside"
          :class="['layout_aside', { fold }]"
        >
          <!--滚动组件-->
          <el-scrollbar class="layout_scrollbar">
            <!--菜单组件-->
            <div>
              <el-icon
                @click="changeIcon"
                style="
                  color: #18a058;
                  margin-top: 10px;
                  font-size: 25px;
                  margin-left: 10px;
                "
              >
                <component :is="fold ? 'Fold' : 'Expand'"></component>
              </el-icon>
            </div>
            <!--<el-menu
              class="el-menu"
              :collapse="fold ? 'true' : 'false'"
              :default-active="$route.path"
              active-text-color="#ffd04b"
              background-color="#ffffff"
              text-color="black"
            >
            
              <Menu :menuList="userStore.menuRoutes"></Menu>
            </el-menu>-->
            <!--根据路由动态生成菜单-->

            <CommonAside />
          </el-scrollbar>
        </el-aside>

        <el-main class="layout_main" :class="['layout_aside', { fold }]">
          <!--路由出口-->
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

//获取路由对象
import { useRoute } from 'vue-router'
//引入左侧菜单logo子组件
//import Logo from './logo/index.vue'
import CommonAside from '../components/CommonAside.vue'
//引入菜单组件
import Menu from './menu/index.vue'
//引入顶部tabbar组件
import Tabbar from './tabbar/index.vue'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
//右侧内容的展示区
import Main from './main/index.vue'
//获取路由对象
let $route = useRoute()
//定义响应式数据
let fold = ref(false)
//点击图标的方法
const changeIcon = () => {
  //图标进行切换
  fold.value = !fold.value
}
</script>
<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
  color: white;

  //菜单
  .layout_aside {
    &.fold {
      width: $base-menu-min_width;
    }
    transition: all 0.3s;
    .layout_scrollbar {
      width: $base-menu-width;
      height: calc(100vh - $base-tabber-height);

      .el-menu {
        border-right: none;
        margin-left: -13px;
        height: 40px;
      }
    }
  }

  //主体
  .layout_main {
    //position: absolute;
    background:  Snow;

    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabber-height);
    left: $base-menu-width;
    top: $base-tabber-height;
    padding: 10px;
    &.fold {
      width: $base-menu-min_width;
    }
  }
  //顶部
  .layout_tabber {
    position: fixed;
    width: 100vw;
    height: $base-tabber-height;
    background: #ffffff;
    top: 0px;
    .el-header {
      padding: 0px, 0px, 0px, 0px;
    }
  }
}
</style>
