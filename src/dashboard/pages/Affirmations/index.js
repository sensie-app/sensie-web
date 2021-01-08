// react
import React, { useState, useEffect, Fragment } from 'react'
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
import CreatePack from '../../components/CreatePack'
// constants
import { CreatePacksTags } from '../../constants/globals'
// utils
import { gqlquery } from '../../utils/queries'
// graphql
import { listTopicsWiyhAffirmationsIdsQuery, listPacksWiyhAffirmationsIdsByIdQuery } from '../../graphql/queries'
import { createPackMutation } from '../../graphql/mutations'
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
  const { showReducer: { showPacksOrTopics }, userReducer: { user } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [show, setShow] = useState(showPacksOrTopics)
  const [topics, setTopics] = useState([])
  const [packs, setPacks] = useState([])
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(async () => {
    const dbTopics = await gqlquery(listTopicsWiyhAffirmationsIdsQuery())
    const dbPacks = await gqlquery(listPacksWiyhAffirmationsIdsByIdQuery(user.id))
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

  /**
   * handleSavePack
   * @param {string} name
   * @param {string} description
   * @param {string} imgId
   * @returns {string} new pack id
   */
  const handleSavePack = async (name, description, imgId) => {
    const newPack = await gqlquery(createPackMutation(name, description, imgId))
    return !newPack.loading && newPack.value !== null ? newPack.value.data.createPack.id : null
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
              { show === CreatePacksTags.packs
                ? <Fragment>
                    <Packs data={!waitQuery && packs}/>
                    <CreatePack onSave={handleSavePack} />
                  </Fragment>
                : <Topics data={!waitQuery && topics} />
              }
            </div>
        }
      </div>
    </div>
  )
}

export default Affirmations
