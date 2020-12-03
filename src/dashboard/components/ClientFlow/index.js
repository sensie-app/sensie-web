// react
import React from 'react'
// components
import ArrowChart from '../ArrowChart'
// constants
import { ArrowChartTypes } from '../../constants/charts'
// styles
import styles from './styles.module.scss'

const { UP, DOWN, USER } = ArrowChartTypes

const ClientFlow = () => {
  return (
    <section className={styles.ClientFlowContainer}>
      <div className={styles.ClientFlowBodyContainer}>
        {/* header */}
        <div className={styles.ClientFlowHeaderContainer}>
          <div className={styles.ClientFlowHeaderTitleContainer}>
            <h3>Client Flow Overview</h3>
          </div>
          <div className={styles.ClientFlowHeaderChartsS1Container}>
            <ArrowChart title="Engagement" value={30000} icon={UP} />
            <ArrowChart title="Sensies" value={10000000} valueType="number" icon={DOWN} />
            <ArrowChart title="Flow" value={80} valueType="%" icon={USER} />
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
            <div>DonutChart</div>
            <div>DonutChart</div>
            <div>DonutChart</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientFlow
