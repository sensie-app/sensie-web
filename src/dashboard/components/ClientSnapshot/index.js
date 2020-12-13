// react
import React from 'react'
// material-ui
import Grid from '@material-ui/core/Grid'
// components
import ImageAvatar from '../ImageAvatar'
import BarChart from '../BarChart'
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// test
import { data } from './data'

// const
const { fontColor1 } = COLORS

console.log('data', data)

// * component
const ClientSnapshot = () => {
  // render functions
  const renderClientSnapshotBarChart = () => {
    return data.map((client, index) => {
      return (
        <Grid key={index} item xs={12} sm={6} md={3} xl={3}>
          <div className={styles.ClientSnapshotBarChartContainer}>
            {/* header */}
            <div className={styles.ClientSnapshotBarChartHeader}>
              <div>
                <ImageAvatar url={client.url} alt={client.name} size="medium" />
                <h4>{client.name}</h4>
              </div>
              <Icon name="expand-outline" color={fontColor1} size="md" />
            </div>
            {/* body */}
            <div>
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
    </section>
  )
}

export default ClientSnapshot
