<template>
  <div>
    <template v-for="(item, index) in menuList" :key="item.path">
      <!--没有子路由-->
      <template v-if="!item.children">
        <el-menu-item
          :index="item.path"
          v-if="!item.meta.hidden"
          @click="goRoute"
        >
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>

      <!--有子路由且大于子路由---->
      <el-sub-menu
        :index="item.path"
        @click="goRoute"
        v-if="item.children && item.children.length > 1"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>

<script lang="ts" setup>
//获取父组件传递过来的全部路由组件

import { useRouter } from 'vue-router'
defineProps(['menuList'])

//获取路由对象
let $router = useRouter()

//点击菜单回调
const goRoute = (vc: any) => {
  //路由跳转
  $router.push(vc.index)
}
</script>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style lang="scss"></style>
