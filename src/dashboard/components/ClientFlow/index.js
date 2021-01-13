// react
import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// components
import IconChart from '../IconChart'
import PieChart from '../PieChart'
import LineChart from '../LineChart'
import Title from '../Title'
// constants
import { IconChartTypes } from '../../constants/charts'
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { UP, USER, ACTIVITY } = IconChartTypes
const { actionColor1 } = COLORS

// * component
/**
 * ClientFlow component
 * @component
 * @param {number} client
 * @param {number} sensies
 */
const ClientFlow = ({ client, sensies }) => {
  // ? hooks
  const [t] = useTranslation('global')

  return (
    <section className={styles.ClientFlowContainer}>
      <div className={styles.ClientFlowBodyContainer}>
        {/* header */}
        <div className={styles.ClientFlowHeaderContainer}>
          <div className={styles.ClientFlowHeaderTitleContainer}>
            <Title text={t('dashboard.ClientFlowOverview.title')} />
          </div>
          <div className={styles.ClientFlowHeaderChartsS1Container}>
            <IconChart title={t('dashboard.IconChart.clients')} value={client} icon={USER} forcedColor={actionColor1} />
            <IconChart title={t('dashboard.IconChart.sensies')} value={sensies} valueType="number" icon={UP} />
            <IconChart title={t('dashboard.IconChart.flow')} value={80} valueType="%" icon={ACTIVITY} />
          </div>
        </div>
        <div className={styles.ClientFlowBodyChartContainer}>
          {/* big chart */}
          <div className={styles.ClientFlowChartS2Container}>
            <LineChart />
          </div>
          {/* 3 charts */}
          <div className={styles.ClientFlowChartS3Container}>
            <PieChart title={t('dashboard.PieChart.awarness')} />
            <PieChart title={t('dashboard.PieChart.resilence')} />
            <PieChart title={t('dashboard.PieChart.trust')} />
          </div>
        </div>
      </div>
    </section>
  )
}

// prop-types
ClientFlow.propTypes = {
  /** client */
  client: PropTypes.number.isRequired,
  /** sensies */
  sensies: PropTypes.number.isRequired
}

export default ClientFlow
