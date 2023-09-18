import { computed, getCurrentInstance, inject, ref } from 'vue'
import { useNamespace } from '../../../hooks'
import { checkCardGroupContextKey } from './constants'
import type { CheckCardProps } from './checkCard.vue'

export const useCheckCard = (props: CheckCardProps) => {
  const { emit } = getCurrentInstance()!
  const ns = useNamespace('check-card')
  const selfModel = ref<unknown>(false)
  const checkCardGroup = inject(checkCardGroupContextKey, undefined)
  const isGroup = computed(() => checkCardGroup !== undefined)

  const model = computed({
    get() {
      return isGroup.value
        ? checkCardGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value
    },
    set(val: unknown) {
      if (isGroup.value && Array.isArray(val)) {
        checkCardGroup?.changeEvent?.(val)
      } else {
        emit('update:modelValue', val)
        selfModel.value = val
      }
    },
  })

  const checked = computed(() => {
    if (isGroup.value) {
      return checkCardGroup?.modelValue?.value.includes(props.value)
    } else {
      return model.value === true
    }
  })

  const borderedClass = computed(() => ({
    [ns.is('bordered')]: props.bordered,
  }))

  const sizeClass = computed(() => ({
    [ns.m('lg')]: isGroup.value
      ? checkCardGroup?.size?.value === 'large'
      : props.size === 'large',
    [ns.m('default')]: isGroup.value
      ? checkCardGroup?.size?.value === 'default'
      : props.size === 'default',
    [ns.m('sm')]: isGroup.value
      ? checkCardGroup?.size?.value === 'small'
      : props.size === 'small',
  }))

  const cardDisabled = computed(() =>
    isGroup.value ? checkCardGroup?.disabled?.value : props.disabled
  )
  const cardLoading = computed(() =>
    isGroup.value ? checkCardGroup?.loading?.value : props.loading
  )

  const disabledClass = computed(() => ({
    [ns.is('disabled')]: cardDisabled.value,
  }))

  const checkedDisabledClass = computed(() => ({
    [ns.em('checked', 'disabled')]: cardDisabled.value,
  }))

  const click = (e: MouseEvent) => {
    if (cardDisabled.value || cardLoading.value) {
      return
    }
    emit('click', e)
    if (isGroup.value) {
      if (checkCardGroup?.multiple?.value) {
        const checks = [...checkCardGroup.modelValue!.value]
        if (!checks.includes(props.value)) {
          checks.push(props.value)
        } else {
          const index = checks.indexOf(props.value)
          checks.splice(index, 1)
        }
        checkCardGroup?.changeEvent?.(checks)
      } else {
        const checks = []
        checks.push(props.value)
        checkCardGroup?.changeEvent?.(checks)
      }
    } else {
      change(!props.modelValue)
    }
  }

  const change = (val: boolean) => {
    emit('update:modelValue', val)
    emit('change', val)
  }
  return {
    click,
    change,
    model,
    isGroup,
    checked,
    borderedClass,
    sizeClass,
    cardDisabled,
    disabledClass,
    checkedDisabledClass,
    cardLoading,
  }
}
