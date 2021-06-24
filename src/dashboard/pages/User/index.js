// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect, useParams } from 'react-router-dom'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
import UserStatistics from '../../containers/UserStatistics'
// components
import { HelmetSEO } from '../../components/Globals'
// import Symbol from '../../components/Symbol'
import Loading from '../../components/Loading'
import TrackAffirmations from '../../components/TrackAffirmations'
// const
import DASHBOARD_ROUTES from '../../constants/routes'
// redux
import { useSelector, useDispatch } from 'react-redux'
// queries
import { listUsersWithSensiesByUserId } from '../../graphql/queries'
import { listAffirmationsByCoachId } from '../../../redux/actions/affirmations.actions'
// utils
import { gqlquery } from '../../utils/queries'
// styles
import styles from './styles.module.scss'
import { getAllTopicsAction } from '../../../redux/actions/topics.action'
import { listPacksAction } from '../../../redux/actions/packs.actions'

// const
const { home } = DASHBOARD_ROUTES

// * page
/**
 * User page component
 * @component
 */
const User = () => {
  // ? hooks
  const { id } = useParams()
  console.log('User page: ', id)
  const {
    filtersReducer: { globalDateFilter },
    affirmationsReducer,
    userReducer: { user }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [client, setClient] = useState({})
  const [sensies, setSensies] = useState([])
  const [redirect, setRedirect] = useState(false)
  // const [affirmations, setAffirmations] = useState([])
  const [waitQuery, setWaitQuery] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => client === undefined ? setRedirect(true) : setRedirect(false), [globalDateFilter])

  useEffect(() => {
    dispatch(getAllTopicsAction(user.data.userTopicId))
    console.log(user)
    console.log('coach, ', user)
    dispatch(listAffirmationsByCoachId(user.id, globalDateFilter.value, 10000, id))
    dispatch(listPacksAction(user.id))
  }, [user.id, globalDateFilter])

  useEffect(async () => {
    await handleUserQuery()
    // await handleAffirmationsQuery()
  }, [globalDateFilter, affirmationsReducer.affirmations])

  // ? handle functions
  /**
   * handleUserQuery
   */
  const handleUserQuery = async () => {
    const dbUser = await gqlquery(listUsersWithSensiesByUserId(id, globalDateFilter.value))
    if (!dbUser.loading && dbUser.value !== null) {
      const _client = dbUser.value.data.getUser
      setClient(_client)
      const s = [].concat(...affirmationsReducer.affirmations.map(aff => aff.sensies.items))
      const _s = s.filter(s => s.userId === _client.id)
      console.log('setting sensie')
      setSensies(_s)
      setWaitQuery(false)
      console.log(_client)
    } else { setWaitQuery(true) }
  }

  /**
   * handleUsersQuery
   */
  // const handleAffirmationsQuery = async () => {
  //   if (user && globalDateFilter) {
  //     const dbAffirmations = await gqlquery(listAffirmationsByUserIdAndTopicId(user.id, 10))
  //     if (!dbAffirmations.loading && dbAffirmations.value !== null) {
  //       setAffirmations(dbAffirmations.value.data.listAffirmations.items)
  //       setWaitQuery(false)
  //     } else { setWaitQuery(true) }
  //   }
  // }

  /**
   * handleSensies
   * @return {boolean}
   */
  // const handleSensies = () => sensies && (sensies.length > -1)

  return (
    <section className={styles.UserContainer}>
      {redirect && <Redirect to={home} />}
      {/* seo */}
      <HelmetSEO title={t('seo.User.title')} subtitle={t('seo.User.subtitle')} />
      {/* header */}
      <Header withBack={true} withPeople={false} />
      {/* body */}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={styles.UserG1Container}>
            {waitQuery ? <Loading /> : <UserStatistics data={client} sensies={sensies} />}
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={styles.UserG2Container}>
            {!waitQuery && handleSensies && <Symbol level={0} />}
          </div>
        </Grid> */}
        <Grid item xs={12}>
          {waitQuery
            ? <Loading />
            : <TrackAffirmations
                // data={}
                theme={2}
                title={t('dashboard.User.trackAffirmations')}
                chipsUp={true}
                multiUser={false}
                user={client}
              />
          }
        </Grid>
      </Grid>
    </section>
  )
}

export default User
