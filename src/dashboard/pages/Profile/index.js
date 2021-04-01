// react
import React, { useState, useEffect } from 'react'
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

import { Storage } from 'aws-amplify'
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
  const imageUploader = React.useRef(null)
  const defaultAvatar = data.gender === 'Male' ? avatarMale : avatarFemale

  const getImage = async function (k) {
    console.log('picture: ', k, typeof k)
    return (k && k !== 'null') ? await Storage.get(k) : defaultAvatar
  }

  useEffect(() => {
    getImage(data.picture).then(d => setPicture(d))
  }, [data.picture])

  const handleImageUpload = e => {
    if (e.target.files[0]) {
      Storage.put('profiles/' + data.id + '.png', e.target.files[0], {
        contentType: e.target.files[0].type
      })
        .then(res => {
          data.picture = res.key
        })
      setPicture(URL.createObjectURL(e.target.files[0]))
      console.log(data)
    }
  }

  const handleRemoveImage = e => {
    data.picture = null
    setPicture()
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
              <input value={data.firstName + ' ' + data.lastName} disabled/>
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
              <input disabled />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
