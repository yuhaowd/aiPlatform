<template>
  <WavesBg :top="250" class="waves-bg"></WavesBg>
  <div class="login-container">
    <el-form :model="loginForm" :rules="rules" ref="loginForms">
      <el-form-item prop="username">
        <el-input
          placeholder="账号"
          v-model="loginForm.nameOrEmail"
          :prefix-icon="Avatar"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="密码"
          type="password"
          :prefix-icon="Lock"
          v-model="loginForm.password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button color="#21ba45" @click="login" style="width: 300px">
          登录
        </el-button>
      </el-form-item>
      <!--<el-row style="text-align: center; margin-top: -10px">
        <el-link style="margin-left: 70px" type="primary">忘记密码</el-link>
        <el-link
          style="margin-left: 10px"
          type="primary "
          @click="gotoRegister"
        >
          用户注册
        </el-link>
      </el-row>-->
    </el-form>
  </div>
</template>

<script setup lang="ts">
import WavesBg from './components/wavesbg/index.vue'

import { Avatar, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'

//引入获取当前时间的函数
import { getTime } from '@/utils/time.ts'
//引入用户相关的小仓库
import useUserStore from '@/store/modules/user'

let useStore = useUserStore()
//获取el-form组件
let loginForms = ref()
//获取路由器
let $router = useRouter()
//路由对象
let $route = useRoute()
//收集账号与密码数据
let loginForm = reactive({
  nameOrEmail: 'admin',
  password: '111111',
  pageSelect: 'user',
})

//登录按钮的回调
const login = async () => {
  //保证全部表单相校验通过再发请求
  await loginForms.value.validate()
  try {
    //保证登录成功
    await useStore.userLogin(loginForm)
    $router.push({ path: '/layout' })
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `HI,${getTime()}好`,
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: error.message,
    })
  }
}

//自定义规则校验函数
const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为数组校验规则对象
  //value:即为表单元素文本内容
  //如果符合条件callback放行通过即可，如果不符合callback方法，注入错误提示信息
  if (/^[\d|\w]{4,20}$/.test(value)) {
    callback()
  } else {
    callback(new Error('长度为4至20'))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  //rule:即为数组校验规则对象
  //value:即为表单元素文本内容
  //如果符合条件callback放行通过即可，如果不符合callback方法，注入错误提示信息
  if (/^[\d|\w]{4,20}$/.test(value)) {
    callback()
  } else {
    callback(new Error('长度为4至20'))
  }
} //定义表单校验需要配置对象
const rules = {
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    { trigger: 'change', validator: validatorPassword },
  ],
}
</script>
<style lang="scss">
.waves-bg {
  /* 根据需要设置 wavesBg 组件的样式 */
  position: absolute; /* 绝对定位，使其脱离文档流 */
  top: 0; /* 根据 props 的 top 值进行调整 */
  left: 0;
  width: 100%;
  height: 100%; /* 或其他适合的高度 */
  /* 其他样式... */
  z-index: 1; /* 设置 z-index 以控制堆叠顺序 */
}

.login-container {
  position: absolute; /* 绝对定位，使其脱离文档流并可以覆盖在其他元素之上 */
  top: 50%; /* 根据需要调整位置 */
  left: 50%;
  transform: translate(-50%, -50%); /* 水平垂直居中 */

  z-index: 2; /* 设置一个比 wavesBg 更高的 z-index 值，以确保它覆盖在上面 */

  font-family:
    Roboto,
    -apple-system,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //background: url('@/assets/images/login-background.png') no-repeat;
  background-size: cover;

  .el-form {
    position: relative;
    width: 350px;
    height: 200px;
    //  background-color: rgba(222, 223, 223, 0.3);
    background-color: rgba(222, 223, 223, 0.3);
    padding: 30px;
    border-radius: 10px;
  }
  .el-button + .el-button {
    margin-left: 162px;
  }
  .el-input {
    border: none; /* 去掉默认边框 */
    border-bottom: 1px solid #000; /* 底部边框实线 */
  }
}
</style>
