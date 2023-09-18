<template>
  <div :class="[ns.b(), borderedClass, shadowClass]">
    <div :class="[ns.b('header')]">
      <div :class="[ns.b('header-title')]">
        <slot name="title">
          <div :class="[ns.b('header-tip')]">
            <div v-if="title" :class="[ns.b('header-tip-title')]">
              {{ title }}
            </div>
            <el-tooltip v-if="tooltip" placement="top" :content="tooltip">
              <span :class="[ns.b('header-tip-icon')]">
                <el-icon><WarningFilled /></el-icon>
              </span>
            </el-tooltip>
          </div>
        </slot>
      </div>
      <div :class="[ns.b('header-extra')]">
        <slot name="extra">
          <div v-if="extra">{{ extra }}</div>
        </slot>
      </div>
    </div>
    <div :class="[ns.b('body')]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '../../../hooks/useNamespace'
import { useProCard } from './useProCard'
import type { CSSProperties } from 'vue'

export interface ProCardProps {
  title?: string
  subTitle?: string
  tooltip?: string
  extra?: string
  loading?: boolean
  colSpan?: string | number
  gutter?: string | number | string[] | number[]
  layout?: 'default' | 'center'
  headStyle?: CSSProperties
  bodyStyle?: CSSProperties
  split?: 'vertical' | 'horizontal'
  type?: 'inner' | 'default'
  size?: 'default' | 'small'
  direction?: 'row' | 'column'
  wrap?: boolean
  bordered?: boolean
  ghost?: boolean
  headerBordered?: boolean
  collapsed?: boolean
  collapsible?: boolean
  boxShadow?: boolean
}

defineOptions({
  name: 'CcProCard',
})
const props = withDefaults(defineProps<ProCardProps>(), {
  title: '',
  subTitle: '',
  tooltip: '',
  extra: '',
  layout: 'default',
  loading: false,
  colSpan: 24,
  gutter: 0,
  split: 'horizontal',
  type: 'default',
  size: 'default',
  direction: 'row',
  wrap: false,
  bordered: false,
  ghost: false,
  headerBordered: false,
  collapsed: false,
  collapsible: false,
  boxShadow: false,
})

const ns = useNamespace('pro-card')

const { borderedClass, shadowClass } = useProCard(props)
</script>

<style scoped lang="scss">
.cc-pro-card {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  background-color: #ffffff;
  border-radius: 6px;
  margin: 0;
  padding: 0;
  color: rgba(42, 46, 54, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 24px;
    padding-block: 16px;
    padding-block-end: 0;
    &-title {
      color: rgba(42, 46, 54, 0.88);
      font-weight: 500;
      font-size: 16px;
      line-height: 1.5714285714285714;
    }
    &-tip {
      display: inline-flex;
      align-items: center;
      max-width: 100%;
      &-title {
        display: inline-flex;
        flex: 1;
      }
      &-icon {
        display: block;
        margin-inline-start: 4px;
        cursor: pointer;
        height: 24px;
        width: 24px;
      }
    }
  }
  &-extra {
    color: rgba(42, 46, 54, 0.88);
  }
  &-body {
    display: block;
    box-sizing: border-box;
    height: 100%;
    padding-inline: 24px;
    padding-block: 16px;
  }
}
.is-bordered {
  border: 1px solid rgba(5, 5, 5, 0.06);
}
.is-shadow {
  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f,
    0 5px 12px 4px #00000017;
  border-color: transparent;
}
</style>
