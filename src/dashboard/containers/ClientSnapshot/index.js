// react
import React from 'react'
import { Link } from 'react-router-dom'
// material-ui
import Grid from '@material-ui/core/Grid'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setPaginationClientSnapshotAction } from '../../../redux/actions/pagination.actions'
// components
import ImageAvatar from '../../components/ImageAvatar'
import BarChart from '../../components/BarChart'
import Icon from '../../components/Icon'
import Pagination from '../../components/Pagination'
// constants
import { COLORS } from '../../constants/theme'
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'
// test
import { data } from './data'

// const
const { fontColor1 } = COLORS
const { user } = DASHBOARD_ROUTES

// * component
/**
 * ClientSnapshot component
 * @component
 */
const ClientSnapshot = () => {
  // hooks
  const dispatch = useDispatch()
  const { paginationReducer: { pagination: { pagClientSnapshot } } } = useSelector(state => state)

  // ? handle functions
  /**
   * handle paginaion change
   * @param {*} event
   * @param {number} value
   * @returns {undefined} redux action
   */
  const handlePaginationChange = (event, value) => dispatch(setPaginationClientSnapshotAction(value))

  // ? render functions
  /**
   * render client snapshot with bar chart
   * @return  {undefined} component (html)
   */
  const renderClientSnapshotBarChart = () => {
    return data.map((client, index) => {
      return (
        <Grid key={index} item xs={12} sm={6} md={3} xl={3}>
          <div className={styles.ClientSnapshotBarChartContainer}>
            {/* header */}
            <div className={styles.ClientSnapshotBarChartHeader}>
              <Link to={user}>
                <div>
                  <ImageAvatar url={client.url} alt={client.name} size="medium" />
                  <h4>{client.name}</h4>
                </div>
              </Link>
              <Link to={user}>
                  <Icon name="expand-outline" color={fontColor1} size="md" animation="pulse" />
              </Link>
            </div>
            {/* body */}
            <div className={styles.ClientSnapshotChartContainer}>
              <BarChart />
            </div>
          </div>
        </Grid>
      )
    })
  }

  return (
    <section className={styles.ClientSnapshotContainer}>
      <Grid container spacing={1}>
        {renderClientSnapshotBarChart()}
      </Grid>
      <div className={styles.ClientSnapshotFooter}>
        <Pagination count={10} onChange={() => handlePaginationChange()} defaultPage={pagClientSnapshot} />
      </div>
    </section>
  )
}

export default ClientSnapshot
