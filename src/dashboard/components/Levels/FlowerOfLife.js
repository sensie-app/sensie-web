// react
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
 * FlowerOfLife component
 * @component
 * @param {number} level
 */
const FlowerOfLife = ({ level }) => {
  // const
  const MaxLevel = 7
  // ? hooks
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

  const size = window.screen.width * 0.3

  return (
    <div>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="206.564" cy="207" r="80" stroke={handleColorComplete()} strokeWidth="3"/>
          <circle cx="137.282" cy="247" r="80" transform="rotate(60 137.282 247)" stroke={handleColor(5)} strokeWidth="3"/>
          <circle cx="137.282" cy="167" r="80" transform="rotate(-60 137.282 167)" stroke={handleColor(6)} strokeWidth="3"/>
          <circle cx="206.564" cy="287" r="80" stroke={handleColor(4)} strokeWidth="3"/>
          <circle cx="275.846" cy="247" r="80" transform="rotate(-60 275.846 247)" stroke={handleColor(3)} strokeWidth="3"/>
          <circle cx="275.846" cy="167" r="80" transform="rotate(60 275.846 167)" stroke={handleColor(2)} strokeWidth="3"/>
          <circle cx="207" cy="127" r="80" stroke={handleColor(1)} strokeWidth="3"/>
      </svg>
      {TestMode && <button onClick={handleLevel}><Icon name="arrow-right-outline" /></button>}
    </div>
  )
}

// prop-types
FlowerOfLife.propTypes = {
  /** level */
  level: PropTypes.number
}

export default FlowerOfLife
