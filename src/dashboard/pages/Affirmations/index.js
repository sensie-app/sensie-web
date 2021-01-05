// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setShowPacksOrTopicsAction } from '../../../redux/actions/show.actions'
// components
import Title from '../../components/Title'
import Share from '../../components/Share'
import Packs from '../../components/Packs'
import Topics from '../../components/Topics'
// constants
import { CreatePacksTags } from '../../constants/globals'
// styles
import styles from './styles.module.scss'

// const
const { topics, packs } = CreatePacksTags

// * page
/**
 * Affirmations page component
 * @component
 */
const Affirmations = () => {
  // hooks
  const dispatch = useDispatch()
  const { showReducer: { showPacksOrTopics } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [show, setShow] = useState(showPacksOrTopics)

  // ? handle functions
  /**
   * handle show
   * @param {string} section
   * @returns {undefined}
   */
  const handleShow = section => {
    setShow(section)
    dispatch(setShowPacksOrTopicsAction(section))
  }

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
              <button className={show === packs && styles.AffirmationsBtnSelected} onClick={() => handleShow(packs)}><span>{t('dashboard.Affirmations.packs')}</span></button>
              <button className={show === topics && styles.AffirmationsBtnSelected} onClick={() => handleShow(topics)}><span>{t('dashboard.Affirmations.topics')}</span></button>
            </div>
            <Share />
          </div>
        </div>
        <div>
          { show === packs ? <Packs /> : <Topics /> }
        </div>
      </div>
    </div>
  )
}

export default Affirmations
