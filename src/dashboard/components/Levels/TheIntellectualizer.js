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
 * TheIntellectualizer component
 * @component
 * @param {number} level
 */
const TheIntellectualizer = ({ level }) => {
  // const
  const MaxLevel = 2
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

  return (
    <div>
      <svg width="326" height="326" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M54.8193 225.094H271.999L163.409 38L54.8193 225.094Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <ellipse cx="162.766" cy="125.46" rx="75.3686" ry="74.9742" fill="url(#paint0_radial)" fillOpacity="0.3" stroke={handleColor(1)} strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="162.766" cy="200.434" rx="75.3686" ry="74.9742" fill="url(#paint1_radial)" fillOpacity="0.3" stroke={handleColor(2)} strokeWidth="2" strokeLinecap="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M54 100.906H271.18L162.59 288L54 100.906Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M54 100.906L163.41 38L271.18 100.906L272 225.094L162.59 288L54.8199 225.094L54 100.906Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(162.766 125.46) rotate(90) scale(74.9742 75.3686)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(162.766 200.434) rotate(90) scale(74.9742 75.3686)">
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
TheIntellectualizer.propTypes = {
  /** level */
  level: PropTypes.number
}

export default TheIntellectualizer
