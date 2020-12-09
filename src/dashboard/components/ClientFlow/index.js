// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import ArrowChart from '../ArrowChart'
import PieChart from '../PieChart'
import LineChart from '../LineChart'
// import LineChart from '../LineChart'
// constants
import { ArrowChartTypes } from '../../constants/charts'
// styles
import styles from './styles.module.scss'

// const
const { UP, USER, ACTIVITY } = ArrowChartTypes

const ClientFlow = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <section className={styles.ClientFlowContainer}>
      <div className={styles.ClientFlowBodyContainer}>
        {/* header */}
        <div className={styles.ClientFlowHeaderContainer}>
          <div className={styles.ClientFlowHeaderTitleContainer}>
            <h3>{t('dashboard.ClientFlowOverview.title')}</h3>
          </div>
          <div className={styles.ClientFlowHeaderChartsS1Container}>
            <ArrowChart title={t('dashboard.ArrowChart.clients')} value={30000} icon={USER} />
            <ArrowChart title={t('dashboard.ArrowChart.sensies')} value={10000000} valueType="number" icon={UP} />
            <ArrowChart title={t('dashboard.ArrowChart.flow')} value={80} valueType="%" icon={ACTIVITY} />
          </div>
        </div>
        <div className={styles.ClientFlowBodyChartContainer}>
          {/* big chart */}
          <div className={styles.ClientFlowChartS2Container}>
            <LineChart />
          </div>
          {/* 3 charts */}
          <div className={styles.ClientFlowChartS3Container}>
            <PieChart title="Hola Mundo" />
            <PieChart title="Hola Mundo" />
            <PieChart title="Hola Mundo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientFlow
