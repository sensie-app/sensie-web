// react
import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// containers
import Header from '../../containers/Header'
import CreateAffirmations from '../../containers/CreateAffirmations'
import NewAffirmation from '../../containers/NewAffirmation'
// components
// import Share from '../../components/Share'
// import Loading from '../../components/Loading'
import SvgIcon from '../../components/SvgIcon'
// constants
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'
import TopicsConstants from '../../constants/topics'
import { SIZE } from '../../constants/theme'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { getAllTopicsAction } from '../../../redux/actions/topics.action'
// utils
import { gqlquery, gqlquery2 } from '../../utils/queries'
// graphql queries
import { getTopicByIdQuery } from '../../graphql/queries'
import {
  createAffirmationMutation,
  joinAffirmationWithTopicMutation,
  joinAffirmationWithPackMutation,
  removeJoinAffirmationPackMutation
} from '../../graphql/mutations'
// styles
import styles from './styles.module.scss'

import { Storage } from 'aws-amplify'

// const
const {
  noImg,
  // connectionMomentsImg,
  spiritImg,
  healthImg,
  financeImg,
  funImg,
  loveImg,
  familyImg,
  parentingImg,
  personalImg,
  performanceImg
} = IMG
const { affirmations } = DASHBOARD_ROUTES
const { spirit, health, family, finance, fun, parenting, perfomance, personal, love } = TopicsConstants

// * page
/**
 * Topic page component
 * @component
 */
const Topic = () => {
  // ? hooks
  const [t] = useTranslation('global')
  const { id } = useParams()
  const dispatch = useDispatch()
  const {
    userReducer: { user },
    topicsReducer,
    checkboxReducer
  } = useSelector(state => state)
  const [topic, setTopic] = useState(null)
  const [defaultTopic, setDefaultTopic] = useState({})
  const [newAff, setNewAff] = useState(false)
  const [waitQuery, setWaitQuery] = useState(true)
  const [checkedAffirmations, setCheckedAffirmations] = useState([])
  const [showOptions, setShowOptions] = useState(false)

  console.log(waitQuery)
  // useEffect(async () => await handleTopicQuery(), [])
  // useEffect(() => handleTopicId(), [])
  // useEffect(async () => await handleTopicQuery(), [newAff])

  useEffect(() => handleTopicId(), [])
  useEffect(() => handleTopicId(), [topicsReducer])
  useEffect(() => dispatch(getAllTopicsAction()), [newAff])

  const [uri, setUri] = useState('')
  // const [iconUri, setIconUri] = useState('')

  const getImage = async function (k) {
    return (k ? await Storage.get(k) : noImg)
  }

  useEffect(() => {
    if (topic !== null) {
      getImage(topic.picture).then(d => setUri(d))
      // getImage(topic.icon).then(d => setIconUri(d))
    }
  }, [topic])

  // ? handle functions
  /**
   * handlePackId
   * @returns {array}
   * */
  const handleTopicId = () => {
    const tp = topicsReducer.topics.filter(topic => topic.id === id)[0]
    const defTopic = [{
      name: tp.name,
      description: tp.description,
      id: tp.id
    }]
    setDefaultTopic(defTopic)
    setTopic(tp || [])
  }

  /**
   * handleTopicQuery
   */
  const handleTopicQuery = async () => {
    const dbTopic = await gqlquery(getTopicByIdQuery(id))
    const { loading, value } = dbTopic
    if (!loading && value !== null) {
      setTopic(value.data.getTopic)
      const defTopic = [{
        name: value.data.getTopic.name,
        description: value.data.getTopic.description,
        id: value.data.getTopic.id
      }]
      setDefaultTopic(defTopic)
      setWaitQuery(false)
    } else {
      setWaitQuery(true)
    }
  }
  console.log('handleTopicQuery', handleTopicQuery)

  /**
   * handleCreateAffirmationMutation
   * @param {string} name
   * @param {string} description
   * @param {array.string} topicsId
   * @param {string} packId
   * @returns {string} new pack id
   */
  const handleCreateAffirmationMutation = async (name, description, topicsId, packId = null) => {
    setWaitQuery(true)
    const newAffirmationTopicJoin = []
    // save affirmation
    const newAffirmation = await gqlquery2(createAffirmationMutation(name, description, user.id))
    const successAffirmation = !newAffirmation.loading && newAffirmation.value !== null

    if (successAffirmation) {
      const newAffirmationId = newAffirmation.value.data.createAffirmation.id
      // join to topics
      topicsId.map(async topicId => {
        const joinTopic = await gqlquery2(joinAffirmationWithTopicMutation(newAffirmationId, topicId))
        newAffirmationTopicJoin.push(!joinTopic.loading && joinTopic.value !== null)
      })
      setNewAff(!newAff)
      toast.success(t('dashboard.Pack.createAffirmation'))
    } else {
      toast.error(t('dashboard.Pack.createAffirmationError'))
    }
    setWaitQuery(false)
    return successAffirmation ? newAffirmation.value.data.createAffirmation.id : null
  }

  /**
   * handleAddToPack
   * @param {string} affirmationId
   * @param {string} packId
   */
  const handleAddToPack = async (affirmationId, packId) => {
    const joinPack = await gqlquery2(joinAffirmationWithPackMutation(affirmationId, packId))
    setNewAff(!joinPack.loading && joinPack.value !== null ? !newAff : newAff)
    return !joinPack.loading && joinPack.value !== null
  }

  /**
   * handleAddManyToPack
   * @param {string} affirmationId
   * @param {string} packId
   */
  const handleAddManyToPack = (packId) => {
    if (checkedAffirmations.length > 0) {
      checkedAffirmations.map(async item => {
        const joinPack = await gqlquery2(joinAffirmationWithPackMutation(item, packId))
        return !joinPack.loading && joinPack.value !== null
      })
      setNewAff(!newAff)
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
  const handleRemoveToPack = async (id) => {
    const remove = await gqlquery2(removeJoinAffirmationPackMutation(id))
    setNewAff(!remove.loading && remove.value !== null ? !newAff : newAff)
    return !remove.loading && remove.value !== null
  }

  /**
   * handle img
   * @returns {string} img
   */
  const handleImg = () => {
    switch (id) {
      case spirit: return spiritImg
      case health: return healthImg
      case family: return familyImg
      case finance: return financeImg
      case fun: return funImg
      case parenting: return parentingImg
      case perfomance: return performanceImg
      case personal: return personalImg
      case love: return loveImg
      default: return noImg
    }
  }
  console.log(handleImg)

  /**
   * handleCountAffirmations
   * @returns {number}
   */
  const handleCountAffirmations = () => topic.affirmations.items.length

  /**
   * handleArrTopics
   * @returns {Array}
   */
  const handleArrTopics = topics => topics.map(item => item.topic)

  /**
   * handleIsChecked
   * @param {boolean} value
   * @param {string} affirmationId
   */
  const handleIsChecked = (value, affirmationId) => {
    const affirmations = checkedAffirmations
    let newArr = []
    if (value) {
      affirmations.push(affirmationId)
      newArr = affirmations
    } else {
      newArr = affirmations.filter(item => item !== affirmationId)
    }
    setShowOptions(newArr.length > 0)
    setCheckedAffirmations(newArr)
  }

  // ? render functions
  /**
   * renderDbAffirmations
   * @returns {undefined} NewAffirmation container
   */
  const renderDbAffirmations = () => {
    return topic.affirmations.items.map(item => {
      const { id, name, topics } = item.affirmation
      return <NewAffirmation
        checkAll={checkboxReducer.all.affirmations}
        isChecked={value => handleIsChecked(value, id)}
        key={id}
        title={name}
        selectedTopics={handleArrTopics(topics.items)}
        withRemoveBtn={false}
        withAddBtn={false}
        onAddToPack={handleAddToPack}
        onRemovePack={handleRemoveToPack}
      />
    })
  }

  return (
    <Fragment>
      <Header withBack={true} withPeople={false} withDate={false} backTo={affirmations} />
      <div className={styles.TopicContainer}>
        {/* header */}
        <div className={styles.TopicHeaderContainer}>
          <div className={styles.TopicHeaderImgContainer}>
            <div className={styles.TopicHeaderImg} style={{ backgroundImage: `url(${uri})` }} />
            <div className={styles.TopicHeaderTextContainer}>
              <div className={styles.TopicHeaderTextTitle}>
                <SvgIcon icon={id} size={SIZE.xxl} />
                {topic !== null && <span>{topic.name}</span>}
              </div>
              {/* <div className={styles.TopicHeaderTextDescription}>
                <h6>{topic.description}</h6>
              </div> */}
              <div className={styles.TopicHeaderTextAffirmations}>
                <span>{topic !== null && handleCountAffirmations()} {t('dashboard.Topic.affirmations')}</span>
              </div>
            </div>
          </div>
          {/* <div className={styles.TopicHeaderShareContainer}>
            <Share />
          </div> */}
        </div>
        {/* body */}
        <div className={styles.TopicBodyContainer}>
          <CreateAffirmations
            defaultTopic={defaultTopic}
            initShowForm={false}
            showOptions={showOptions}
            withAffirmationsByTopics={false}
            addToPack={true}
            onSave={handleCreateAffirmationMutation}
            onAddToPack={handleAddManyToPack}
          />
            {topic !== null && renderDbAffirmations()}
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

export default Topic
