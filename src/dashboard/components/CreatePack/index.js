// react
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// components
import Icon from '../Icon'
import Modal from '../Modal'
// constants
import { COLORS } from '../../constants/theme'
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'

// const
const { grayColor3 } = COLORS
const { addPacks } = DASHBOARD_ROUTES

// * component
/**
 * CreatePack component
 * @component
 */
const CreatePack = () => {
  // hooks
  const [t] = useTranslation('global')

  // ? render functions
  /**
   * render modal button
   * @returns {undefined} div (html)
   */
  const renderModalBtn = () => (
    <div className={styles.CreatePackBtn}>
      <Icon name="plus-circle-outline" color={grayColor3} size="xxl" />
      <span>{t('dashboard.CreatePack.createNewPack')}</span>
    </div>
  )

  /**
   * render modal body
   * @returns {undefined} form (html)
   */
  const renderModalBody = () => (
    <form className={styles.CreatePackBody} action="post" encType="multipart/form-data" >
      <div className={styles.CreactePackBodyBtnImg}>
        <input accept="image/*" id="iconButtonFile" type="file" />
        <label htmlFor="iconButtonFile">
          <Icon name="image-outline" color={grayColor3} size="l" />
          <span>{t('dashboard.CreatePack.addImage')}</span>
        </label>
      </div>
      <div className={styles.CreatePackBodyForm}>
        <div className={styles.CreatePackBodyFormInput}>
          <span>{t('dashboard.CreatePack.packName')}</span>
          <input />
        </div>
        <div className={styles.CreatePackBodyFormBtn}>
          <Link to={addPacks}>
            <button>{t('dashboard.CreatePack.create')}</button>
          </Link>
        </div>
      </div>
    </form>
  )

  return (
    <div className={styles.CreatePackContainer}>
      <Modal
        title={t('dashboard.CreatePack.newPack')}
        width='38%'
        initialState={false}
      >
        {renderModalBtn()}
        {renderModalBody()}
      </Modal>
    </div>
  )
}

export default CreatePack
