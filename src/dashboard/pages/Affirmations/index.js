// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setShowPacksOrTopicsAction } from '../../../redux/actions/show.actions'
// components
import Title from '../../components/Title'
import Share from '../../components/Share'
import Packs from '../../components/Packs'
import Topics from '../../components/Topics'
import CircularProgress from '../../components/CircularProgress'
// constants
import { CreatePacksTags } from '../../constants/globals'
// utils
import { gqlquery } from '../../utils/queries'
// graphql
import { listTopicsWiyhAffirmationsIdsQuery, listPacksWiyhAffirmationsIdsQuery } from '../../graphql/queries'
// styles
import styles from './styles.module.scss'

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
  const [topics, setTopics] = useState([])
  const [packs, setPacks] = useState([])
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(async () => {
    const dbTopics = await gqlquery(listTopicsWiyhAffirmationsIdsQuery())
    const dbPacks = await gqlquery(listPacksWiyhAffirmationsIdsQuery())
    if (!dbTopics.loading && dbTopics.value !== null && !dbPacks.loading && dbPacks.value !== null) {
      setTopics(dbTopics.value.data.listTopics.items)
      setPacks(dbPacks.value.data.listPacks.items)
      setWaitQuery(false)
    } else {
      setWaitQuery(true)
    }
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
              <button className={show === CreatePacksTags.packs && styles.AffirmationsBtnSelected} onClick={() => handleShow(CreatePacksTags.packs)}><span>{t('dashboard.Affirmations.packs')}</span></button>
              <button className={show === CreatePacksTags.topics && styles.AffirmationsBtnSelected} onClick={() => handleShow(CreatePacksTags.topics)}><span>{t('dashboard.Affirmations.topics')}</span></button>
            </div>
            <Share />
          </div>
        </div>
        {waitQuery
          ? <div className={styles.AffirmationsLoadingContainer}>
              <CircularProgress />
            </div>
          : <div>
              { show === CreatePacksTags.packs ? <Packs data={!waitQuery && packs}/> : <Topics data={!waitQuery && topics} /> }
            </div>
        }
      </div>
    </div>
  )
}

export default Affirmations
