<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
div {
  h1 {
    color: $base-color;
  }
}
</style>
<!--<template>
  <div class="box3-bottom-list">
    <div class="scrollable-container" :style="{ transform: transformStyle }">
      <div
        v-for="item in items"
        :key="item.id"
        class="item"
        :style="{ top: itemTop }"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const items = ref([
      { id: 1, content: 'Item 1', visible: false },
      { id: 2, content: 'Item 2', visible: false },
      { id: 3, content: 'Item 3', visible: false },
      // 添加更多内容项
    ])
    const itemTop = ref('300px')
    let currentIndex = 0
    let scrollInterval = null

    const transformStyle = computed(() => `translate(0, ${itemTop.value})`)

    onMounted(() => {
      startScroll()
    })

    function startScroll() {
      scrollInterval = setInterval(() => {
        animateOut(currentIndex)
        currentIndex++
        if (currentIndex >= items.value.length) {
          currentIndex = 0
        }
        animateIn(currentIndex)
      }, 2000)
    }

    function animateIn(index: number) {
      itemTop.value = '300px'
      setTimeout(() => {
        items.value[index].visible = true
        itemTop.value = '0'
      }, 100)
    }

    function animateOut(index: number) {
      itemTop.value = '-300px'
      setTimeout(() => {
        items.value[index].visible = false
        itemTop.value = '300px'
      }, 1000)
    }

    function stopScroll() {
      clearInterval(scrollInterval)
    }

    return {
      items,
      itemTop,
      transformStyle,
      startScroll,
      animateIn,
      animateOut,
      stopScroll,
    }
  },
})
</script>

<style scoped>
.box3-bottom-list {
  height: 100px;
  overflow: hidden;
  position: relative;
}

.scrollable-container {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s ease;
}

.item {
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
}
</style>
-->
