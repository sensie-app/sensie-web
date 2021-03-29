// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// material-ui
import Grid from '@material-ui/core/Grid'
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
  const imageUploader = React.useRef(null)
  const defaultAvatar = data.gender === 'Male' ? avatarMale : avatarFemale

  const handleImageUpload = e => {
    if (e.target.files[0]) {
      setPicture(URL.createObjectURL(e.target.files[0]))
      data.picture = URL.createObjectURL(e.target.files[0])
    }
  }

  const saveUserData = () => {
    dispatch(setUserDataAction(data))
  }

  return (
    <div className={styles.ProfileContainer}>
      <div className={styles.ProfileTitleContainer}>
        <Title text={t('dashboard.Profile.profile')} />
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className={styles.ProfileGridContainer}>
            <div>
              <label>{t('dashboard.Profile.firstLastName')}</label>
              <input value={data.firstName + ' ' + data.lastName} />
            </div>
            <div>
              <label className={styles.ProfileLabelDisabled}>{t('dashboard.Profile.role')}</label>
              <input value="Coach" disabled />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className={styles.ProfileGridContainer}>
            <div>
              <label className={styles.ProfileLabelDisabled}>{t('dashboard.Profile.email')}</label>
              <input value={data.email} disabled />
            </div>
            <div>
              <label>{t('dashboard.Profile.useSensie')}</label>
              <input />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className={styles.ProfileGridAvatarContainer}>
            <div className={styles.ProfileAvatarContainer}>
              <ImageAvatar url={data.picture || picture || defaultAvatar} alt="avatar" size="xlarge" />
            </div>
            <div className={styles.ProfileBtnsContainer}>
              <button onClick={() => imageUploader.current.click()}>{t('dashboard.Profile.uploadImage')}
                <input type="file" ref={imageUploader} onChange={handleImageUpload} />
              </button>
              <button onClick={() => setPicture(null)}>{t('dashboard.Profile.removeImage')}</button>
            </div>
          </div>
        </Grid>
        <div className={styles.ProfileFooterContainer}>
          <Link to={home}>
           <button>{t('dashboard.Profile.cancel')}</button>
          </Link>
          <button onClick={saveUserData}>{t('dashboard.Profile.save')}</button>
        </div>
      </Grid>
    </div>
  )
}

export default Profile
