// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import Icon from '../Icon'
import Modal from '../Modal'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { grayColor3 } = COLORS

// * component
/**
 * CreatePack component
 * @component
 */
const CreatePack = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <div className={styles.CreatePackContainer}>
      <Modal
        title={t('dashboard.CreatePack.newPack')}
        width='38%'
      >
        <div className={styles.CreatePackBtn}>
          <Icon name="plus-circle-outline" color={grayColor3} size="xxl" />
          <span>{t('dashboard.CreatePack.createNewPack')}</span>
        </div>
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
              <button>{t('dashboard.CreatePack.create')}</button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default CreatePack
