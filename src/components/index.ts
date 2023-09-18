import CcCheckCard, { CcCheckCardGroup } from './checkCard'
import CcProCard from './proCard'
import type { App } from 'vue'

const components = [CcProCard, CcCheckCard, CcCheckCardGroup]

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c)
    })
  },
}

declare module 'vue' {
  export interface GlobalComponents {
    CcProCard: typeof CcProCard
    CcCheckCard: typeof CcCheckCard
    CcCheckCardGroup: typeof CcCheckCardGroup
  }
}
