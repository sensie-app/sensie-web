/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
// icons
import * as eva from 'eva-icons'
// constants
import { SIZE } from '../../constants/theme'

const { xs, s, md, l, xl } = SIZE

const Icon = ({ name, color = '#000', size = null, height = md, width = md, animation = null }) => {
  // hooks
  useEffect(() => eva.replace(), [])

  // handle functions
  const handleSize = value => {
    switch (value) {
      case 'xs': return xs
      case 's': return s
      case 'md': return md
      case 'l': return l
      case 'xl': return xl
      default: return value
    }
  }

  const handleAnimation = value => {
    return (
      value !== 'zoom' &&
      value !== 'pulse' &&
      value !== 'shake' &&
      value !== 'flip'
        ? null
        : value
    )
  }

  return (
    <i
      data-eva={name}
      data-eva-fill={color}
      data-eva-height={size !== null ? handleSize(size) : handleSize(height)}
      data-eva-width={size !== null ? handleSize(size) : handleSize(width)}
      data-eva-animation={handleAnimation(animation)}
    />
  )
}

// prop-types
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  animation: PropTypes.string
}

export default Icon
