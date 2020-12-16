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

// * component
/**
 * LineChart component
 * @component
 */
const LineChart = ({ data }) => {
  // const
  /** @type {number} */
  const margin = 20

  return (
    <div className={styles.LineChartContainer}>
       <ResponsiveLine
          data={data1}
          margin={{ top: margin, right: margin, bottom: margin + 10, left: margin * 2 }}
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
          areaOpacity={0.5}
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

// prop-types
LineChart.propTypes = {
  /** data [{ id: high, data: [{x(number), y(number | null)}, ...] }, { id: medium, data: [...] }, { id: low, data: [...] }] */
  data: PropTypes.array
}

export default LineChart
