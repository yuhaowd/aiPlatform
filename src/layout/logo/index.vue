<template>
  <div class="logo" v-if="setting.logoHidden">
    <!--<img :src="setting.logo" />-->
    <p class="title">{{ setting.title }}</p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<script setup lang="ts">
//引入设置标题与logo配置文件
import setting from '@/setting'
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: #000000;
  display: flex;
  align-items: center;
  .img {
    width: 20px;
    height: 20px;
  }
  .title {
    font-size: $base-logo-title-fontSize;
    text-align: center;
    font-weight: bold;
    background: linear-gradient(rgb(24, 160, 88), rgb(78, 78, 78));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
