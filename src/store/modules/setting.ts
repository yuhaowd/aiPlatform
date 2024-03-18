//小仓库：layout组件相关配置仓库，菜单折叠
//没有用到
import { defineStore } from 'pinia'
//defineStore第一个参数是小仓库名字，第二个参数是小仓库配置对象，返回值是个函数，
//函数作用是让组件可以获取到仓库数据
const useLayOutSettingStore = defineStore('SettingStore', {
  //存储数据
  state: () => {
    return {
      fold: false,
      refsh: false, //刷新
    }
  },
})

export default useLayOutSettingStore
