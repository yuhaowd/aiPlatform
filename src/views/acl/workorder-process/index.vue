<template>
  <el-card class="box-card">
    <template #header>
      <div class="header">
        <div
          class="card-header"
          style="font-size: 20px; font-weight: bold; color: black"
        >
          <span>工单处理</span>
        </div>
        <el-dropdown>
          <el-button size="24" color="#18a058" plain font-size="16px">
            工单状态
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="waitwork">待处理</el-dropdown-item>
              <el-dropdown-item>处理中</el-dropdown-item>
              <el-dropdown-item>已处理</el-dropdown-item>
              <el-dropdown-item>已拒绝</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </template>
    <el-table
      class="el-table"
      :data="workerArr"
      style="width: 100%; font-weight: 400; font-size: 15px; color: black"
    >
      <el-table-column
        prop="id"
        label="序号"
        width="220"
        align="center"
        type="index"
      />
      <el-table-column
        prop="time"
        label="创建时间"
        width="380"
        align="center"
        style="font-weight: bold; font-size: 18px; color: black"
      />
      <el-table-column
        prop="ticketStatus"
        align="center"
        label="状态"
        width="220"
      />
      <el-table-column prop="operate" align="center" label="操作" width="220">
        <template #default="scope">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="修改"
            placement="bottom-start"
          >
            <el-button
              size="24"
              color="#18a058"
              icon="EditPen"
              style="font-size: 13px"
              @click="dialogVisible = true"
            >
              工单处理
            </el-button>
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
      layout=" prev, pager, next, jumper,->,sizes,"
      :total="100"
      @size-change="handler"
      @current-change="getWorker"
    />
  </el-card>
  <!--修改工单-->
  <el-dialog v-model="dialogVisible" width="60%">
    <el-row>
      <el-col :span="11">
        <el-card class="box-card" style="width: 350px; height: 200px">
          <template #header>
            <div class="card-header">
              <span style="font-size: 20px; color: black; font-weight: bold">
                工单详情
              </span>
            </div>
          </template>
          <div
            v-for="(item, index) in workerArr"
            :key="index"
            class="text item"
            style="height: 100px"
          >
            <div style="font-size: 16px; color: black; margin-bottom: 15px">
              道路：{{ item.warning_type }}
            </div>
            <div style="font-size: 16px; color: black; margin-bottom: 15px">
              原因：{{ item.reason }}
            </div>
            <div style="font-size: 16px; color: black; margin-bottom: 10px">
              工单状态：{{ item.ticketStatus }}
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11" style="margin-left: 15px">
        <el-card
          width="100%"
          :data="workerArr"
          style="width: 450px; height: 200px"
        >
          <div class="radio-group-container">
            <el-radio-group v-model="radio">
              <el-radio
                :label="3"
                style="
                  font-size: 18px;
                  color: rgb(91, 219, 246);
                  margin-bottom: 10px;
                "
              >
                待处理
              </el-radio>
              <el-radio
                :label="6"
                style="
                  font-size: 18px;
                  color: rgb(255, 156, 12);
                  margin-bottom: 10px;
                "
              >
                处理中
              </el-radio>
              <el-radio
                :label="9"
                style="
                  font-size: 18px;
                  color: rgb(168, 189, 255);
                  margin-bottom: 10px;
                "
              >
                已处理
              </el-radio>
              <el-radio
                :label="12"
                style="
                  font-size: 18px;
                  color: rgb(255, 0, 0);
                  margin-bottom: 10px;
                "
              >
                已拒绝
              </el-radio>
            </el-radio-group>
            <div style="font-size: 18px; color: black; margin-bottom: 10px">
              备注
            </div>
            <textarea name="备注" id="" cols="15" rows="4"></textarea>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <template #footer>
      <span class="dialog-footer">
        <el-button color="#18a058" plain @click="dialogVisible = false">
          取消
        </el-button>
      </span>
      <span class="dialog-footer" style="margin-left: 10px">
        <el-button color="#18a058" @click="dialogVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue'
//引入接口
import { reqWorker } from '@/api/acl/workorder-process'
import { WarningRecord } from '@/api/acl/workorder-process/type'
let dialogVisible = ref<boolean>(false)
//默认页码
const pageNo = ref<number>(0)
//一页展示几条数据
let pageSize = ref<number>(3)
//存储全部用户的数组
let workerArr = ref<WarningRecord[]>([])

//组件挂载完毕发请求
onMounted(() => {
  getWorker()
})
//修改的回调
const update = () => {
  dialogVisible.value = true
}

//工单信息
const items = [
  {
    road: 'XXX路',
    reason: '坑洼',
    status: '待处理',
  },
]
//单选框
const radio = ref(1)
// 监听单选框切换事件
watchEffect((onInvalidate) => {
  onInvalidate(() => {
    console.log('选中的值:', radio.value)
  })
})

//获取全部信息
const getWorker = async (pager = 1) => {
  //收集当前页码
  pageNo.value = pager
  //console.log(pageNo.value)
  let result = await reqWorker(pageNo.value, pageSize.value)
  if (result.code == 200) {
    // console.log(pageSize.value)
    //console.log(125)
    console.log(result)
    console.log(result.data)

    workerArr.value = result.data
  }
}
//每页几条
const handler = () => {
  getWorker()
}
//待处理回调
/*const waitwork = async () => {
  let result = await reqWorker(pageNo.value, pageSize.value)
  if (result.code==200 and result.data.ticketStatus == '待处理') {
    workerArr.value = result.data
  }
}*/
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}
.radio-group-container {
  display: flex;
  flex-direction: column;
  .el-radio-group {
    margin-bottom: 10px;
  }
}
</style>
