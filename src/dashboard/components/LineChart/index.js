/* eslint-disable react/prop-types */
// react
import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// theme
import chartTheme from '../../constants/chartTheme'
// data
import { data1 } from './data'

// const
const { actionColor1, actionColor2, actionColor3 } = COLORS
const margin = 40

const LineChart = ({ data = data1 }) => {
  return (
    <div className={styles.LineChartContainer}>
       <ResponsiveLine
          data={data}
          margin={{ top: margin, right: margin, bottom: margin, left: margin }}
          enablePoints={false}
          enablePointLabel={false}
          enableGridX={false}
          enableGridY={true}
          colors={[actionColor1, actionColor3, actionColor2]}
          xScale={{
            type: 'linear'
          }}
          yScale={{
            type: 'linear',
            stacked: false
          }}
          curve="natural"
          lineWidth={5}
          enableArea={true}
          areaOpacity={0.08}
          enableSlices={false}
          useMesh={true}
          crosshairType="cross"
          theme={chartTheme}
          axisLeft={{
            format: value => value % 25 === 0 && value + '%',
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          defs={[
            linearGradientDef('gradientHigh', [
              { offset: 0, color: actionColor1, opacity: 1 },
              { offset: 100, color: 'inherit', opacity: 0.5 }
            ]),
            linearGradientDef('gradientMedium', [
              { offset: 0, color: actionColor3, opacity: 1 },
              { offset: 100, color: 'inherit', opacity: 0.5 }
            ]),
            linearGradientDef('gradientLow', [
              { offset: 0, color: actionColor2, opacity: 1 },
              { offset: 100, color: 'inherit', opacity: 0.5 }
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

LineChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default LineChart
