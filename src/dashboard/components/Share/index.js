// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// component
import Icon from '../Icon'
import Modal from '../Modal'
import ShareWith from '../ShareWith'
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

  // ? render functions
  /**
   * render modal button
   * @returns {undefined} button (html)
   */
  const renderModalBtn = () => (
    <button className={styles.ShareButton}>
      <div>
        <Icon name="share-outline" color={fontColor1} size="md" />
        <span>{t('dashboard.Share.shareWith')}</span>
      </div>
    </button>
  )

  return (
    <Modal initialState={false} title={t('dashboard.Share.shareTo') + ':'}>
      {renderModalBtn()}
      <ShareWith />
    </Modal>
  )
}

export default Share
