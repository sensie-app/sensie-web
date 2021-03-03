// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// component
import Icon from '../Icon'
import Modal from '../Modal'
// containers
import ShareWith from '../../containers/ShareWith'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

// const
const { fontColor1 } = COLORS

// * component
/**
 * Share component
 * @component
 */
const Share = ({ pack }) => {
  // ? hooks
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
    <Modal initialState={false} title={'Sharing Pack: ' + (pack ? pack.name : '') }>
      {renderModalBtn()}
      <ShareWith pack={pack}/>
      <div style={{ position: 'fixed' }}>asdasd</div>
    </Modal>
  )
}

Share.propTypes = {
  pack: PropTypes.object
}

export default Share
