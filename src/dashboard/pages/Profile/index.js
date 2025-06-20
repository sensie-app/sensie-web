// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// material-ui
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
// components
import Title from '../../components/Title'
import ImageAvatar from '../../components/ImageAvatar'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setUserDataAction } from '../../../redux/actions/user.actions'
// constants
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { getUrl, uploadData } from '@aws-amplify/storage'
// import { v4 as uuidv4 } from 'uuid'

// const
const { avatarMale, avatarFemale } = IMG
const { home } = DASHBOARD_ROUTES

// * page
/**
 * Profile page component
 * @component
 */
const Profile = () => {
  // ? hooks
  const { userReducer: { user: { data } } } = useSelector(state => state)
  const dispatch = useDispatch()
  const [t] = useTranslation('global')
  const [picture, setPicture] = useState()
  const [info, setInfo] = useState(data.infoText || '')
  const [firstName, setFirstName] = useState(data.firstName)
  const [lastName, setLastName] = useState(data.lastName)
  const [shareData, setShareData] = useState(true)
  const imageUploader = React.useRef(null)
  const defaultAvatar = data.gender === 'Male' ? avatarMale : avatarFemale

  const getImage = async function (k) {
    if (k && k !== 'null') {
      const { url } = await getUrl({ path: k })
      return url
    }
    return defaultAvatar
  }

  useEffect(() => {
    data.infoText = data.infoText || ''
    getImage(data.picture).then(d => setPicture(d))
    setInfo(data.infoText)
    setFirstName(data.firstName)
    setLastName(data.lastName)
    if (data.shareData !== undefined && data.shareData !== null) {
      setShareData(data.shareData)
    }
  }, [data])

  const handleImageUpload = async e => {
    if (e.target.files[0]) {
      const { result } = await uploadData({
        key: 'profiles/' + data.id + '.png',
        data: e.target.files[0],
        options: { contentType: e.target.files[0].type }
      })
      data.picture = result.key
      setPicture(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleInfo = e => {
    setInfo(e.target.value)
    data.infoText = e.target.value
  }

  const handleFirstName = e => {
    setFirstName(e.target.value)
    data.firstName = e.target.value
  }

  const handleShareData = e => {
    setShareData(e.target.checked)
    data.shareData = e.target.checked
  }

  const handleLastName = e => {
    setLastName(e.target.value)
    data.lastName = e.target.value
  }

  const handleRemoveImage = e => {
    data.picture = null
    setPicture()
  }

  const saveUserData = () => {
    dispatch(setUserDataAction(data))
    toast.success(t('Profile Saved'))
  }

  return (
    <div className={styles.ProfileContainer}>
      <div className={styles.ProfileTitleContainer}>
        <Title text={t('dashboard.Profile.profile')} />
      </div>
      <Grid container spacing={1}>
        <Grid container item spacing={0} xs={12} sm={12} md={8} lg={8} xl={8}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.ProfileGridContainer}>
              <div>
                <label>{t('dashboard.Profile.firstName')}</label>
                <input value={firstName} onChange={handleFirstName} />
              </div>
              <div>
                <label>{t('dashboard.Profile.lastName')}</label>
                <input value={lastName} onChange={handleLastName} />
              </div>
              <div>
                <label className={styles.ProfileLabelDisabled}>{t('dashboard.Profile.role')}</label>
                <input value="Coach" disabled />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.ProfileGridContainer}>
              <div>
                <label className={styles.ProfileLabelDisabled}>{t('dashboard.Profile.email')}</label>
                <input value={data.email} disabled />
              </div>
              <div>
                <label className={styles.ProfileLabelDisabled}>{t('dashboard.Profile.useSensie')}</label>
                <input defaultValue={''} disabled />
              </div>
              {data.userCoachId &&
                <div className={styles.ItemCheckboxContainer}>
                  <label>{t('dashboard.Profile.shareData')}</label>
                  <Checkbox
                    checked={shareData}
                    className={styles.ItemCheckboxCheck}
                    // onChange={() => setCheck(!_check)}
                    onChange={handleShareData}
                  />
                </div>
              }
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={styles.ProfileGridContainer}>
              <div>
                <label className={styles.ProfileLabelDisabled}>{t('Info')}</label>
                <textarea value={info} onChange={handleInfo} cols='50' rows='5' />
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container item spacing={1} xs={12} sm={12} md={4} lg={4} xl={4}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={styles.ProfileGridAvatarContainer}>
              <div className={styles.ProfileAvatarContainer}>
                <ImageAvatar url={picture || defaultAvatar} alt="avatar" size="xlarge" />
              </div>
              <div className={styles.ProfileBtnsContainer}>
                <button onClick={() => imageUploader.current.click()}>{t('dashboard.Profile.uploadImage')}
                  <input type="file" ref={imageUploader} onChange={handleImageUpload} />
                </button>
                <button onClick={handleRemoveImage}>{t('dashboard.Profile.removeImage')}</button>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={styles.ProfileFooterContainer}>
          <Link to={home}>
            <button>{t('dashboard.Profile.cancel')}</button>
          </Link>
          <button onClick={saveUserData}>{t('dashboard.Profile.save')}</button>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Grid>
    </div>
  )
}

export default Profile
