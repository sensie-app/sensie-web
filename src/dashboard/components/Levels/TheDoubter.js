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
 * TheDoubter component
 * @component
 * @param {number} level
 */
const TheDoubter = ({ level }) => {
  // const
  const MaxLevel = 4
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
        <path opacity="0.2" d="M163 163L224.485 127.502M163 163V233.997M163 163L101.515 127.502M224.485 127.502L207.12 63M224.485 127.502L271.662 174.791M163 233.997L227.542 251.208M163 233.997L98.4568 251.208M101.515 127.502L54.3379 174.791M101.515 127.502L118.881 63.0002" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path d="M195.227 191.953C195.227 225.429 168.09 252.567 134.614 252.567C101.138 252.567 74 225.429 74 191.953C74 158.477 101.138 131.34 134.614 131.34C168.09 131.34 195.227 158.477 195.227 191.953Z" fill="url(#paint0_radial)" fillOpacity="0.3" stroke={handleColor(4)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M195.227 134.614C195.227 168.09 168.09 195.227 134.614 195.227C101.138 195.227 74 168.09 74 134.614C74 101.138 101.138 74 134.614 74C168.09 74 195.227 101.138 195.227 134.614Z" fill="url(#paint1_radial)" fillOpacity="0.3" stroke={handleColor(3)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M252.567 134.614C252.567 168.09 225.429 195.227 191.953 195.227C158.477 195.227 131.34 168.09 131.34 134.614C131.34 101.138 158.477 74 191.953 74C225.429 74 252.567 101.138 252.567 134.614Z" fill="url(#paint2_radial)" fillOpacity="0.3" stroke={handleColor(2)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M252.567 191.953C252.567 225.429 225.429 252.567 191.953 252.567C158.477 252.567 131.34 225.429 131.34 191.953C131.34 158.477 158.477 131.34 191.953 131.34C225.429 131.34 252.567 158.477 252.567 191.953Z" fill="url(#paint3_radial)" fillOpacity="0.3" stroke={handleColor(1)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M162.662 163V92.003M162.662 163L224.147 198.498M162.662 163L101.177 198.498M162.662 92.003L98.119 74.7911M162.662 92.003L227.205 74.7911M98.119 74.7911L54 151.208M98.119 74.7911L118.543 63H206.782L227.205 74.7911M227.205 74.7911L271.325 151.208M224.147 198.498L271.325 151.208M224.147 198.498L206.782 263M271.325 151.208L271.324 174.791L227.205 251.208L206.782 263M206.782 263H118.543M101.177 198.498L118.543 263M101.177 198.498L54 151.208M118.543 263L98.1195 251.208L54.0001 174.791L54 151.208" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(134.614 191.953) rotate(90) scale(60.6136)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(134.614 134.614) rotate(90) scale(60.6136)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(191.953 134.614) rotate(90) scale(60.6136)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(191.953 191.953) rotate(90) scale(60.6136)">
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
TheDoubter.propTypes = {
  /** level */
  level: PropTypes.number
}

export default TheDoubter
