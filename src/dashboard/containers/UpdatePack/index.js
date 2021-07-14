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
import { updatePacksAction, deletePacksAction } from '../../../redux/actions/packs.actions'

import { Storage } from 'aws-amplify'
import { ClickAwayListener, IconButton, Grow, MenuList, Popper } from '@material-ui/core'
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
  const anchorRef = useRef(null)
  const [showError, setShowError] = useState(false)
  const [showFile, setShowFile] = useState('')
  const [prevImg, setPrevImg] = useState('')
  const [value, setValue] = useState(title)
  const [author, setAuthor] = useState(authorName)
  const [file, setFile] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [packId] = useState(id)
  const [open, setOpen] = useState(false)
  const prevOpen = useRef(open)

  const getImage = async function (k) {
    return (k ? await Storage.get(k) : noImg)
  }
  useEffect(() => {
    getImage(img).then(d => {
      setPrevImg(d)
      setShowFile(d)
    })
  }, [])

  useEffect(() => {
    prevOpen.current === true && open === false && anchorRef.current.focus()
    prevOpen.current = open
  }, [open])

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

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const handleDelete = () => {
    dispatch(deletePacksAction(packId))
  }

  const handleToggle = () => setOpen((prevOpen) => !prevOpen)

  // ? render functions
  /**
   * render modal button
   * @returns {undefined} div (html)
   */
  const renderModalBtn = () => (
    <>
      {t('dashboard.CreatePack.edit')}
    </>
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
    <>
      <div className={styles.UpdatePackContainer}>
        <div className={styles.UpdatePackBtn}>
          <IconButton ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>
            <Icon name="more-vertical-outline" color={grayColor3} size="sm"></Icon>
          </IconButton>
        </div>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <div className={styles.MenuListCompositionMenuContainer}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow">
                    <button className={styles.MenuListCompositionItem}>
                      <Modal
                        title={t('dashboard.CreatePack.updatePack')}
                        width='38%'
                        initialState={false}
                        width2='100%'
                        onClose={handleOnModalClose}
                        styleBtn={{ color: 'white' }}
                      >
                        {renderModalBtn()}
                        {renderModalBody()}
                      </Modal>
                    </button>
                    <button className={styles.MenuListCompositionItem}>
                      <Modal
                        title={t('dashboard.CreatePack.deletePack')}
                        width='38%'
                        initialState={false}
                        width2='100%'
                        onClose={handleOnModalClose}
                        styleBtn={{ color: 'white' }}
                      >
                        <div>
                          {t('dashboard.CreatePack.delete')}
                        </div>
                        <div className={styles.CreatePackBodyForm}>
                          <p style={{ color: 'white' }}>{t('dashboard.CreatePack.confirmDelete')}</p>
                          <div className={styles.CreatePackBodyFormBtn}>
                            <button
                              type="button"
                              onClick={e => handleDelete(e)}
                            >{t('dashboard.CreatePack.delete')}</button>
                          </div>
                        </div>
                      </Modal>
                    </button>
                  </MenuList>
                </ClickAwayListener>
              </div>
            </Grow>
          )}
        </Popper>
      </div>
    </>
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
