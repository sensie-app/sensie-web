/* eslint-disable react/prop-types */
// react
import React from 'react'
import PropTypes from 'prop-types'
import { ResponsivePie } from '@nivo/pie'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// theme
import chartTheme from '../../constants/chartTheme'
// test
import { data1, data2, data3 } from './data'

// const
const { actionColor1, actionColor2, actionColor3, grayColor4 } = COLORS
const margin = 20

console.log('data', data1, data2, data3)

// const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
//   let total = 0
//   dataWithArc.forEach(datum => {
//     total += datum.value
//   })
//   return (
//       <text
//           x={centerX}
//           y={centerY}
//           textAnchor="middle"
//           dominantBaseline="central"
//           className={styles.PieChartCenterMetric}
//           style={{
//             fontSize: '16px',
//             fontWeight: '200'
//           }}
//       >
//           {total}
//       </text>
//   )
// }

const PieChart = ({ data = data1 }) => {
  // handle functions
  const handleDataColor = (data) => {
    const dataWithColor = data.map(_data => {
      if (_data.id === 'empty') {
        _data.color = grayColor4
      } else {
        _data.value <= 50
          ? _data.color = actionColor2
          : _data.value > 50 && _data.value <= 75
            ? _data.color = actionColor3
            : _data.color = actionColor1
      }
      return _data
    })
    return dataWithColor
  }

  // render functions
  const renderCenterValue = data => {
    const value = data.filter(_data => _data.id === 'value')
    return <span>{value[0].value}%</span>
  }

  console.log('renderCenterValue(data)', renderCenterValue(data))

  return (<div className={styles.PieChartContainer}>
    <ResponsivePie
        data={handleDataColor(data)}
        margin={{ top: margin, right: margin, bottom: margin, left: margin }}
        innerRadius={0.75}
        colors={value => value.data.color }
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', '0.1']] }}
        enableRadialLabels={false}
        enableSliceLabels={false}
        // radialLabel={d => `${d.id} (${d.formattedValue})`}
        // layers={['slices', 'sliceLabels', 'radialLabels', 'legends', CenteredMetric]}
        theme={chartTheme}
    />
    <div className={styles.PieChartCenterText}>
      {renderCenterValue(data)}
    </div>
  </div>)
}

// prop-types
PieChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default PieChart
