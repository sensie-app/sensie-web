// react
import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveBar } from '@nivo/bar'
// import { linearGradientDef } from '@nivo/core'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// prop-types
import { BarChartDataPropTypes } from '../../prop-types/index'
// theme
import chartTheme from '../../constants/chartTheme'
// test data
import { data2 } from './data'

// const
const { actionColor1, actionColor2, actionColor3 } = COLORS

// * component
/**
 * BarChart component
 * @component
 * @param {Array.BarChartData} data
 * @param {boolean} miniature (default: false)
 */
const BarChart = ({ data, miniature = false }) => {
  // const
  /** @type {number} */
  const margin = miniature ? 0 : 50

  // ? handle functions
  /**
   * handle color
   * @param {number} val value
   * @return {string} color (actionColor1, actionColor2, actionColor3)
   */
  const handleColor = val => {
    return val.value <= 50
      ? actionColor2
      : val.value > 50 && val.value <= 75
        ? actionColor3
        : val.value > 75 && actionColor1
  }

  return (
    <div className={styles.BarChartContainer}>
      <ResponsiveBar
        data={data2} // todo: use data
        theme={chartTheme}
        keys={['value']} // opc2: data2
        indexBy="day"
        margin={{ top: margin * 0.5, right: margin * 0.2, bottom: margin, left: margin * 0.75 }}
        padding={0.5}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={val => handleColor(val)}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        borderRadius={5}
        enableLabel={false}
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        axisRight={null}
        axisBottom={
          miniature
            ? null
            : {
                tickSize: 0,
                tickPadding: 20,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 15
              }}
        axisLeft={
          miniature
            ? null
            : {
                format: value => value % 25 === 0 && value + '%',
                tickValues: [0, 25, 50, 75, 100],
                tickSize: 0,
                tickPadding: 0,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -40
              }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
      {/* <div className={styles.BarChartAxisBottom}>
        <div />
      </div> */}
    </div>
  )
}

// prop-types
BarChart.propTypes = {
  data: BarChartDataPropTypes,
  miniature: PropTypes.bool
}

export default BarChart
