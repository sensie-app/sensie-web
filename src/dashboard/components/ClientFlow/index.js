// react
import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// components
import IconChart from '../IconChart'
// import PieChart from '../PieChart'
import LineChart from '../LineChart'
import Title from '../Title'
// constants
import { IconChartTypes } from '../../constants/charts'
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
import { LineChartDataPropTypes } from '../../prop-types'

// const
const { UP, USER, ACTIVITY } = IconChartTypes
const { actionColor1 } = COLORS

// * component
/**
 * ClientFlow component
 * @component
 * @param {number} client
 * @param {number} sensies
 * @param {number} flow
 */
const ClientFlow = ({ graph, client, sensies, flow, awareness, resilience, trust }) => {
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
            <IconChart title={t('dashboard.IconChart.clients')} value={client.toString()} icon={USER} forcedColor={actionColor1} />
            <IconChart title={t('dashboard.IconChart.sensies')} value={sensies.toString()} valueType="number" icon={UP} />
            <IconChart title={t('dashboard.IconChart.flow')} value={flow.toFixed(0).toString()} valueType="%" icon={ACTIVITY} />
          </div>
        </div>
        <div className={styles.ClientFlowBodyChartContainer}>
          {/* big chart */}
          <div className={styles.ClientFlowChartS2Container}>
            <LineChart data={graph} />
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
  sensies: PropTypes.number.isRequired,
  /** flow */
  flow: PropTypes.number.isRequired,
  /** awareness */
  awareness: PropTypes.number.isRequired,
  /** resilience */
  resilience: PropTypes.number.isRequired,
  /** trust */
  trust: PropTypes.number.isRequired,

  graph: PropTypes.arrayOf(LineChartDataPropTypes)
}

export default ClientFlow
