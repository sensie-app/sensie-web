// react
import React from 'react'
// import { Link } from 'react-router-dom'
// material-ui
import Grid from '@mui/material/Grid'
// redux
import { /* useDispatch, */ useSelector } from 'react-redux'
// import { setPaginationClientSnapshotAction } from '../../../redux/actions/pagination.actions'
// components
// import ImageAvatar from '../../components/ImageAvatar'
// import BarChart from '../../components/BarChart'
// import Icon from '../../components/Icon'
// import Pagination from '../../components/Pagination'
// constants
// import { COLORS } from '../../constants/theme'
// import DASHBOARD_ROUTES from '../../constants/routes'
import User from '../../containers/User'
// utils
// import { handleDefaultPictureUser } from '../../utils/functions'
// styles
import styles from './styles.module.scss'
import { handleAwareness, handleFlow } from '../../utils/functions'

// const
// const { fontColor1 } = COLORS
// const { user } = DASHBOARD_ROUTES

// * component
/**
 * ClientSnapshot component
 * @component
 */
const ClientSnapshot = () => {
  // ? hooks
  // const dispatch = useDispatch()
  const {
    usersReducer,
    affirmationsReducer
    // paginationReducer: { pagination: { pagClientSnapshot } }
  } = useSelector(state => state)

  // ? handle functions
  /**
   * handle paginaion change
   * @param {*} event
   * @param {number} value
   * @returns {undefined} redux action
   */
  // const handlePaginationChange = (event, value) => dispatch(setPaginationClientSnapshotAction(value))

  const flow = sensies => handleFlow(sensies)
  const awareness = user => handleAwareness(user.selfAwarenessScores.items)

  // ? render functions
  /**
   * render client snapshot with bar chart
   * @return  {undefined} component (html)
   */
  const renderClientSnapshotBarChart = () => {
    const s = [].concat(...affirmationsReducer.affirmations.map(aff => aff.sensies.items))
    const list = !usersReducer.loading && usersReducer.users.map((client, idx) => {
      const { id } = client
      const sensies = s.filter(s => s.userId === id)
      return {
        id,
        idx,
        client: client,
        totalSensies: sensies.length,
        flow: flow(sensies),
        awareness: awareness(client)
      }
    })
    return list.sort((a, b) => {
      if (a.totalSensies > b.totalSensies) {
        return -1
      } else if (a.totalSensies < b.totalSensies) {
        return 1
      } else {
        if (a.flow > b.flow) {
          return -1
        } else if (a.flow < b.flow) {
          return 1
        } else {
          return 0
        }
      }
    }).map(c => {
      return (
        <Grid key={c.id} item xs={12} sm={12} md={12} lg={6} xl={4}>
          <User user={c.client} flow={c.flow} awareness={c.awareness} totalSensies={c.totalSensies} key={c.idx} />
          {/* <div className={styles.ClientSnapshotBarChartContainer}>
          <div className={styles.ClientSnapshotBarChartHeader}>
            <Link to={user + '/' + id}>
              <div>
                <ImageAvatar url={picture || handleDefaultPictureUser(gender)} alt={lastName} size="medium" />
                <h4>{firstName} {lastName}</h4>
              </div>
            </Link>
            <Link to={user + '/' + id}>
                <Icon name="expand-outline" color={fontColor1} size="md" animation="pulse" />
            </Link>
          </div>
          {/* <div className={styles.ClientSnapshotChartContainer}>
            <BarChart />
          </div>
        </div> */}
        </Grid >
      )
    })
  }

  return (
    <section className={styles.ClientSnapshotContainer}>
      <Grid container spacing={1}>
        {renderClientSnapshotBarChart()}
      </Grid>
      {/* <div className={styles.ClientSnapshotFooter}>
        {usersReducer.users.length !== 0 && <Pagination count={10} onChange={() => handlePaginationChange()} defaultPage={pagClientSnapshot} />}
      </div> */}
    </section>
  )
}

export default ClientSnapshot
