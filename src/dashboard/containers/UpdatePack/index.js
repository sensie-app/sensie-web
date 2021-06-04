// react
import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
// components
import Icon from '../../components/Icon'
import Modal from '../../components/Modal'
// constants
import { COLORS } from '../../constants/theme'
import DASHBOARD_ROUTES from '../../constants/routes'
import IMG from '../../constants/images'
// styles
import styles from './styles.module.scss'
// redux
import { useDispatch } from 'react-redux'
import { updatePacksAction } from '../../../redux/actions/packs.actions'

import { Storage } from 'aws-amplify'
// import { v4 as uuidv4 } from 'uuid'

// const
const { grayColor3 } = COLORS
const { pack } = DASHBOARD_ROUTES
const { noImg } = IMG

// * component
/**
 * UpdatePack component
 * @component
 */
const UpdatePack = ({ img, title, authorName, id }) => {
  // ? hooks
  const dispatch = useDispatch()
  // const {
  //   // userReducer: { user },
  //   packsReducer
  // } = useSelector(state => state)
  const [t] = useTranslation('global')
  const inputRef = useRef(null)
  const [showError, setShowError] = useState(false)
  const [showFile, setShowFile] = useState('')
  const [prevImg, setPrevImg] = useState('')
  const [value, setValue] = useState(title)
  const [author, setAuthor] = useState(authorName)
  const [file, setFile] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [packId] = useState(id)

  console.log('packId', packId)
  console.log('redirect', redirect)

  const getImage = async function (k) {
    return (k ? await Storage.get(k) : noImg)
  }
  useEffect(() => {
    console.log('[IMAGE]', img)
    getImage(img).then(d => {
      setPrevImg(d)
      setShowFile(d)
    })
  }, [])

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

  const handleOnModalClose = () => {
    setShowFile(prevImg)
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
    console.log('file', file)
    console.log(redirect)
    if (author.length === 0) {
      setShowError(true)
      setRedirect(false)
    }
    if (value.length === 0) {
      setShowError(true)
      setRedirect(false)
    } else {
      if (file !== '') {
        Storage.put('packs/' + packId + '.png', file, {
          contentType: file.type
        })
          .then(res => {
            console.log('[IMAGE]', res)
            dispatch(updatePacksAction(packId, value, value, author, res.key))
            setShowError(false)
          })
      } else {
        dispatch(updatePacksAction(packId, value, value, author, img))
        setShowError(false)
      }
    }
    return false
  }

  // ? render functions
  /**
   * render modal button
   * @returns {undefined} div (html)
   */
  const renderModalBtn = () => (
    <div className={styles.UpdatePackBtn}>
      <Icon name="edit-outline" color={grayColor3} size="md" />
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
            defaultValue={title}
            onChange={handleInputValue}
            className={showError ? styles.inputBorderError : styles.inputBorder}
          />
          {showError && <span>{t('dashboard.CreatePack.error')}</span>}
        </div>
        <div className={styles.CreatePackBodyFormInput}>
          <label>{t('dashboard.CreatePack.authorName')}</label>
          <input
            ref={inputRef}
            defaultValue={authorName}
            onChange={handleAuthorValue}
            className={showError ? styles.inputBorderError : styles.inputBorder}
          />
          {showError && <span>{t('dashboard.CreatePack.error')}</span>}
        </div>
        <div className={styles.CreatePackBodyFormBtn}>
          <button
            type="submit"
            onClick={e => handleForm(e)}
          >{t('dashboard.CreatePack.update')}</button>
          {redirect && <Redirect to={pack + '/' + packId} />}
        </div>
      </form>
    </form>
  )

  return (
    <div className={styles.UpdatePackContainer}>
      <Modal
        title={t('dashboard.CreatePack.updatePack')}
        width='38%'
        initialState={false}
        width2='100%'
        onClose={handleOnModalClose}
      >
        {renderModalBtn()}
        {renderModalBody()}
      </Modal>
    </div>
  )
}

// prop-types
UpdatePack.propTypes = {
  /** img */
  img: PropTypes.string.isRequired,
  /** author */
  authorName: PropTypes.string.isRequired,
  /** title */
  title: PropTypes.string.isRequired,
  /** id */
  id: PropTypes.string.isRequired
}

export default UpdatePack
