import { COLORS } from '../../constants/theme'

// const
const { grayColor3, grayColor5, grayColor6, grayColor8, actionColor1, fontColor1 } = COLORS

const theme = {
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
      stroke: grayColor5,
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
      stroke: fontColor1,
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

export default theme
