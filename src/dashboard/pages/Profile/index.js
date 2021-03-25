// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Grid from '@material-ui/core/Grid'
// components
import Title from '../../components/Title'
import ImageAvatar from '../../components/ImageAvatar'
// redux
import { useSelector } from 'react-redux'
// constants
import IMG from '../../constants/images'
// styles
import styles from './styles.module.scss'

// const
const { avatarMale, avatarFemale } = IMG

// * page
/**
 * Profile page component
 * @component
 */
const Profile = () => {
  // ? hooks
  const { userReducer: { user: { data } } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [name, setName] = useState(data.firstName + ' ' + data.lastName)
  console.log('setName', setName)

  return (
    <div className={styles.ProfileContainer}>
      <div className={styles.ProfileTitleContainer}>
        <Title text={t('dashboard.Profile.profile')} />
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className={styles.ProfileGridContainer}>
            <div>
              <label>{t('dashboard.Profile.fristLastName')}</label>
              <input value={name} />
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
              <ImageAvatar url={data.gender === 'Male' ? avatarMale : avatarFemale} alt={data.name} size="xlarge" />
            </div>
            <div className={styles.ProfileBtnsContainer}>
              <button>{t('dashboard.Profile.uploadImage')}</button>
              <button>{t('dashboard.Profile.removeImage')}</button>
            </div>
          </div>
        </Grid>
        <div className={styles.ProfileFooterContainer}>
          <button>{t('dashboard.Profile.cancel')}</button>
          <button>{t('dashboard.Profile.save')}</button>
        </div>
      </Grid>
    </div>
  )
}

export default Profile
