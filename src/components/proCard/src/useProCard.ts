import { computed } from 'vue'
import { useNamespace } from '../../../hooks'
import type { ProCardProps } from './proCard.vue'

export const useProCard = (props: ProCardProps) => {
  const ns = useNamespace('pro-card')
  const borderedClass = computed(() => ({
    [ns.is('bordered')]: props.bordered,
  }))

  const shadowClass = computed(() => ({
    [ns.is('shadow')]: props.boxShadow,
  }))

  return {
    borderedClass,
    shadowClass,
  }
}
