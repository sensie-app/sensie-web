// react
import React, { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
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
const { noImg, connectionMomentsImg } = IMG
const { affirmations } = DASHBOARD_ROUTES
const packDefault = {
  id: 1,
  title: 'Connection moments',
  img: connectionMomentsImg,
  affirmations: 5
}

// * page
/**
 * Pack page component
 * @component
 */
const Pack = () => {
  // hooks
  const [t] = useTranslation('global')
  const { id } = useParams() // todo: use id for get pack info
  const [pack, setPack] = useState(packDefault)
  console.log('setPack', setPack)
  console.log('id', id)

  return (
    <Fragment>
      <Header withBack={true} withPeople={false} withDate={false} backTo={affirmations} />
      <div className={styles.PackContainer}>
        {/* header */}
        <div className={styles.PackHeaderContainer}>
          <div className={styles.PackHeaderImgContainer}>
            <div className={styles.PackHeaderImg} style={{ backgroundImage: `url(${pack.img ? pack.img : noImg})` }} />
            <div className={styles.PackHeaderTextContainer}>
              <span>{pack.title}</span>
              <div>
                <span>{pack.affirmations} {t('dashboard.Pack.affirmations')}</span>
              </div>
            </div>
          </div>
          <div className={styles.PackHeaderShareContainer}>
            <Share />
          </div>
        </div>
        {/* body */}
        <div className={styles.PackBodyContainer}>
          <CreateAffirmations initShowForm={false} withAffirmationsByTopics={false} />
        </div>
      </div>
    </Fragment>
  )
}

export default Pack
