// react
import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveRadar } from '@nivo/radar'
import { linearGradientDef } from '@nivo/core'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// test data
import { data1 } from './data'

const { actionColor1, actionColor2, actionColor3 } = COLORS

// * components
/**
 * SpiderChart component
 * @component
 * @param {undefined} data
 */
const SpiderChart = ({ data = data1 }) => (
    <div className={styles.SpiderChartContainer}>
      <ResponsiveRadar
          data={data}
          indexBy="user"
          // keys={['low', 'medium', 'high']}
          // colors={[actionColor2, actionColor3, actionColor1]}
          keys={['value']}
          colors={[actionColor2]}
          maxValue="auto"
          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
          curve="linearClosed"
          borderWidth={0}
          gridLevels={5}
          gridShape="linear"
          gridLabelOffset={36}
          enableDots={false}
          fillOpacity={0.25}
          blendMode="multiply"
          animate={true}
          motionConfig="wobbly"
          isInteractive={true}
          defs={[
            linearGradientDef('gradientSpiderHigh', [
              { offset: 0, color: actionColor1 },
              { offset: 100, color: actionColor2 }
            ]),
            linearGradientDef('gradientSpiderMedium', [
              { offset: 0, color: actionColor3 },
              { offset: 100, color: actionColor2 }
            ]),
            linearGradientDef('gradientSpiderLow', [
              { offset: 0, color: actionColor2 },
              { offset: 100, color: actionColor2 }
            ])
          ]}
        fill={[
          // opc1: data
          // { match: { id: 'high' }, id: 'gradientSpiderHigh' },
          // { match: { id: 'medium' }, id: 'gradientSpiderMedium' },
          // { match: { id: 'low' }, id: 'gradientSpiderLow' }
          // opc2: data2
          { match: '*', id: 'gradientSpiderHigh' }
          // { match: ({ data }) => data.value <= 75 && data.value > 50, id: 'gradientMedium' },
          // { match: ({ data }) => data.value > 75, id: 'gradientHihg' }
        ]}
      />
  </div>
)

SpiderChart.propTypes = {
  data: PropTypes.array
}

export default SpiderChart
