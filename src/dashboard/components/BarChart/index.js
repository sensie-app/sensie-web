// react
import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveBar } from '@nivo/bar'
import { linearGradientDef } from '@nivo/core'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// theme
import chartTheme from '../../constants/chartTheme'
// test data
import { data1, data2 } from './data'

// const
const { actionColor1, actionColor2, actionColor3 } = COLORS
const margin = 50

console.log('data', data1, data2)

// * component
const BarChart = ({ data = data2 }) => {
  // handle functions
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
          data={data}
          theme={chartTheme}
          keys={['value']} // opc2: data2
          indexBy="day"
          margin={{ top: 25, right: 10, bottom: margin, left: margin * 0.5 }}
          padding={0.5}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={val => handleColor(val)}
          defs={[
            linearGradientDef('gradientBarHigh', [
              { offset: 0, color: actionColor1, opacity: 1 },
              { offset: 100, color: 'inherit', opacity: 0.8 }
            ]),
            linearGradientDef('gradientBarMedium', [
              { offset: 0, color: actionColor3, opacity: 1 },
              { offset: 100, color: 'inherit', opacity: 0.8 }
            ]),
            linearGradientDef('gradientBarLow', [
              { offset: 0, color: actionColor2, opacity: 1 },
              { offset: 100, color: 'inherit', opacity: 0.8 }
            ])
          ]}
          fill={[
            { match: ({ data }) => data.value <= 50, id: 'gradientBarLow' },
            { match: ({ data }) => data.value <= 75 && data.value > 50, id: 'gradientBarMedium' },
            { match: ({ data }) => data.value > 75, id: 'gradientBarHigh' }
          ]}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          enableLabel={false}
          enableGridX={false}
          enableGridY={false}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 20,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
          }}
          axisLeft={{
            format: value => value % 25 === 0 && value + '%',
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
  data: PropTypes.array
}

export default BarChart
