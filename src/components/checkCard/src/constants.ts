import { type InjectionKey, type ToRefs, type WritableComputedRef } from 'vue'
import type { CheckCardGroupProps } from './checkCardGroup.vue'

type CheckCardGroupContext = {
  modelValue?: WritableComputedRef<any>
  changeEvent?: (...args: any) => any
} & ToRefs<
  Pick<
    CheckCardGroupProps,
    'size' | 'disabled' | 'bordered' | 'multiple' | 'loading'
  >
>

export const checkCardGroupContextKey: InjectionKey<CheckCardGroupContext> =
  Symbol('checkCardGroupContextKey')
