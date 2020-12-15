/* eslint-disable react/prop-types */
import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
// icons
import * as eva from 'eva-icons'
// constants
import { SIZE } from '../../constants/theme'
import IMG from '../constants/images'

// const
const { xs, sm, md, l, xl } = SIZE
const { icon } = IMG

// * component
const Icon = ({
  name = null, // eva-icons names
  custom = null, // custom icons in constants/images -> IMG.icon
  color = '#000',
  size = null,
  height = md,
  width = md,
  animation = null
}) => {
  // hooks
  const [customIcon, setCustomIcon] = useState([])

  useEffect(() => {
    custom !== null && handleName()
    eva.replace()
  }, [])

  // handle functions
  const handleSize = value => {
    switch (value) {
      case 'xs': return xs
      case 'sm': return sm
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

  const handleName = () => {
    // setCustomIcon(icon.filter(value => value.name === custom))
    const test = icon.filter(value => value.name === custom)
    console.log('test', test)
    setCustomIcon(test[0])
  }

  return (
    <Fragment>
      {customIcon.length === 0 && custom === null
        ? <i
            data-eva={name}
            data-eva-fill={color}
            data-eva-height={size !== null ? handleSize(size) : handleSize(height)}
            data-eva-width={size !== null ? handleSize(size) : handleSize(width)}
            data-eva-animation={handleAnimation(animation)}
          />
        : <img src={customIcon.src} alt="icon" width={size} />
      }
    </Fragment>
  )
}

// prop-types
Icon.propTypes = {
  name: PropTypes.string,
  custom: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  animation: PropTypes.string
}

export default Icon
