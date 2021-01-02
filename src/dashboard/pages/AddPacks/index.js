// react
import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
// containers
import Header from '../../containers/Header'
import CreateAffirmations from '../../containers/CreateAffirmations'
// components
import Share from '../../components/Share'
// constants
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'

// const
const { noImg } = IMG
const { affirmations } = DASHBOARD_ROUTES

// * page
/**
 * AddPack page component
 * @component
 */
const AddPacks = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <Fragment>
      <Header withBack={true} withPeople={false} withDate={false} backTo={affirmations} />
      <div className={styles.AddPacksContainer}>
        {/* header */}
        <div className={styles.AddPacksHeaderContainer}>
          <div className={styles.AddPacksHeaderImgContainer}>
            <img src={noImg} />
            <div className={styles.AddPacksHeaderTextContainer}>
              <span>Deep connection</span>
              <div>
                <span>12 {t('dashboard.Pack.affirmations')}</span>
              </div>
            </div>
          </div>
          <div className={styles.AddPacksHeaderShareContainer}>
            <Share />
          </div>
        </div>
        {/* body */}
        <div className={styles.AddPacksBodyContainer}>
          <CreateAffirmations />
        </div>
      </div>
    </Fragment>
  )
}

export default AddPacks
