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
import { data1 } from './data'
// import { data2 } from './data'

// const
const { actionColor1, actionColor2, actionColor3 } = COLORS
const margin = 50

const BarChart = ({ data = data1 }) => (
  <div className={styles.BarChartContainer}>
    <ResponsiveBar
        data={data}
        theme={chartTheme}
        keys={['low', 'medium', 'high']} // opc1: data1
        // keys={['value']} // opc2: data2
        indexBy="day"
        margin={{ top: margin, right: margin, bottom: margin, left: margin }}
        padding={0.5}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={[actionColor2, actionColor3, actionColor1]}
        defs={[
          linearGradientDef('gradientHigh', [
            { offset: 0, color: actionColor1 },
            { offset: 100, color: actionColor3 }
          ]),
          linearGradientDef('gradientMedium', [
            { offset: 0, color: actionColor3 },
            { offset: 100, color: actionColor2 }
          ]),
          linearGradientDef('gradientLow', [
            { offset: 0, color: actionColor2 },
            { offset: 100, color: actionColor2 }
          ])
        ]}
        fill={[
          // opc1: data
          { match: { id: 'high' }, id: 'gradientHigh' },
          { match: { id: 'medium' }, id: 'gradientMedium' },
          { match: { id: 'low' }, id: 'gradientLow' },
          // opc2: data2
          { match: ({ data }) => data.value <= 50, id: 'gradientLow' },
          { match: ({ data }) => data.value <= 75 && data.value > 50, id: 'gradientMedium' },
          { match: ({ data }) => data.value > 75, id: 'gradientHihg' }
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
          format: value => value % 25 === 0 && value + ' %',
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
    <div className={styles.BarChartAxisBottom}>
      <div />
    </div>
  </div>
)

// prop-types
BarChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default BarChart
