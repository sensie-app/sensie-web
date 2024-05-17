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
import ItemCheckbox from '../../components/ItemCheckbox'
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
  removeJoinAffirmationPackMutation
} from '../../graphql/mutations'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { listPacksAction, updatePackCommunityAction } from '../../../redux/actions/packs.actions'
import { getAllTopicsAction } from '../../../redux/actions/topics.action'

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
  // ? hook
  const dispatch = useDispatch()
  const {
    userReducer: { user },
    checkboxReducer,
    packsReducer
    // paginationReducer: { pagination }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const { id } = useParams()
  const [pack, setPack] = useState(null)
  const [newAff, setNewAff] = useState(false)
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(() => {
    handlePackId()
  }, [])
  useEffect(() => handlePackId(), [packsReducer])
  useEffect(() => dispatch(listPacksAction(user.id)), [user.loading, newAff])

  useEffect(async () => {
    dispatch(getAllTopicsAction(user.data.userTopicId))
  }, [user.loading, newAff])

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

      toast.success(t('dashboard.Pack.createIntention'))
    } else {
      toast.error(t('dashboard.Pack.createIntentionErrorWithPrivate'))
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
   * handleCountAffirmations
   * @returns {number}
   */
  const handleCountAffirmations = () => pack.affirmationCount ? pack.affirmationCount : 0

  /**
   * handleCountAffirmations
   * @returns {number}
   */
  const handleCountClients = () => pack.clientsCount ? pack.clientsCount : 0
  /**
   * handleAffirmationsByTopicsQuery
   * @param {strinf} topicId
   * @param {string} userId
   */
  const handleAffirmationsByTopicsQuery = async (topicId) => await gqlquery(getTopicByIdQuery(topicId))

  const handleCommunityPackChange = e => {
    dispatch(updatePackCommunityAction(pack.id, e))
  }

  // ? render functions
  /**
   * renderDbAffirmations
   * @returns {undefined} NewAffirmation container
   */
  const renderDbAffirmations = () => {
    const affItems = pack?.affirmations?.items || false
    if (affItems) {
      return pack.affirmations
        ? pack.affirmations.items.sort((a, b) => b.createdAt > a.createdAt ? -1 : 1).map(item => {
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
              withDeleteBtn={false}
              onAddToPack={handleAddToPack}
              onRemovePack={handleRemoveToPack}
            />
        })
        : <Loading />
    } else {
      return null
    }
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
                <span>{pack !== null && handleCountAffirmations()} {t('dashboard.Pack.intentions')}</span>
                <span>{pack !== null && handleCountClients()} {t('dashboard.Pack.clients')}</span>
              </div>
            </div>
          </div>
          <div className={styles.PackHeaderShareContainer}>
            {pack &&
              <ItemCheckbox
                checkStyle={{ padding: 0 }}
                defaultValue={pack.isCommunityPack !== null ? pack.isCommunityPack : false}
                onClick={value => handleCommunityPackChange(!value)}>
                <span className={styles.ShareWithItemCheckboxTitle}>
                  {t('dashboard.ShareWith.publicAvailable')}
                </span>
              </ItemCheckbox>
            }
            <Share pack={pack} />
          </div>
        </div>
        {/* body */}
        <div className={styles.PackBodyContainer}>
          <CreateAffirmations loading={waitQuery} initShowForm={false} withAffirmationsByTopics={false} defaultPack={id} onSave={handleCreateAffirmationMutation} />
          {pack !== null && renderDbAffirmations()}
          <AffirmationsByTopics onClick={handleAffirmationsByTopicsQuery} packId={id} onAddToPack={handleAddToPack} />
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
