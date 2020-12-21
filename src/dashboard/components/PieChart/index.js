// react
import React from 'react'
import PropTypes from 'prop-types'
import { ResponsivePie } from '@nivo/pie'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// prop-types
import { PieChartDataPropTypes } from '../../prop-types'
// theme
import chartTheme from '../../constants/chartTheme'
// test
import { data1 } from './data'

// const
const { actionColor1, actionColor2, actionColor3, grayColor4 } = COLORS
const margin = 5

// * component
/**
 * PieChart component
 * @component
 * @param {PieChartData} data
 * @param {string} title
 */
const PieChart = ({ data = data1, title = '' }) => {
  // ? handle functions
  /**
   * handle data color
   * @param {PieChartData} data
   * @return  {undefined} data
   */
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

  // ? render functions
  /**
   * render center value info
   * @param {PieChartData} data
   * @return {undefined} data% (html)
   */
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
            innerRadius={0.85}
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
  data: PieChartDataPropTypes,
  title: PropTypes.string
}

export default PieChart
