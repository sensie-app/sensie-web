// react
import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
// components
import Icon from '../../components/Icon'
import Modal from '../../components/Modal'
// constants
import { COLORS } from '../../constants/theme'
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { createPacksAction, cleanNewPackAction } from '../../../redux/actions/packs.actions'

import { uploadData } from '@aws-amplify/storage'
import { v4 as uuidv4 } from 'uuid'

// const
const { grayColor3 } = COLORS
const { pack } = DASHBOARD_ROUTES

// * component
/**
 * CreatePack component
 * @component
 */
const CreatePack = ({ onSave }) => {
  // ? hooks
  const dispatch = useDispatch()
  const {
    userReducer: { user },
    packsReducer
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const inputRef = useRef(null)
  const [showError, setShowError] = useState(false)
  const [showFile, setShowFile] = useState(null)
  const [value, setValue] = useState('')
  const [author, setAuthor] = useState('')
  const [file, setFile] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [newPackId, setNewPackId] = useState(null)

  useEffect(() => {
    if (!packsReducer.loading && packsReducer.newpack !== null) {
      setNewPackId(packsReducer.newpack.id)
      setRedirect(true)
      dispatch(cleanNewPackAction())
    }
  }, [packsReducer, dispatch])

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

  const handleAuthorValue = event => {
    event.preventDefault()
    setAuthor(event.target.value)
  }

  /**
   * handle input file value
   * @param {undefined} event
   * @returns {Object} setAffirmation()
   */
  const handleInputFileValue = event => {
    event.preventDefault()
    setShowFile(URL.createObjectURL(event.target.files[0]))
    setFile(event.target.files[0])
  }

  const handleForm = async e => {
    e.preventDefault()

    if (author.length === 0) {
      setShowError(true)
      setRedirect(false)
    }
    if (value.length === 0) {
      setShowError(true)
      setRedirect(false)
    } else {
      const packId = uuidv4()
      const { result } = await uploadData({
        key: 'packs/' + packId + '.png',
        data: file,
        options: { contentType: file.type }
      })
      packsReducer.newpack = true
      dispatch(createPacksAction(value, value, author, user.id, result.key))
      setShowError(false)
    }
    return false
  }

  if (redirect) {
    return <Navigate to={`${pack}/${newPackId}`} replace />
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
        <div className={styles.CreatePackBodyFormInput}>
          <label>{t('dashboard.CreatePack.authorName')}</label>
          <input
            ref={inputRef}
            onChange={handleAuthorValue}
            className={showError ? styles.inputBorderError : styles.inputBorder}
          />
          {showError && <span>{t('dashboard.CreatePack.error')}</span>}
        </div>
        <div className={styles.CreatePackBodyFormBtn}>
          <button
            type="submit"
            onClick={e => handleForm(e)}
          >{t('dashboard.CreatePack.create')}</button>
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
        width2='100%'
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
  onSave: PropTypes.func
}

export default CreatePack
