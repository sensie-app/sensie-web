// react
import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// containers
import Header from '../../containers/Header'
import NewAffirmation from '../../containers/NewAffirmation'
// components
// import Share from '../../components/Share'
import Loading from '../../components/Loading'
import SvgIcon from '../../components/SvgIcon'
// constants
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'
import { SIZE } from '../../constants/theme'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { deleteAffirmationAction } from '../../../redux/actions/affirmations.actions'
import { getAllTopicsAction } from '../../../redux/actions/topics.action'
import { getUrl } from 'aws-amplify/storage'

// utils
import { /* gqlquery, */ gqlquery2 } from '../../utils/queries'
// graphql queries
import { getTopicByIdQuery } from '../../graphql/queries'
import {
  joinAffirmationWithPackMutation,
  removeJoinAffirmationPackMutation
} from '../../graphql/mutations'
// styles
import styles from './styles.module.scss'
// const
const {
  noImg
} = IMG
const { intentions } = DASHBOARD_ROUTES

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
  const [newAff, setNewAff] = useState(false)
  const [checkedAffirmations, setCheckedAffirmations] = useState([])

  useEffect(() => {
    if (!topicsReducer.loading) {
      handleTopicId()
    }
  }, [topicsReducer])

  useEffect(() => {
    if (!user.loading && user?.data?.id) {
      dispatch(getAllTopicsAction(user?.data?.userTopicId))
    }
  }, [user.loading, newAff])

  const [uri, setUri] = useState('')
  const [iconUri, setIconUri] = useState('')

  const getImage = async (key) => {
    if (!key) return noImg
    try {
      const result = await getUrl({
        path: `public/${key}`, // ajusta si usas "private" o "protected"
        options: {
          // validación opcional, más segura:
          validateObjectExistence: true
        }
      })
      return typeof result.url.href === 'string' ? result.url.href : noImg
    } catch (err) {
      console.error('Error getting image URL from S3:', err)
      return noImg
    }
  }
  useEffect(() => {
    if (topic !== null) {
      getImage(topic.picture).then(d => setUri(d))
      getImage(topic.icon).then(d => setIconUri(d))
    }
  }, [topic])

  // ? handle functions
  /**
   * handlePackId
   * @returns {array}
   * */
  const handleTopicId = async () => {
    // const r = await gqlquery2(getTopicByIdQuery(id))
    const r = await gqlquery2(getTopicByIdQuery, { id })
    const tp = r.value.data.getTopic

    // topicsReducer.topics.filter(topic => topic.id === id)[0] || {}
    setTopic(tp || [])
  }

  /**
   * handleCreateAffirmationMutation
   * @param {string} name
   * @param {string} description
   * @param {array.string} topicsId
   * @param {string} packId
   * @returns {string} new pack id
   */

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
   * handleCountAffirmations
   * @returns {number}
   */
  const handleCountAffirmations = () => topic.affirmations ? topic.affirmations.items.length : 0

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
    setCheckedAffirmations(newArr)
  }

  /**
   * handleDeleteAffirmation
   */
  const handleDeleteAffirmation = async affirmation => {
    const deleted = await dispatch(deleteAffirmationAction(affirmation))

    if (deleted) {
      setNewAff(!newAff)
      toast.success(t('dashboard.Intention.deleteIntention'))
    } else {
      toast.error(t('dashboard.Intention.deleteIntentionError'))
    }
  }

  // ? render functions
  /**
   * renderDbAffirmations
   * @returns {undefined} NewAffirmation container
   */
  const renderDbAffirmations = () => {
    if (topic.affirmations && Array.isArray(topic.affirmations.items)) {
      const items = topic?.affirmations?.items?.sort((a, b) => b?.affirmation?.createdAt < a?.affirmation?.createdAt ? -1 : 1)

      return items.map(item => {
        const { id, name, topics } = item.affirmation
        return <NewAffirmation
          data={item.affirmation}
          checkAll={checkboxReducer.all.affirmations}
          isChecked={value => handleIsChecked(value, id)}
          key={id}
          title={name}
          selectedTopics={handleArrTopics(topics.items)}
          withRemoveBtn={false}
          withAddBtn={false}
          withDeleteBtn={true}
          onAddToPack={handleAddToPack}
          onRemovePack={handleRemoveToPack}
          onDelete={handleDeleteAffirmation}
        />
      })
    } else if (typeof topic.affirmations === 'undefined') {
      return null
    } else {
      return <Loading />
    }
  }

  return (
    <Fragment>
      <Header withBack={true} withPeople={false} withDate={false} backTo={intentions}/>
      {topic !== null
        ? <div className={styles.TopicContainer}>
            {/* header */}
            <div className={styles.TopicHeaderContainer}>
              <div className={styles.TopicHeaderImgContainer}>
                <div className={styles.TopicHeaderImg} style={{ backgroundImage: `url(${uri})` }} />
                <div className={styles.TopicHeaderTextContainer}>
                  <div className={styles.TopicHeaderTextTitle}>
                    <SvgIcon icon={typeof iconUri === 'string' ? iconUri : noImg} size={SIZE.xxl} />
                    {topic !== null && <span>{topic.name}</span>}
                  </div>
                  {/* <div className={styles.TopicHeaderTextDescription}>
                    <h6>{topic.description}</h6>
                  </div> */}
                  <div className={styles.TopicHeaderTextAffirmations}>
                    <span>{topic !== null && handleCountAffirmations()} {t('dashboard.Topic.intentions')}</span>
                  </div>
                </div>
              </div>
              {/* <div className={styles.TopicHeaderShareContainer}>
                <Share />
              </div> */}
            </div>
            {/* body */}
            <div className={styles.TopicBodyContainer}>
                {topic !== null && renderDbAffirmations()}
            </div>
          </div>
        : <Loading />}
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
