<template>
  <!--路由组件出口位置-->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!--渲染layout一级路由组件的子路由-->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>
<script lang="ts">
export default {
  name: 'Main',
}
</script>
<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'
import useLayOutSettingStore from '@/store/modules/setting'
import tabbar from './tabbar'
let LayOutSettingStore = useLayOutSettingStore()
//控制当前组件是否重建
let flag = ref(true)
//监听仓库内数据是否发生变化
watch(
  () => LayOutSettingStore.refsh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<style scoped></style>
