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

  return (
    <ModalComponent initialState={false} title={t('dashboard.Share.shareTo') + ':'}>
      <button className={styles.ShareButton}>
        <div>
          <Icon name="share-outline" color={fontColor1} size="md" />
          <span>{t('dashboard.Share.share')}</span>
        </div>
      </button>
      <ul className={styles.ShareModalBodyContent}>
        <li>
          <button>{t('dashboard.Share.allClients')}</button>
        </li>
        <li>
          <button>{t('dashboard.Share.selectedClients')}</button>
        </li>
      </ul>
    </ModalComponent>
  )
}

export default Share
