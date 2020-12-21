// react
import React from 'react'
import { Link } from 'react-router-dom'
// material-ui
import Grid from '@material-ui/core/Grid'
// components
import ImageAvatar from '../ImageAvatar'
import BarChart from '../BarChart'
import Icon from '../Icon'
import Pagination from '../Pagination'
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
        <Pagination count={10} onClickValue={page => console.log(page)} />
      </div>
    </section>
  )
}

export default ClientSnapshot
