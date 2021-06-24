// react
import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
import PropTypes from 'prop-types'

// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// prop-types
import { LineChartDataPropTypes } from '../../prop-types'
// theme
import chartTheme from '../../constants/chartTheme'
// data
// import { data1 } from './data'

// const
const { actionColor1, actionColor2 } = COLORS

// * component
/**
 * LineChart component
 * @component
 * @param {Array.LineChartData} data
 */
const LineChart = ({ data }) => {
  // const
  /** @type {number} */
  const margin = 25
  const hours = data[0].data.length
  const precision = hours <= 100 ? 'hour' : (hours <= 1000 ? 'day' : 'month')
  const tickValues = `every 1 ${precision}`
  const format = precision === 'hour' ? '%m/%d %H:%M' : (precision === 'day' ? '%m/%d' : '%m/%d/%y')

  return (
    <div className={styles.LineChartContainer}>
       <ResponsiveLine
          data={data}
          margin={{ top: margin, right: margin, bottom: margin * 3, left: margin * 2 }}
          enablePoints={false}
          enablePointLabel={false}
          enableGridX={false}
          enableGridY={true}
          colors={[actionColor1, actionColor2]}
          xScale={{
            type: 'time',
            format: 'native',
            precision: precision
          }}
          xFormat={`time:${format}`}
          axisBottom={{
            tickValues: tickValues,
            // tickValues: 'every 1 hour',
            tickSize: 7,
            tickPadding: 0,
            tickRotation: -45,
            format: `${format}`,
            legend: 'Date',
            legendOffset: 70,
            legendPosition: 'middle'
          }}
          yScale={{
            type: 'linear',
            stacked: false,
            min: 0,
            max: 100
          }}
          curve='linear'
          lineWidth={5}
          enableArea={true}
          areaOpacity={0.5}
          enableSlices={false}
          useMesh={true}
          crosshairType="cross"
          theme={chartTheme}
          axisLeft={{
            format: value => value % 25 === 0 && value + '%',
            tickValues: [0, 25, 50, 75, 100],
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Flow',
            legendPosition: 'middle',
            legendOffset: -45
          }}
          defs={[
            linearGradientDef('gradientHigh', [
              { offset: 0, color: '#fff', opacity: 0.75 },
              { offset: 100, color: 'inherit', opacity: 0.1 }
            ]),
            // linearGradientDef('gradientMedium', [
            //   { offset: 0, color: actionColor3, opacity: 1 },
            //   { offset: 100, color: 'inherit', opacity: 0.5 }
            // ]),
            linearGradientDef('gradientLow', [
              { offset: 0, color: actionColor1, opacity: 0.95 },
              { offset: 40, color: actionColor1, opacity: 0.25 },
              { offset: 60, color: actionColor2, opacity: 0.25 },
              { offset: 100, color: actionColor2, opacity: 0.45 }
            ])
          ]}
        fill={[
          { match: { id: 'high' }, id: 'gradientHigh' },
          { match: { id: 'medium' }, id: 'gradientMedium' },
          { match: { id: 'low' }, id: 'gradientLow' }
        ]}
      />
    </div>
  )
}

// prop-types
LineChart.propTypes = {
  data: PropTypes.arrayOf(LineChartDataPropTypes)
}

export default LineChart
