// react
import React from 'react'
// import { Link } from 'react-router-dom'
// material-ui
import Grid from '@material-ui/core/Grid'
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
    usersReducer
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

  // ? render functions
  /**
   * render client snapshot with bar chart
   * @return  {undefined} component (html)
   */
  const renderClientSnapshotBarChart = () => {
    return !usersReducer.loading && usersReducer.users.map((client, idx) => {
      const { id } = client
      return (
        <Grid key={id} item xs={12} sm={6} md={6} xl={6}>
          <User user={client} key={idx} />
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
        </Grid>
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
