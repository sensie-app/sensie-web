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
   * handle stroke color
   * @param {number} circle
   * @returns {string} return color (actionColor1, grayColor3)
   */
  const handleStrokeColor = circle => symbolLevel >= circle ? actionColor1 : grayColor3

  /**
   * handle stroke width
   * @param {number} circle
   * @returns {string} return color (actionColor1, grayColor3)
   */
  const handleStrokeWidth = circle => symbolLevel >= circle ? 5 : 3

  /**
   * handle color complete
   * @returns {string} return color (white, hendleColor())
   */
  const handleStrokeColorComplete = () => symbolLevel === MaxLevel ? fontColor1 : handleStrokeColor()

  return (
    <div>
      <svg width="414" height="414" viewBox="0 0 414 414" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="207" cy="207" r="207" fill="url(#paint0_radial)" fillOpacity="0.2"/>
        <g opacity="0.6">
          <circle cx="75.5" cy="357.5" r="1.5" fill="white"/>
          <circle cx="45.5" cy="307.5" r="1.5" fill="white"/>
          <circle cx="107.5" cy="289.5" r="1.5" fill="white"/>
          <circle cx="28.5" cy="201.5" r="1.5" fill="white"/>
          <circle cx="105.5" cy="129.5" r="1.5" fill="white"/>
          <circle cx="74.5" cy="150.5" r="1.5" fill="white"/>
          <circle cx="40.5" cy="101.5" r="1.5" fill="white"/>
          <circle cx="83.5" cy="59.5" r="1.5" fill="white"/>
          <circle cx="140.5" cy="19.5" r="1.5" fill="white"/>
          <circle cx="212.5" cy="72.5" r="1.5" fill="white"/>
          <circle cx="215.5" cy="93.5" r="1.5" fill="white"/>
          <circle cx="259.5" cy="116.5" r="1.5" fill="white"/>
          <circle cx="169.5" cy="159.5" r="1.5" fill="white"/>
          <circle cx="326.5" cy="128.5" r="1.5" fill="white"/>
          <circle cx="324.5" cy="225.5" r="1.5" fill="white"/>
          <circle cx="391.5" cy="227.5" r="1.5" fill="white"/>
          <circle cx="339.5" cy="45.5" r="1.5" fill="white"/>
          <circle cx="381.5" cy="75.5" r="1.5" fill="white"/>
          <circle cx="281.5" cy="27.5" r="1.5" fill="white"/>
          <circle cx="351.5" cy="340.5" r="1.5" fill="white"/>
          <circle cx="301.5" cy="412.5" r="1.5" fill="white"/>
          <circle cx="132.5" cy="373.5" r="1.5" fill="white"/>
          <circle cx="364.231" cy="335.688" r="1.5" transform="rotate(-95.7345 364.231 335.688)" fill="white"/>
          <circle cx="317.478" cy="370.534" r="1.5" transform="rotate(-95.7345 317.478 370.534)" fill="white"/>
          <circle cx="293.374" cy="310.643" r="1.5" transform="rotate(-95.7345 293.374 310.643)" fill="white"/>
          <circle cx="213.708" cy="398.04" r="1.5" transform="rotate(-95.7345 213.708 398.04)" fill="white"/>
          <circle cx="134.374" cy="328.62" r="1.5" transform="rotate(-95.7345 134.374 328.62)" fill="white"/>
          <circle cx="158.367" cy="357.366" r="1.5" transform="rotate(-95.7345 158.367 357.366)" fill="white"/>
          <circle cx="113.009" cy="396.092" r="1.5" transform="rotate(-95.7345 113.009 396.092)" fill="white"/>
          <circle cx="66.9227" cy="357.504" r="1.5" transform="rotate(-95.7345 66.9227 357.504)" fill="white"/>
          <circle cx="21.4276" cy="304.786" r="1.5" transform="rotate(-95.7345 21.4276 304.786)" fill="white"/>
          <circle cx="66.9681" cy="227.851" r="1.5" transform="rotate(-95.7345 66.9681 227.851)" fill="white"/>
          <circle cx="87.5633" cy="222.768" r="1.5" transform="rotate(-95.7345 87.5633 222.768)" fill="white"/>
          <circle cx="106.052" cy="176.69" r="1.5" transform="rotate(-95.7345 106.052 176.69)" fill="white"/>
          <circle cx="157.829" cy="261.943" r="1.5" transform="rotate(-95.7345 157.829 261.943)" fill="white"/>
          <circle cx="111.297" cy="108.826" r="1.5" transform="rotate(-95.7345 111.297 108.826)" fill="white"/>
          <circle cx="208.012" cy="101.124" r="1.5" transform="rotate(-95.7345 208.012 101.124)" fill="white"/>
          <circle cx="203.307" cy="34.2592" r="1.5" transform="rotate(-95.7345 203.307 34.2592)" fill="white"/>
          <circle cx="27.4139" cy="104.184" r="1.5" transform="rotate(-95.7345 27.4139 104.184)" fill="white"/>
          <circle cx="53.0672" cy="59.3967" r="1.5" transform="rotate(-95.7345 53.0672 59.3967)" fill="white"/>
          <circle cx="15.2992" cy="163.692" r="1.5" transform="rotate(-95.7345 15.2992 163.692)" fill="white"/>
          <circle cx="319.739" cy="62.7683" r="1.5" transform="rotate(-95.7345 319.739 62.7683)" fill="white"/>
          <circle cx="396.374" cy="105.324" r="1.5" transform="rotate(-95.7345 396.374 105.324)" fill="white"/>
          <circle cx="374.455" cy="277.375" r="1.5" transform="rotate(-95.7345 374.455 277.375)" fill="white"/>
        </g>
        <circle cx="206.564" cy="207" r="80" stroke={handleStrokeColorComplete()} strokeWidth={handleStrokeWidth(7)}/>
        <circle cx="137.282" cy="247" r="80" transform="rotate(60 137.282 247)" stroke={handleStrokeColor(5)} strokeWidth={handleStrokeWidth(5)}/>
        <circle cx="137.282" cy="167" r="80" transform="rotate(-60 137.282 167)" stroke={handleStrokeColor(6)} strokeWidth={handleStrokeWidth(6)}/>
        <circle cx="206.564" cy="287" r="80" stroke={handleStrokeColor(4)} strokeWidth={handleStrokeWidth(4)}/>
        <circle cx="275.846" cy="247" r="80" transform="rotate(-60 275.846 247)" stroke={handleStrokeColor(3)} strokeWidth={handleStrokeWidth(3)}/>
        <circle cx="275.846" cy="167" r="80" transform="rotate(60 275.846 167)" stroke={handleStrokeColor(2)} strokeWidth={handleStrokeWidth(2)}/>
        <circle cx="207" cy="127" r="80" stroke={handleStrokeColor(1)} strokeWidth={handleStrokeWidth(1)}/>
        <circle cx="207" cy="127" r="4" fill={handleStrokeColorComplete()}/>
        <circle cx="207" cy="287" r="4" fill={handleStrokeColorComplete()}/>
        <circle cx="207" cy="207" r="4" fill={handleStrokeColorComplete()}/>
        <circle cx="276.143" cy="166.759" r="4" transform="rotate(-30.1996 276.143 166.759)" fill={handleStrokeColorComplete()}/>
        <circle r="4" transform="matrix(-0.864278 -0.503014 -0.503014 0.864278 137.858 166.759)" fill={handleStrokeColorComplete()}/>
        <circle cx="137.858" cy="247.241" r="4" transform="rotate(-30.1996 137.858 247.241)" fill={handleStrokeColorComplete()}/>
        <circle r="4" transform="matrix(-0.864278 -0.503014 -0.503014 0.864278 276.142 247.241)" fill={handleStrokeColorComplete()}/>
        <circle r="4" transform="matrix(1 0 0 -1 345.142 207.445)" fill={handleStrokeColorComplete()}/>
        <circle r="4" transform="matrix(1 0 0 -1 68.1426 207.445)" fill={handleStrokeColorComplete()}/>
        <circle r="4" transform="matrix(1 0 0 -1 275.892 87.5007)" fill={handleStrokeColorComplete()}/>
        <circle r="4" transform="matrix(1 0 0 -1 137.392 327.389)" fill={handleStrokeColorComplete()}/>
        <circle cx="137.392" cy="87.5007" r="4" fill={handleStrokeColorComplete()}/>
        <circle cx="275.892" cy="327.389" r="4" fill={handleStrokeColorComplete()}/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(207 207) rotate(90) scale(207)">
            <stop stopColor={handleStrokeColorComplete()}/>
            <stop offset="1" stopColor={handleStrokeColorComplete()} stopOpacity="0"/>
          </radialGradient>
        </defs>
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
