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
          <div className={styles.ClientFlowHeaderTitle}>
            <h3>Client Flow Overview</h3>
          </div>
          <div className={styles.ClientFlowHeaderChartsS1Container}>
            <ArrowChart title="Engagement" value={30000} icon={UP} />
            <ArrowChart title="Sensies" value={10000000} valueType="number" icon={DOWN} />
            <ArrowChart title="Flow" value={80} valueType="%" icon={USER} />
          </div>
        </div>
        {/* big chart */}
        <div className={styles.ClientFlowChartS2Container}>
          <div>Line Chart</div>
          <p><a href="https://www.amcharts.com/demos/date-based-line-chart/">Ejemplo1</a></p>
          <p><a href="https://www.amcharts.com/demos/smoothed-line-chart/">Ejemplo2</a></p>

        </div>
        {/* 3 charts */}
        <div className={styles.ClientFlowChartS3Container}>
          <div>Chart1</div>
          <div>Chart2</div>
          <div>Chart3</div>
        </div>
      </div>
    </section>
  )
}

export default ClientFlow
