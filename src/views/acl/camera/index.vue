<template>
  <!--相机管理-->
  <el-card class="box-card">
    <template #header>
      <div style="font-size: 20px; font-weight: bold; color: black">
        <span>相机管理</span>
      </div>
    </template>
    <el-table
      :data="cameraArr"
      style="width: 100%; font-weight: 400; font-size: 15px; color: black"
    >
      <el-table-column prop="name" label="设备" width="280" />
      <el-table-column prop="status" label="状态" width="280" />
    </el-table>
  </el-card>
</template>
<script setup lang="ts">
import { reqCamera } from '@/api/acl/camera/index.ts'
import { ref, onMounted } from 'vue'
import type { cameraRecord } from '@/api/acl/camera/type.ts'
//展示数组
let cameraArr = ref<cameraRecord[]>([])
let cameranames = ref('wewe')
let camerastatus = ref('eeeee')
//组件挂载完毕发请求
onMounted(() => {
  //console.log('2edf')
  getCamera()
})
//获取相机的全部数据
const getCamera = async () => {
  let result = await reqCamera(cameranames.value, camerastatus.value)
 // console.log(result)
  if (result.code == 200) {
    //console.log(456)
    console.log(result)
    cameraArr.value = result.data
  }
}
</script>
<style scoped></style>
