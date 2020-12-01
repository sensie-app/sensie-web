// react
import React from 'react'
// styles
import './styles.scss'

const ClientFlow = () => {
  return (
    <section className="ClientFlowContainer">
      {/* header */}
      <div className="ClientFlowHeaderContainer">
        <h2>Client Flow Overview</h2>
        <div className="ClientFlowHeaderChartsS1Container">
          <div>Chart1</div>
          <div>Chart2</div>
          <div>Chart3</div>
        </div>
      </div>
      {/* big chart */}
      <div className="ClientFlowChartS2Container">
        <div>Chart</div>
      </div>
      {/* 3 charts */}
      <div className="ClientFlowChartS3Container">
        <div>Chart1</div>
        <div>Chart2</div>
        <div>Chart3</div>
      </div>

    </section>
  )
}

export default ClientFlow
