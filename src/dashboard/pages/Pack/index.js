import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// containers
import Header from '../../containers/Header'
import CreateAffirmations from '../../containers/CreateAffirmations'
import NewAffirmation from '../../containers/NewAffirmation'
import AffirmationsByTopics from '../../containers/AffirmationsByTopics'
// components
import Loading from '../../components/Loading'
import Share from '../../components/Share'
// constants
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'
// utils
import { gqlquery, gqlquery2 } from '../../utils/queries'
import { handleArrTopics } from '../../utils/functions'
// graphql queries
import { getTopicByIdQuery } from '../../graphql/queries'
import {
  createAffirmationMutation,
  joinAffirmationWithPackMutation,
  joinAffirmationWithTopicMutation,
  removeJoinAffirmationPackMutation,
  deleteAffirmationMutation
} from '../../graphql/mutations'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { listPacksAction } from '../../../redux/actions/packs.actions'
// import { createAffirmationAction } from '../../../redux/actions/affirmations.actions'
// styles
import styles from './styles.module.scss'

import { Storage } from 'aws-amplify'

// const
const { noImg } = IMG
const { affirmations } = DASHBOARD_ROUTES

// * page
/**
 * Pack page component
 * @component
 */
const Pack = () => {
  // ? hooks
  const [t] = useTranslation('global')
  const dispatch = useDispatch()
  const {
    userReducer: { user },
    checkboxReducer,
    packsReducer
    // paginationReducer: { pagination }
  } = useSelector(state => state)
  const { id } = useParams()
  const [pack, setPack] = useState(null)
  const [newAff, setNewAff] = useState(false)
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(() => handlePackId(), [])
  useEffect(() => handlePackId(), [packsReducer])
  useEffect(() => dispatch(listPacksAction(user.id)), [user.loading, newAff])

  const [uri, setUri] = useState('')
  // const [iconUri, setIconUri] = useState('')

  const getImage = async function (k) {
    return (k ? await Storage.get(k) : noImg)
  }

  useEffect(() => {
    if (pack !== null) {
      getImage(pack.picture).then(d => setUri(d))
      // getImage(pack.icon).then(d => setIconUri(d))
    }
  }, [pack])

  // ? handle functions
  /**
   * handlePackId
   * @returns {array}
   * */
  const handlePackId = () => {
    const pk = packsReducer.packs.filter(pack => pack.id === id)[0]
    setPack(pk || [])
  }

  /**
   * handleCreateAffirmationMutation
   * @param {string} name
   * @param {string} description
   * @param {array.string} topicsId
   * @param {string} packId
   * @returns {string} new pack id
   */
  const handleCreateAffirmationMutation = async (name, description, topicsId, packId) => {
    // TODO: working in this query in redux action.
    // dispatch(createAffirmationAction(name, description, topicsId, packId, user.id))

    setWaitQuery(true)
    let successJoinPack
    const newAffirmationTopicJoin = []
    // save affirmation
    const newAffirmation = await gqlquery2(createAffirmationMutation(name, description, user.id))
    const successAffirmation = !newAffirmation.loading && newAffirmation.value !== null

    if (successAffirmation) {
      const newAffirmationId = newAffirmation.value.data.createAffirmation.id
      // join to pack
      const newAffirmationPackJoin = await gqlquery2(joinAffirmationWithPackMutation(newAffirmationId, packId))
      successJoinPack = !newAffirmationPackJoin.loading && newAffirmationPackJoin.value !== null

      // join to topics
      topicsId.map(async topicId => {
        const joinTopic = await gqlquery2(joinAffirmationWithTopicMutation(newAffirmationId, topicId))
        newAffirmationTopicJoin.push(!joinTopic.loading && joinTopic.value !== null)
      })

      toast.success(t('dashboard.Pack.createAffirmation'))
    } else {
      toast.error(t('dashboard.Pack.createAffirmationError'))
    }
    setNewAff(successAffirmation && successJoinPack ? !newAff : newAff)
    setWaitQuery(false)
    return successAffirmation && successJoinPack ? newAffirmation.value.data.createAffirmation.id : null
  }

  /**
   * handleAddToPack
   * @param {string} affirmationId
   * @param {string} packId
   */
  const handleAddToPack = async (affirmationId, packId) => {
    const joinPack = await gqlquery2(joinAffirmationWithPackMutation(affirmationId, packId))
    if (!joinPack.loading && joinPack.value !== null) {
      setNewAff(!joinPack.loading && joinPack.value !== null ? !newAff : newAff)
      toast.success(t('dashboard.Pack.addPack'))
    } else {
      toast.error(t('dashboard.Pack.addPackError'))
    }
  }

  /**
   * handleRemoveToPack
   * @param {string} affirmationId
   * @param {string} packId
   */
  // todo: revisar!
  const handleRemoveToPack = async (id) => {
    const remove = await gqlquery2(removeJoinAffirmationPackMutation(id))
    if (!remove.loading && remove.value !== null) {
      // toast.success(t('dashboard.Pack.addPack'))
      setNewAff(!remove.loading && remove.value !== null ? !newAff : newAff)
      toast.success(t('dashboard.Pack.removePack'))
    } else {
      toast.error(t('dashboard.Pack.removePackError'))
    }
    return !remove.loading && remove.value !== null
  }

  /**
   * handleDeleteAffirmation
   * @param {string} affirmationId
   */
  const handleDeleteAffirmation = async affirmationId => {
    const deleteAffirmation = await gqlquery2(deleteAffirmationMutation(affirmationId))
    if (!deleteAffirmation.loading && deleteAffirmation.value !== null) {
      setNewAff(!deleteAffirmation.loading && deleteAffirmation.value !== null ? !newAff : newAff)
      toast.success(t('dashboard.Pack.deleteAffirmation'))
    } else {
      toast.error(t('dashboard.Pack.deleteAffirmationError'))
    }
  }

  /**
   * handleCountAffirmations
   * @returns {number}
   */
  const handleCountAffirmations = () => pack.affirmations ? pack.affirmations.items.length : 0

  /**
   * handleAffirmationsByTopicsQuery
   * @param {strinf} topicId
   * @param {string} userId
   */
  const handleAffirmationsByTopicsQuery = async (topicId) => await gqlquery(getTopicByIdQuery(topicId))

  // ? render functions
  /**
   * renderDbAffirmations
   * @returns {undefined} NewAffirmation container
   */
  const renderDbAffirmations = () => {
    return pack.affirmations
      ? pack.affirmations.items.map(item => {
          if (item !== null) {
            const { name, topics } = item.affirmation
            return <NewAffirmation
              key={item.affirmation.id}
              joinId={item.id}
              checkAll={checkboxReducer.all.affirmations}
              packId={id}
              data={item.affirmation}
              title={name}
              selectedTopics={handleArrTopics(topics.items)}
              withRemoveBtn={true}
              withAddBtn={false}
              onAddToPack={handleAddToPack}
              onRemovePack={handleRemoveToPack}
              onDelete={handleDeleteAffirmation}
            />
          } else {
            return ''
          }
        })
      : <Loading />
  }

  return (
    <Fragment>
      <Header withBack={true} withPeople={false} withDate={false} backTo={affirmations} />
      <div className={styles.PackContainer}>
        {/* header */}
        <div className={styles.PackHeaderContainer}>
          <div className={styles.PackHeaderImgContainer}>
            <div className={styles.PackHeaderImg} style={{ backgroundImage: `url(${uri})` }} />
            <div className={styles.PackHeaderTextContainer}>
              {pack !== null && <span>{pack.name}</span>}
              {pack !== null && pack.author && <span style={{ fontSize: '14px' }}>By {pack.author}</span>}
              <div>
                <span>{pack !== null && handleCountAffirmations()} {t('dashboard.Pack.affirmations')}</span>
              </div>
            </div>
          </div>
          <div className={styles.PackHeaderShareContainer}>
            <Share pack={pack}/>
          </div>
        </div>
        {/* body */}
        <div className={styles.PackBodyContainer}>
          <CreateAffirmations loading={waitQuery} initShowForm={false} withAffirmationsByTopics={false} defaultPack={id} onSave={handleCreateAffirmationMutation}/>
          {pack !== null && renderDbAffirmations()}
          <AffirmationsByTopics onClick={handleAffirmationsByTopicsQuery} packId={id} onAddToPack={handleAddToPack}/>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  )
}

export default Pack
