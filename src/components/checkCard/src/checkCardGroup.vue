<template>
  <div :class="ns.b()">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, provide, toRefs } from 'vue'
import { pick } from 'lodash-es'
import { useNamespace } from '../../../hooks'
import { checkCardGroupContextKey } from './constants'

export interface CheckCardGroupProps {
  multiple?: boolean
  bordered?: boolean
  modelValue: string | string[]
  disabled?: boolean
  size?: 'default' | 'small' | 'large'
  loading?: boolean
}

defineOptions({
  name: 'CcCheckCardGroup',
})

const ns = useNamespace('check-card-group')

const props = withDefaults(defineProps<CheckCardGroupProps>(), {
  size: 'default',
  bordered: true,
  disabled: false,
  multiple: false,
})

const emits = defineEmits<{
  'update:modelValue': [val: string | string[]]
  change: [val: string | string[]]
}>()

const changeEvent = async (value: string | string[]) => {
  emits('update:modelValue', value)
  await nextTick()
  emits('change', value)
}

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: string | string[]) {
    changeEvent(val)
  },
})

provide(checkCardGroupContextKey, {
  modelValue,
  changeEvent,
  ...pick(toRefs(props), ['size', 'bordered', 'disabled', 'multiple']),
})
</script>

<style scoped lang="scss">
.check-card-group {
  display: flex;
}
</style>
