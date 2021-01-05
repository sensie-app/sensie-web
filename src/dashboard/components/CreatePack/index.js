// react
import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'
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
  const inputRef = useRef(null)
  const [showError, setShowError] = useState(false)
  const [value, setValue] = useState('')
  const [redirect, setRedirect] = useState(false)

  // ? handle functions
  /**
   * handle input value
   * @param {undefined} event
   * @returns {Object} setAffirmation()
   */
  const handleInputValue = event => {
    event.preventDefault()
    setValue(event.target.value)
  }

  const handleForm = e => {
    e.preventDefault()
    if (value.length === 0) {
      setShowError(true)
      setRedirect(false)
    } else {
      setShowError(false)
      setRedirect(true)
    }
    // return showError && value !== '' && <Redirect to={addPacks} />
  }

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
      <form className={styles.CreatePackBodyForm}>
        <div className={styles.CreatePackBodyFormInput}>
          <label>{t('dashboard.CreatePack.packName')}</label>
          <input
            ref={inputRef}
            onChange={handleInputValue}
            className={showError ? styles.inputBorderError : styles.inputBorder}
          />
          {showError && <span>{t('dashboard.CreatePack.error')}</span>}
        </div>
        <div className={styles.CreatePackBodyFormBtn}>
          <button
            type="submit"
            onClick={e => handleForm(e)}
          >{t('dashboard.CreatePack.create')}</button>
          {redirect && <Redirect to={addPacks} />}
        </div>
      </form>
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
