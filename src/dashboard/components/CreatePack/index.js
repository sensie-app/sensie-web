// react
import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
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
const CreatePack = ({ onSave }) => {
  // hooks
  const [t] = useTranslation('global')
  const inputRef = useRef(null)
  const [showError, setShowError] = useState(false)
  const [showFile, setShowFile] = useState(null)
  const [value, setValue] = useState('')
  const [file, setFile] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [newPackId, setNewPackId] = useState(null)

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

  /**
   * handle input file value
   * @param {undefined} event
   * @returns {Object} setAffirmation()
   */
  const handleInputFileValue = event => {
    event.preventDefault()
    setShowFile(URL.createObjectURL(event.target.files[0]))
    setFile(event.target.value)
  }

  const handleForm = async e => {
    e.preventDefault()
    console.log('file', file)
    if (value.length === 0) {
      setShowError(true)
      setRedirect(false)
    } else {
      const packId = await onSave(value, value, 1) // Todo: use mutation, save img, get imageId and use here.
      setShowError(false)
      if (packId !== null) {
        setNewPackId(packId)
        setRedirect(true)
      }
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
      <div className={styles.CreactePackBodyBtnImg} style={{ backgroundImage: `url(${showFile})` }}>
        <input accept="image/*" id="iconButtonFile" type="file" onChange={handleInputFileValue} />
        <label htmlFor="iconButtonFile" className={styles.CreatePackBtnImgLabel}>
          <Icon name="image-outline" color={grayColor3} size="l" />
          <span>{showFile === null ? t('dashboard.CreatePack.addImage') : t('dashboard.CreatePack.changeImage')}</span>
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
          {redirect && <Redirect to={addPacks + '/' + newPackId} />}
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

// prop-types
CreatePack.propTypes = {
  /** onSave */
  onSave: PropTypes.func.isRequired
}

export default CreatePack
