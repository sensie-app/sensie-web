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
import IMG from '../../constants/images'

// styles
import styles from './styles.module.scss'

// redux
import { useDispatch } from 'react-redux'
import { updatePacksAction, deletePacksAction } from '../../../redux/actions/packs.actions'

// Amplify v6
import { getUrl, uploadData } from 'aws-amplify/storage'

// MUI v5
import { ClickAwayListener } from '@mui/base/ClickAwayListener'
import IconButton from '@mui/material/IconButton'
import Grow from '@mui/material/Grow'
import MenuList from '@mui/material/MenuList'
import Popper from '@mui/material/Popper'

// const
const { grayColor3 } = COLORS
const { pack } = DASHBOARD_ROUTES
const { noImg } = IMG

// * component
const UpdatePack = ({ img, title, authorName, id }) => {
  const dispatch = useDispatch()
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

  // Amplify v6 - get image
  const getImage = async (key) => {
    if (!key) return noImg
    try {
      const { url } = await getUrl({ path: `public/${key}` })
      return url
    } catch (error) {
      console.error('Error getting image URL:', error)
      return noImg
    }
  }

  useEffect(() => {
    getImage(img).then(d => {
      setPrevImg(d)
      setShowFile(d)
    })
  }, [])

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus()
    }
    prevOpen.current = open
  }, [open])

  const handleInputValue = event => setValue(event.target.value)
  const handleAuthorValue = event => setAuthor(event.target.value)

  const handleOnModalClose = () => setShowFile(prevImg)

  const handleInputFileValue = event => {
    const f = event.target.files[0]
    setShowFile(URL.createObjectURL(f))
    setFile(f)
  }

  const handleForm = async (e) => {
    e.preventDefault()

    if (!author || !value) {
      setShowError(true)
      setRedirect(false)
      return
    }

    if (file) {
      try {
        const uploadRes = await uploadData({
          path: `packs/${packId}.png`,
          data: file,
          options: {
            contentType: file.type
          }
        }).result

        dispatch(updatePacksAction(packId, value, value, author, uploadRes.key))
      } catch (err) {
        console.error('Error uploading image', err)
      }
    } else {
      dispatch(updatePacksAction(packId, value, value, author, img))
    }

    setShowError(false)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return
    setOpen(false)
  }

  const handleDelete = () => {
    dispatch(deletePacksAction(packId))
  }

  const handleToggle = () => setOpen(prev => !prev)

  const renderModalBtn = () => <>{t('dashboard.CreatePack.edit')}</>

  const renderModalBody = () => (
    <form className={styles.CreatePackBody} onSubmit={handleForm} encType="multipart/form-data">
      <div className={styles.CreactePackBodyBtnImg} style={{ backgroundImage: `url(${showFile})` }}>
        <input accept="image/*" id="iconButtonFile" type="file" onChange={handleInputFileValue} />
        <label htmlFor="iconButtonFile" className={styles.CreatePackBtnImgLabel}>
          <Icon name="image-outline" color={grayColor3} size="l" />
          <span>{!showFile ? t('dashboard.CreatePack.addImage') : t('dashboard.CreatePack.changeImage')}</span>
        </label>
      </div>

      <div className={styles.CreatePackBodyForm}>
        <div className={styles.CreatePackBodyFormInput}>
          <label>{t('dashboard.CreatePack.packName')}</label>
          <input
            ref={inputRef}
            value={value}
            onChange={handleInputValue}
            className={showError ? styles.inputBorderError : styles.inputBorder}
          />
          {showError && <span>{t('dashboard.CreatePack.error')}</span>}
        </div>
        <div className={styles.CreatePackBodyFormInput}>
          <label>{t('dashboard.CreatePack.authorName')}</label>
          <input
            ref={inputRef}
            value={author}
            onChange={handleAuthorValue}
            className={showError ? styles.inputBorderError : styles.inputBorder}
          />
          {showError && <span>{t('dashboard.CreatePack.error')}</span>}
        </div>
        <div className={styles.CreatePackBodyFormBtn}>
          <button type="submit">{t('dashboard.CreatePack.update')}</button>
          {redirect && <Navigate to={`${pack}/${packId}`} />}
        </div>
      </div>
    </form>
  )

  return (
    <div className={styles.UpdatePackContainer}>
      <div className={styles.UpdatePackBtn}>
        <IconButton ref={anchorRef} onClick={handleToggle}>
          <Icon name="more-vertical-outline" color={grayColor3} size="sm" />
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
                      width="38%"
                      initialState={false}
                      width2="100%"
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
                      width="38%"
                      initialState={false}
                      width2="100%"
                      onClose={handleOnModalClose}
                      styleBtn={{ color: 'white' }}
                    >
                      <div>{t('dashboard.CreatePack.delete')}</div>
                      <div className={styles.CreatePackBodyForm}>
                        <p style={{ color: 'white' }}>{t('dashboard.CreatePack.confirmDelete')}</p>
                        <div className={styles.CreatePackBodyFormBtn}>
                          <button type="button" onClick={handleDelete}>
                            {t('dashboard.CreatePack.delete')}
                          </button>
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
  )
}

// prop-types
UpdatePack.propTypes = {
  img: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default UpdatePack
