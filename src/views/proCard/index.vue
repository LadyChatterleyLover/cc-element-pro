<template>
  <div class="mb-5">
    <h2 class="mb-3 font-bold">基础用法</h2>
    <cc-pro-card
      title="默认尺寸"
      bordered
      tooltip="这是提示"
      :style="{ maxWidth: '300px' }"
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
      <template #extra>
        <el-switch v-model="switchValue" />
      </template>
    </cc-pro-card>

    <br />
    <cc-pro-card
      title="带卡片阴影"
      box-shadow
      tooltip="这是提示"
      :style="{ maxWidth: '300px' }"
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
      <template #extra>
        <el-switch v-model="switchValue" />
      </template>
    </cc-pro-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const switchValue = ref(false)
</script>

<style scoped></style>
