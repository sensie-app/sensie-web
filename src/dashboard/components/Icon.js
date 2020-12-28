// react
import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
// icons
import * as eva from 'eva-icons'
// constants
import { SIZE } from '../../constants/theme'
import IMG from '../constants/images'

// const
const { xs, sm, md, l, xl, xxl } = SIZE
const { icon } = IMG

// * component
/**
 * Icon component
 * @component
 * @param {(string|null)} name
 * @param {(string|null)} custom
 * @param {string} color
 * @param {(string|null)} size
 * @param {(string|null)} height
 * @param {(string|null)} width
 * @param {(string|null)} animation
 */
const Icon = ({
  name = null, // eva-icons names
  custom = null, // custom icons in constants/images -> IMG.icon
  color = '#000',
  size = null,
  height = null,
  width = null,
  animation = null
}) => {
  // hooks
  const [customIcon, setCustomIcon] = useState([])

  useEffect(() => {
    custom !== null && handleName()
    eva.replace()
  }, [])

  // ? handle functions
  /**
   * @param   {string} value  size of the icon (string || null)
   * @return  {string} size value (small, medium, large)
   */
  const handleSize = value => {
    switch (value) {
      case 'xs': return xs
      case 'sm': return sm
      case 'md': return md
      case 'l': return l
      case 'xl': return xl
      case 'xxl': return xxl
      case null: return md
      default: return value
    }
  }

  /**
   * @param   {string} value  name of the icon animation (string || null)
   * @return  {string} animation (zoom, pulse, shake, flip)
   */
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

  /**
   * modifies the customIcon state if the value of custom is in the assets / icons folder
   * @return  {string} customIcon
   */
  const handleName = () => setCustomIcon(icon.filter(value => value.name === custom)[0])

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
  /** Icon name eva-icons */
  name: PropTypes.string,
  /** Icon custom name ../assets/icons */
  custom: PropTypes.string,
  /** Icon color */
  color: PropTypes.string,
  /** Icon size (width & height) */
  size: PropTypes.string,
  /** Icon height (only) */
  height: PropTypes.string,
  /** Icon width (only) */
  width: PropTypes.string,
  /** Icon animation eva-icons */
  animation: PropTypes.string
}

export default Icon
