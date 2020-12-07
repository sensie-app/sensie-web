// react
import React from 'react'
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import { linearGradientDef } from '@nivo/core'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// test data
import { data, data2 } from './data'

// const
const { actionColor1, actionColor2, actionColor3, fontColor1, grayColor3, grayColor6, grayColor8 } = COLORS
const margin = 50
const theme = {
  background: grayColor6,
  textColor: grayColor3,
  fontSize: 11,
  axis: {
    domain: {
      line: {
        stroke: grayColor3,
        strokeWidth: 0
      }
    },
    ticks: {
      line: {
        stroke: grayColor3,
        strokeWidth: 0
      }
    }
  },
  grid: {
    line: {
      stroke: grayColor3,
      strokeWidth: 1
    }
  },
  legends: {
    text: {
      fill: '#333333'
    }
  },
  labels: {
    text: {}
  },
  markers: {
    lineColor: actionColor1,
    lineStrokeWidth: 1,
    text: {}
  },
  dots: {
    text: {}
  },
  tooltip: {
    container: {
      background: grayColor8,
      color: 'inherit',
      fontSize: 'inherit',
      borderRadius: '2px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
      padding: '5px 9px'
    },
    basic: {
      whiteSpace: 'pre',
      display: 'flex',
      alignItems: 'center'
    },
    table: {},
    tableCell: {
      padding: '3px 5px'
    }
  },
  crosshair: {
    line: {
      stroke: grayColor6,
      strokeWidth: 1,
      strokeOpacity: 0.75,
      strokeDasharray: '6 6'
    }
  },
  annotations: {
    text: {
      fontSize: 13,
      outlineWidth: 2,
      outlineColor: fontColor1
    },
    link: {
      stroke: grayColor6,
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: fontColor1
    },
    outline: {
      fill: 'none',
      stroke: grayColor6,
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: fontColor1
    },
    symbol: {
      fill: grayColor6,
      outlineWidth: 2,
      outlineColor: fontColor1
    }
  }
}

console.log('data', data)
console.log('data2', data2)

const BarChart = () => (
  <div className={styles.BarChartContainer}>
    <ResponsiveBar
        data={data}
        theme={theme}
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
          tickPadding: 10,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
  </div>
)

export default BarChart
