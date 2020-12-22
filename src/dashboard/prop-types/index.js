import PropTypes from 'prop-types'

export const UserPropTypes = PropTypes.shape({
  name: PropTypes.string,
  url: PropTypes.string
})

export const BarChartDataPropTypes = PropTypes.shape([
  PropTypes.shape({
    day: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })
])

export const LineChartDataPropTypes = PropTypes.shape([
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape([
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number
      })
    ])
  })
])

export const PieChartDataPropTypes = PropTypes.shape([
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })
])

// todo: revisar!
export const MenuDataPropTypes = PropTypes.shape([
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  })
])
