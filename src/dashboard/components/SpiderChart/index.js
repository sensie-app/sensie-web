/* eslint-disable react/prop-types */
// react
import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveRadar } from '@nivo/radar'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// theme
import chartTheme from '../../constants/chartTheme'
// test data
import { data1 } from './data'

const { actionColor1, actionColor2, actionColor3, grayColor3 } = COLORS

// * components
/**
 * SpiderChart component
 * @component
 * @param {undefined} data
 */
const SpiderChart = ({ data = data1 }) => {
  // const
  /** @type {number} */
  const margin = 30

  // ? handle functions
  /**
   * handle dots color
   * @param {SpiderData} data
   * @returns {string} color (actionColor1, actionColor2, actionColor3)
   */
  const handleColor = ({ value }) => {
    return value <= 50
      ? actionColor2
      : value > 50 && value <= 75
        ? actionColor3
        : actionColor1
  }

  return (
    <div className={styles.SpiderChartContainer}>
      <ResponsiveRadar
          theme={chartTheme}
          data={data}
          indexBy="user"
          keys={['value']}
          colors={[grayColor3]}
          maxValue="auto"
          margin={{ top: margin * 2, right: margin, bottom: margin * 2, left: margin }}
          curve="linearClosed"
          borderWidth={0}
          gridLevels={5}
          gridShape="linear"
          gridLabelOffset={36}
          enableDots={true}
          dotColor={data => handleColor(data)}
          dotSize={10}
          enableDotLabel={true}
          dotLabelFormat={data => data + '%'}
          fillOpacity={0.25}
          blendMode="normal"
          isInteractive={true}
      />
    </div>
  )
}

SpiderChart.propTypes = {
  data: PropTypes.array
}

export default SpiderChart
