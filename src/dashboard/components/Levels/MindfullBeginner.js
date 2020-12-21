import React, { useState } from 'react'
import PropTypes from 'prop-types'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'

// const
const { actionColor1, grayColor3, fontColor1 } = COLORS
const TestMode = true

// * component
/**
 * MindfullBeginner component
 * @component
 * @param {number} level
 */
const MindfullBeginner = ({ level }) => {
  // const
  const MaxLevel = 1
  // hooks
  const [symbolLevel, setSymbolLevel] = useState(level)

  // ? handle functions
  /**
    * handle level (test)
    * @returns {number} return symbolLevel
    */
  const handleLevel = () => {
    const newLevel = symbolLevel + 1
    setSymbolLevel(newLevel > MaxLevel ? 0 : newLevel)
  }
  /**
    * handle color
    * @param {number} circle
    * @returns {string} return color (actionColor1, grayColor3)
    */
  const handleColor = circle => symbolLevel >= circle ? actionColor1 : grayColor3

  /**
    * handle color complete
    * @returns {string} return color (white, hendleColor())
    */
  const handleColorComplete = () => symbolLevel === MaxLevel ? fontColor1 : handleColor()

  return (
    <div>
      <svg width="326" height="326" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="162.813" cy="129.832" r="66.8323" fill="url(#paint0_radial)" fillOpacity="0.3" stroke={handleColor(1)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M47.5264 63H278.473M47.5264 63L163 263M47.5264 63L163 129.744M278.473 63L163 263M278.473 63L163 129.744M163 263V129.744" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(162.813 129.832) rotate(90) scale(66.8323)">
          <stop stopColor={handleColorComplete()}/>
          <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
      {TestMode && <button onClick={handleLevel}><Icon name="arrow-right-outline" /></button>}
    </div>
  )
}

// prop-types
MindfullBeginner.propTypes = {
  /** level */
  level: PropTypes.number
}

export default MindfullBeginner
