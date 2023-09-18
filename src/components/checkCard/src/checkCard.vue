<template>
  <div
    :class="[
      ns.b(),
      borderedClass,
      sizeClass,
      disabledClass,
      { 'is-checked': checked },
    ]"
    @click="click"
  >
    <el-skeleton v-if="cardLoading" :rows="3" animated />
    <template v-else>
      <div :class="[ns.b('content')]">
        <div :class="[ns.e('avatar')]">
          <slot name="avatar">
            <el-avatar v-if="avatar" :size="48" :src="avatar" />
          </slot>
        </div>
        <div :class="[ns.b('detail')]">
          <div :class="[ns.b('detail-header')]">
            <div :class="[ns.b('detail-header-left')]">
              <div :class="[ns.e('title')]">
                <slot name="title">
                  <div v-if="title">{{ title }}</div>
                </slot>
              </div>
            </div>
            <div :class="[ns.b('extra')]">
              <slot name="extra">
                <div v-if="extra">{{ extra }}</div>
              </slot>
            </div>
          </div>
          <div :class="[ns.e('description')]">
            <slot name="description">
              <div v-if="description">{{ description }}</div>
            </slot>
          </div>
        </div>
      </div>
      <div v-if="checked" :class="[ns.e('checked'), checkedDisabledClass]" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '../../../hooks'
import { useCheckCard } from './useCheckCard'

export interface CheckCardProps {
  modelValue?: boolean
  value?: string | number
  bordered?: boolean
  disabled?: boolean
  size?: 'default' | 'small' | 'large'
  loading?: boolean
  title?: string
  description?: string
  avatar?: string
  extra?: string
}

defineOptions({
  name: 'CcCheckCard',
})
const ns = useNamespace('check-card')

const props = withDefaults(defineProps<CheckCardProps>(), {
  size: 'default',
  bordered: true,
  loading: false,
  title: '',
  description: '',
  avatar: '',
  extra: '',
})

defineEmits<{
  click: [val: MouseEvent]
  change: [val: boolean]
  'update:modelValue': [val: boolean]
}>()

const {
  click,
  checked,
  borderedClass,
  sizeClass,
  disabledClass,
  checkedDisabledClass,
  cardLoading,
} = useCheckCard(props)
</script>

<style scoped lang="scss">
.cc-check-card {
  position: relative;
  display: inline-block;
  margin-inline-end: 16px;
  margin-block-end: 16px;
  color: rgba(42, 46, 54, 0.88);
  font-size: 14px;
  line-height: 1.6;
  vertical-align: top;
  background-color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border-color: #1677ff;
  }
  &--lg {
    width: 440px;
  }
  &--default {
    width: 320px;
  }
  &--sm {
    width: 212px;
  }
  &-content {
    display: flex;
    padding-inline: 12px;
    padding-block: 16px;
  }
  &-detail {
    overflow: hidden;
    width: 100%;
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1.5714285714285714;
      & > div:not(:last-child) {
        margin-block-end: 4px;
      }
      &-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  }

  &__avatar {
    padding-inline-end: 8px;
  }
  &__title {
    overflow: hidden;
    color: rgba(42, 46, 54, 0.88);
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__description {
    color: rgba(42, 46, 54, 0.65);
  }
  &__checked {
    position: absolute;
    inset-block-start: 2px;
    inset-inline-end: 2px;
    width: 0;
    height: 0;
    border: 10px solid #1677ff;
    border-block-end: 10px solid transparent;
    border-inline-start: 10px solid transparent;
    border-start-end-radius: 6px;
    &--disabled {
      position: absolute;
      inset-block-start: 2px;
      inset-inline-end: 2px;
      width: 0;
      height: 0;
      border: 10px solid rgba(42, 46, 54, 0.25);
      border-block-end: 10px solid transparent;
      border-inline-start: 10px solid transparent;
      border-start-end-radius: 6px;
    }
  }
}
.is-disabled {
  background-color: rgba(42, 46, 54, 0.04) !important;
  border-color: #d9d9d9 !important;
  cursor: not-allowed;
}
.is-bordered {
  border: 1px solid #d9d9d9;
}
.is-checked {
  background-color: #d2e5ff;
  border-color: #1677ff;
}
</style>
