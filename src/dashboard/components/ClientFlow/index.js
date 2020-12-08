// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import ArrowChart from '../ArrowChart'
import PieChart from '..//PieChart'
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
            <h3>{t('dashboard.ClientFlowOverviewComponent.title')}</h3>
          </div>
          <div className={styles.ClientFlowHeaderChartsS1Container}>
            <ArrowChart title={t('dashboard.ArrowChartComponent.clients')} value={30000} icon={USER} />
            <ArrowChart title={t('dashboard.ArrowChartComponent.sensies')} value={10000000} valueType="number" icon={UP} />
            <ArrowChart title={t('dashboard.ArrowChartComponent.flow')} value={80} valueType="%" icon={ACTIVITY} />
          </div>
        </div>
        <div className={styles.ClientFlowBodyChartContainer}>
          {/* big chart */}
          <div className={styles.ClientFlowChartS2Container}>
            {/* <LineChart /> */}
            <p><a href="https://www.amcharts.com/demos/date-based-line-chart/">Ejemplo1</a></p>
            <p><a href="https://www.amcharts.com/demos/smoothed-line-chart/">Ejemplo2</a></p>

          </div>
          {/* 3 charts */}
          <div className={styles.ClientFlowChartS3Container}>
            <div><PieChart /></div>
            <div><PieChart /></div>
            <div><PieChart /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientFlow
