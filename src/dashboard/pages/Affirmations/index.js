// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// components
import Title from '../../components/Title'
import Share from '../../components/Share'
import Packs from '../../components/Packs'
import Topics from '../../components/Topics'
// styles
import styles from './styles.module.scss'

// const
const SHOW = {
  packs: 'pack',
  topics: 'topics'
}

// * page
/**
 * Affirmations page
 * @component
 */
const Affirmations = () => {
  // hooks
  const [t] = useTranslation('global')
  const [show, setShow] = useState(SHOW.packs)

  // ? handle functions
  const handleShow = section => section === SHOW.packs ? setShow(SHOW.packs) : setShow(SHOW.topics)

  return (
    <div className={styles.AffirmationsContainer}>
      <div className={styles.AffirmationsContentContainer}>
        {/* header */}
        <div className={styles.AffirmationsHeaderContainer}>
          <div className={styles.AffirmationsHeaderTitleContainer}>
            <Title text={t('dashboard.Affirmations.affirmations')} />
          </div>
          <div className={styles.AffirmationsHeaderTabsContainer}>
            <div>
              <button className={show === SHOW.packs && styles.AffirmationsBtnSelected} onClick={() => handleShow(SHOW.packs)}><span>{t('dashboard.Affirmations.packs')}</span></button>
              <button className={show === SHOW.topics && styles.AffirmationsBtnSelected} onClick={() => handleShow(SHOW.topics)}><span>{t('dashboard.Affirmations.topics')}</span></button>
            </div>
            <Share />
          </div>
        </div>
        <div>
          { show === SHOW.packs ? <Packs /> : <Topics /> }
        </div>
      </div>
    </div>
  )
}

export default Affirmations
