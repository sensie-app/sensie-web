// react
import React from 'react'
// styles
import styles from './styles.module.scss'

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
            <div>Chart1</div>
            <div>Chart2</div>
            <div>Chart3</div>
          </div>
        </div>
        {/* big chart */}
        <div className={styles.ClientFlowChartS2Container}>
          <div>Chart</div>
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
