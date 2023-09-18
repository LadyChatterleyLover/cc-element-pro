<template>
  <el-menu :default-active="route.path" router>
    <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
      <el-icon>
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const menuList = [
  {
    title: '首页',
    path: '/',
    icon: 'HomeFilled',
  },
  {
    title: '高级卡片',
    path: '/proCard',
    icon: 'CreditCard',
  },
  {
    title: '多选卡片',
    path: '/checkCard',
    icon: 'Postcard',
  },
]
</script>

<style scoped></style>
