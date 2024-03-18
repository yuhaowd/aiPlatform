<template>
  <el-card class="box-card">
    <div class="card-header">
      <span style="font-size: 20px; font-weight: bold; color: black">
        机构用户
      </span>
      <div style="display: flex; align-items: center">
        <el-input placeholder="请输入搜索用户名:" v-model="keyword"></el-input>
        <el-button
          size="24"
          color="#18a058"
          font-size="16px"
          plain
          icon="RefreshRight"
          style="margin-left: 15px"
          :disabled="keyword ? false : true"
          @click="search()"
        >
          搜索
        </el-button>
        <el-button
          size="24"
          color="#18a058"
          font-size="16px"
          icon="Plus"
          style="margin-left: 15px"
          @click="addUser"
        >
          新建
        </el-button>
      </div>
    </div>
    <el-table
      :data="userArr"
      style="width: 100%; font-weight: 400; font-size: 15px; color: black"
    >
      <!--<el-table-column label="#" align="center" type="index"></el-table-column>-->
      <el-table-column
        prop="id"
        label="序号"
        type="index"
        width="100"
        align="center"
      />

      <el-table-column
        prop="username"
        label="用户名"
        width="230"
        align="center"
      ></el-table-column>
      <el-table-column prop="password" label="密码" width="100" align="center">
        <template #default="{ row }">
          <span v-if="showPassword">{{ row.password }}</span>
          <span v-else>{{ maskPassword(row.password) }}</span>
        </template>
      </el-table-column>
      <el-table-column width="110" align="left">
        <template #default="scope">
          <div style="display: flex; align-items: center; margin-left: -13px">
            <el-button
              type="text"
              @click="togglePasswordVisibility"
              plain
              icon="view"
            ></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="level" label="权限" width="230" align="center">
        <template #default="scope1">
          {{ getLevelText(scope1.row.level) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        width="270"
        style="height"
        align="left"
      >
        <template #default="{ row, $index }">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="修改"
            placement="bottom-start"
          >
            <el-button
              v-model="newdep"
              size="24"
              color="#18a058"
              icon="EditPen"
              font-size="13px"
              @click="updateUser(row)"
            >
              修改
            </el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="删除"
            placement="bottom-start"
          >
            <el-popconfirm
              :title="`你确定要删除${row.username}吗?`"
              width="260px"
              @confirm="deleteUser(row.id)"
            >
              <template #reference>
                <el-button
                  size="24"
                  type="danger"
                  font-size="13px"
                  icon="DeleteFilled"
                >
                  删除
                </el-button>
              </template>
            </el-popconfirm>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[5, 7, 9, 11]"
      :background="true"
      layout="prev, pager, next, jumper,->,sizes,total"
      :total="total"
      @current-change="getHasUser"
      @size-change="handler"
    />
  </el-card>
  <!--新建-->
  <el-dialog
    :model="userParams"
    v-model="newdep"
    :title="userParams.id ? '修改用户' : '添加用户'"
    width="50%"
  >
    <el-form
      :model="userParams"
      :rules="rules"
      ref="formRef"
      label-width="40px"
    >
      <el-form-item label="用户名称" label-width="80px" prop="username">
        <el-input placeholder="请输入用户名称" v-model="userParams.username" />
      </el-form-item>
      <el-form-item label="用户密码" label-width="80px" prop="password">
        <el-input v-model="userParams.password" placeholder="请输入用户密码" />
      </el-form-item>
      <el-form-item label="用户权限" label-width="80px">
        <el-select
          v-model="userParams.level"
          class="m-2"
          placeholder="请设置用户权限"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button color="#18a058" plain @click="cancel">取消</el-button>
        <el-button color="#18a058" @click="save">确定</el-button>
      </span>
    </template>
  </el-dialog>

  <!--删除-->

  <el-dialog v-model="inputpassword" width="50%" style="font-weight: bold">
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户密码">
        <el-input v-model="form.password" placeholder="请输入该用户密码" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button color="#18a058" plain @click="inputpassword = false">
          取消
        </el-button>
        <el-button color="#18a058" @click="inputpassword = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from 'vue'
//请求的方法
import {
  reqUserInfo,
  reqAddOrUpdateUser,
  reqRemoveUser,
  reqSearchUser,
} from '@/api/acl/dep/index.ts'
import type { UserResponseData, Records, User } from '@/api/acl/dep/type.ts'

import { ElMessage } from 'element-plus'
//密码的显示与隐藏
let showPassword = ref<boolean>(false)
//默认页码
const pageNo = ref<number>(2)
//一页展示几条数据
let pageSize = ref<number>(9)
//用户总个数
let total = ref<number>(0)
//存储全部用户的数组
let userArr = ref<Records>([])
//获取form 组件实例
let formRef = ref<any>({})
let keyword = ref<string>('')
//组件挂在完毕
onMounted(() => {
  getHasUser()
})
//控制对话框显示与隐藏

let newdep = ref<boolean>(false)

const inputpassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const maskPassword = (password) => {
  return '*'.repeat(password.length)
}

const form = reactive({
  name: '',
  password: '',
})
//新建用户选择框
const value = ref('')

const options = [
  {
    value: '1',
    label: '超管',
  },
  {
    value: '0',
    label: '普通用户',
  },
]

//新
//获取用户已有的信息
const getHasUser = async (pager = 1) => {
  //收集当前页码
  pageNo.value = pager
  let result: UserResponseData = await reqUserInfo(pageNo.value, pageSize.value)
  if (result.code == 200) {
    // console.log(result.data.records)

    total.value = result.data.total
    console.log(result.data)
    userArr.value = result.data.records
  }
}
//分页器下拉菜单的自定义事件的回调
const handler = () => {
  getHasUser()
}
//收集用户信息的响应式数据
let userParams = reactive<User>({
  username: '',
  password: '',
  level: 0,
  deleted: 0,
})
//添加用户按钮回调
const addUser = () => {
  newdep.value = true
  Object.assign(userParams, {
    //id要清为0
    id: '',
    username: '',
    password: '',
    level: '',
  })

  //清除上次的错误提示信息
  nextTick(() => {
    formRef.value.clearValidate('username')
    formRef.value.clearValidate('password')
  })
}
//修改用户按钮回调
const updateUser = (row: User) => {
  //显示出来
  newdep.value = true
  //存储收集已有的账号信息
  console.log(row)

  Object.assign(userParams, row)
  //清除上次的错误提示信息
  nextTick(() => {
    formRef.value.clearValidate('username')
    formRef.value.clearValidate('password')
  })
  getHasUser()
}
//保存按钮的回调
const save = async () => {
  //点击保存的时候，务必需要保证表单全部符合条件，再发请求
  await formRef.value.validate()
  //保存按钮:添加新的用户|更新已有的用户账号信息

  let result: any = await reqAddOrUpdateUser(userParams)
  if (result.code == 200) {
    newdep.value = false

    //提示信息
    ElMessage({
      type: 'success',
      message: userParams.id ? '修改成功' : '添加成功',
    })
    //获取最新用户信息
    //getHasUser(userParams.id ? pageNo.value : 1)
    //浏览器自动刷新
    window.location.reload()
  } else {
    newdep.value = false
    //提示信息
    ElMessage({
      type: 'error',
      message: userParams.id ? '修改失败' : '添加失败',
    })
  }
}
//取消按钮的回调
const cancel = () => {
  //关闭
  newdep.value = false
}
//搜索按钮的回调
const search = async () => {
  const result = await reqSearchUser(keyword.value)
  if (result.code === 200) {
    keyword.value = ''
    console.log(result)
    userArr.value = [result.data]

    //console.log(result)
    //getHasUser()
  }

  // // 刷新用户列表
}

// 删除用户
const deleteUser = async (id: string) => {
  console.log(156)

  reqRemoveUser(id)
  // 假设后端返回200表示成功

  ElMessage({ type: 'success', message: '删除成功' })

  getHasUser() // 刷新用户列表
}
// 获取权限级别的文本描述
const getLevelText = (level: number) => {
  switch (level) {
    case 0:
      return '普通用户'
    case 1:
      return '超级管理员'
  }
}
//校验用户名字的回调函数
const validatorUserName = (rule: any, value: any, callback: any) => {
  //用户名4~20
  if (value.trim().length >= 4) {
    callback()
  } else {
    callback(new Error('用户名称至少4位'))
  }
}
//校验用户密码的回调函数
const validatorPassword = (rule: any, value: any, callback: any) => {
  //用户名4~20
  if (value.trim().length >= 4) {
    callback()
  } else {
    callback(new Error('用户密码至少4位'))
  }
}
//表单校验的规则对象
const rules = {
  //用户名
  username: [{ required: true, trigger: 'blur', validator: validatorUserName }],
  //用户秘码
  password: [{ required: true, trigger: 'blur', validator: validatorPassword }],
}
</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
}
</style>
