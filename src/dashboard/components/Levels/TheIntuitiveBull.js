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
 * TheIntuitiveBull component
 * @component
 * @param {number} level
 */
const TheIntuitiveBull = ({ level }) => {
  // const
  const MaxLevel = 3
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
  console.log('handleColorComplete', handleColorComplete)

  return (
    <div>
      <svg width="326" height="326" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M162 36L271.985 99.5V226.5L162 290L52.0146 226.5V99.5L162 36Z" stroke={handleColorComplete()} strokeWidth="2"/>
        <path opacity="0.2" d="M271 227L161 163.327M161 163.327L51 227M161 163.327V36" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path d="M140.219 243.098C112.412 259.35 76.8538 249.706 60.799 221.557C44.7441 193.409 54.2718 157.415 82.0796 141.164C109.887 124.913 145.445 134.557 161.5 162.705C177.555 190.854 168.027 226.847 140.219 243.098Z" fill="url(#paint0_radial)" fillOpacity="0.3" stroke={handleColor(3)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M240.921 141.171C268.728 157.423 278.256 193.416 262.201 221.564C246.146 249.713 210.589 259.357 182.781 243.106C154.973 226.854 145.445 190.861 161.5 162.713C177.555 134.564 213.113 124.92 240.921 141.171Z" fill="url(#paint1_radial)" fillOpacity="0.3" stroke={handleColor(2)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M220.04 103.852C220.04 136.355 194.01 162.704 161.9 162.704C129.79 162.704 103.76 136.355 103.76 103.852C103.76 71.3489 129.79 45 161.9 45C194.01 45 220.04 71.3489 220.04 103.852Z" fill="url(#paint2_radial)" fillOpacity="0.3" stroke={handleColor(1)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M271 100L161 163.34M161 163.34L51 100M161 163.34V290" stroke={handleColorComplete()} strokeWidth="2"/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(111.149 192.131) rotate(90) scale(58.8617 58.1495)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(211.851 192.139) rotate(90) scale(58.8617 58.1495)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(161.9 103.852) rotate(90) scale(58.8518 58.1398)">
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
TheIntuitiveBull.propTypes = {
  /** level */
  level: PropTypes.number
}

export default TheIntuitiveBull
