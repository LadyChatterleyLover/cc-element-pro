<template>
  <div class="mb-5">
    <h2 class="mb-3 font-bold">基础用法</h2>
    <cc-check-card
      v-model="checked1"
      title="示例一"
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
      extra="extra"
    />
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">单选模式</h2>
    <cc-check-card-group v-model="checked2">
      <cc-check-card title="示例一" description="选项一" value="A" />
      <cc-check-card title="示例二" description="选项二" value="B" />
      <cc-check-card title="示例三" description="选项三" value="C" />
    </cc-check-card-group>
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">多选模式</h2>
    <cc-check-card-group v-model="checked3" multiple>
      <cc-check-card title="示例一" description="选项一" value="A" />
      <cc-check-card title="示例二" description="选项二" value="B" />
      <cc-check-card title="示例三" description="选项三" value="C" />
    </cc-check-card-group>
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">不同尺寸</h2>
    <el-radio-group v-model="size">
      <el-radio label="large">Large</el-radio>
      <el-radio label="default">Default</el-radio>
      <el-radio label="small">Small</el-radio>
    </el-radio-group>
    <br />
    <cc-check-card title="示例一" :size="size" description="选项一" />
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">禁用</h2>
    <cc-check-card title="示例一" disabled description="选项一" />
    <br />
    <br />
    <cc-check-card-group v-model="checked3" disabled>
      <cc-check-card title="示例一" description="选项一" value="A" />
      <cc-check-card title="示例二" description="选项二" value="B" />
      <cc-check-card title="示例三" description="选项三" value="C" />
    </cc-check-card-group>
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">只有图片时</h2>
    <cc-check-card
      v-model="checked4"
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
    />
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">只有图片和描述时</h2>
    <cc-check-card
      v-model="checked5"
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    />
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">只有标题和描述时</h2>
    <cc-check-card
      v-model="checked6"
      title="示例一"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    />
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">只有标题和图片</h2>
    <cc-check-card
      v-model="checked7"
      title="示例一"
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
    />
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">只有标题</h2>
    <cc-check-card v-model="checked8" title="示例一" />
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">只有描述</h2>
    <cc-check-card
      v-model="checked9"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    />
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">自定义头像</h2>
    <cc-check-card
      v-model="checked10"
      title="示例一"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    >
      <template #avatar>
        <el-avatar
          shape="square"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        />
      </template>
    </cc-check-card>
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">自定义标题</h2>
    <cc-check-card
      v-model="checked11"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    >
      <template #title>
        <div class="flex items-center">
          <el-icon><Apple /></el-icon>
          <span class="mx-2">示例</span>
          <el-tag size="small">tag</el-tag>
        </div>
      </template>
    </cc-check-card>
    <br />
    <cc-check-card
      title="标题内容过长会自动进行省略，标题内容过长会自动进行省略"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
    />
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">自定义描述</h2>
    <cc-check-card
      v-model="checked12"
      title="示例一"
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    >
      <template #description>
        <span>
          选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。
          <el-tag>查看详情</el-tag>
        </span>
      </template>
    </cc-check-card>
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">操作栏</h2>
    <cc-check-card
      v-model="checked13"
      title="示例一"
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    >
      <template #extra>
        <el-dropdown>
          <el-icon><More /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>菜单</el-dropdown-item>
              <el-dropdown-item>列表</el-dropdown-item>
              <el-dropdown-item>表单</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </cc-check-card>
  </div>

  <div class="mb-5">
    <h2 class="mb-3 font-bold">加载中</h2>
    <cc-check-card loading />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const size = ref('default')
const checked1 = ref(false)
const checked2 = ref([])
const checked3 = ref(['A'])
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
const checked7 = ref(false)
const checked8 = ref(false)
const checked9 = ref(false)
const checked10 = ref(false)
const checked11 = ref(false)
const checked12 = ref(false)
const checked13 = ref(false)
</script>

<style scoped></style>
