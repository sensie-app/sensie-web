// react
import React, { useState, useEffect, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setShowPacksOrTopicsAction } from '../../../redux/actions/show.actions'
import { listPacksAction } from '../../../redux/actions/packs.actions'
// components
import Title from '../../components/Title'
import Share from '../../components/Share'
import Packs from '../../components/Packs'
import Topics from '../../components/Topics'
import Loading from '../../components/Loading'
// constants
import { CreatePacksTags } from '../../constants/globals'
// styles
import styles from './styles.module.scss'

// * page
/**
 * Affirmations page component
 * @component
 */
const Affirmations = () => {
  // ? hooks
  const dispatch = useDispatch()
  const {
    showReducer: { showPacksOrTopics },
    userReducer: { user },
    packsReducer,
    topicsReducer
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [show, setShow] = useState(showPacksOrTopics)

  useEffect(async () => {
    console.log(packsReducer)
    dispatch(listPacksAction(user.id))
  }, [])

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
              <button className={show === CreatePacksTags.packs ? styles.AffirmationsBtnSelected : undefined} onClick={() => handleShow(CreatePacksTags.packs)}><span>{t('dashboard.Affirmations.packs')}</span></button>
              <button className={show === CreatePacksTags.topics ? styles.AffirmationsBtnSelected : undefined} onClick={() => handleShow(CreatePacksTags.topics)}><span>{t('dashboard.Affirmations.topics')}</span></button>
            </div>
            <Share />
          </div>
        </div>
          <div>
            { show === CreatePacksTags.packs
              ? <Fragment>
                  {packsReducer.loading ? <Loading /> : <Packs data={packsReducer.packs}/>}
                </Fragment>
              : <Topics data={topicsReducer.topics} />
            }
          </div>
      </div>
    </div>
  )
}

export default Affirmations
