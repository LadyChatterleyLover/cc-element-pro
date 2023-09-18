import { withInstall, withNoopInstall } from '../../utils'
import CheckCard from './src/checkCard.vue'
import CheckCardGroup from './src/checkCardGroup.vue'

export const CcCheckCard = withInstall(CheckCard, {
  CheckCardGroup,
})

export const CcCheckCardGroup = withNoopInstall(CheckCardGroup)

export default CcCheckCard
