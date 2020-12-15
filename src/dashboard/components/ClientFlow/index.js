// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import IconChart from '../IconChart'
import PieChart from '../PieChart'
import LineChart from '../LineChart'
import Title from '../Title'
// constants
import { IconChartTypes } from '../../constants/charts'
// styles
import styles from './styles.module.scss'

// const
const { UP, USER, ACTIVITY } = IconChartTypes

// * component
const ClientFlow = () => {
  // hooks
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
            <IconChart title={t('dashboard.IconChart.clients')} value={30000} icon={USER} />
            <IconChart title={t('dashboard.IconChart.sensies')} value={10000000} valueType="number" icon={UP} />
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
