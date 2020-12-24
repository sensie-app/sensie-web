// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// component
import Icon from '../Icon'
import ModalComponent from '../Modal'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS

// * component
/**
 * Share component
 * @component
 */
const Share = () => {
  // hooks
  const [t] = useTranslation('global')

  // ? handle functions

  return (
    <ModalComponent initialState={false} title="test modal">
      <button className={styles.ShareButton}>
        <div>
          <Icon name="share-outline" color={fontColor1} size="md" />
          <span>{t('dashboard.Share.share')}</span>
        </div>
      </button>
      <div style={{ backgroundColor: 'red' }}>
        <h1>Hola Modal!</h1>
      </div>
    </ModalComponent>
  )
}

export default Share
