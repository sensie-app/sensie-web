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
const margin = 5

console.log('data', data1, data2, data3)

const PieChart = ({ data = data1, title = '' }) => {
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

  return (
    <div className={styles.PieChartContainer}>
      <h4>{title}</h4>
      <div className={styles.PieChartDataContainer}>
        <ResponsivePie
            data={handleDataColor(data)}
            margin={{ top: margin, right: margin, bottom: margin, left: margin }}
            innerRadius={0.75}
            colors={value => value.data.color }
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', '0.1']] }}
            enableRadialLabels={false}
            enableSliceLabels={false}
            theme={chartTheme}
        />
        <div className={styles.PieChartCenterText}>
          {renderCenterValue(data)}
        </div>
      </div>
    </div>
  )
}

// prop-types
PieChart.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default PieChart
