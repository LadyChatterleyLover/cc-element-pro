<template>
  <el-container>
    <el-aside width="200px">
      <nav-side />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import NavHeader from './navHeader.vue'
import NavSide from './navSide.vue'
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
</style>
