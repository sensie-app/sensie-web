// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1, actionColor1 } = COLORS

// * component
/**
 * CreateAffirmations component
 * @component
 */
const CreateAffirmations = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <div className={styles.CreateAffirmationsContainer}>
      {/* header */}
      <div className={styles.CreateAffirmationsHeaderContainer}>
        <Checkbox checked={true} color={actionColor1} className={styles.CreateAffirmationsCheckbox} />
        <button><Icon name="plus-outline" color={fontColor1} size="md" /> {t('dashboard.CreateAffirmations.addNew')}</button>
      </div>
      {/* list affirmations */}
      <div className={styles.CreateAffirmationsBodyContainer}>
        <div className={styles.CreateAffirmationsForm}>
          <div className={styles.CreateAffirmationsFormD1}>
            <div>
              <input />
            </div>
            <button>Done</button>
            <button>Topics</button>
          </div>
          <div className={styles.CreateAffirmationsFormD2}>
            <Icon name="more-horizontal-outline" color={fontColor1} size="md" />
            <Icon name="arrow-ios-upward-outline" color={fontColor1} size="md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAffirmations
