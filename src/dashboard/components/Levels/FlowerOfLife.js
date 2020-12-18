// react
import React from 'react'
import PropTypes from 'prop-types'
// constants
import { COLORS } from '../../constants/theme'

// const
const { actionColor1, grayColor3, fontColor1 } = COLORS

// * component
/**
 * FlowerOfLife component
 * @component
 * @param {number} level
 */
const FlowerOfLife = ({ level }) => {
  // handle functions
  /**
   * handle color
   * @param {number} circle
   * @returns {string} return color (actionColor1, grayColor3)
   */
  const handleColor = circle => level >= circle ? actionColor1 : grayColor3

  /**
   * handle color complete
   * @returns {string} return color (white, hendleColor())
   */
  const handleColorComplete = () => level === 7 ? fontColor1 : handleColor()

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
          <circle cx="364.231" cy="335.689" r="1.5" transform="rotate(-95.7345 364.231 335.689)" fill="white"/>
          <circle cx="317.478" cy="370.534" r="1.5" transform="rotate(-95.7345 317.478 370.534)" fill="white"/>
          <circle cx="293.374" cy="310.643" r="1.5" transform="rotate(-95.7345 293.374 310.643)" fill="white"/>
          <circle cx="213.708" cy="398.041" r="1.5" transform="rotate(-95.7345 213.708 398.041)" fill="white"/>
          <circle cx="134.374" cy="328.62" r="1.5" transform="rotate(-95.7345 134.374 328.62)" fill="white"/>
          <circle cx="158.367" cy="357.366" r="1.5" transform="rotate(-95.7345 158.367 357.366)" fill="white"/>
          <circle cx="113.009" cy="396.092" r="1.5" transform="rotate(-95.7345 113.009 396.092)" fill="white"/>
          <circle cx="66.9227" cy="357.504" r="1.5" transform="rotate(-95.7345 66.9227 357.504)" fill="white"/>
          <circle cx="21.4276" cy="304.786" r="1.5" transform="rotate(-95.7345 21.4276 304.786)" fill="white"/>
          <circle cx="66.9681" cy="227.851" r="1.5" transform="rotate(-95.7345 66.9681 227.851)" fill="white"/>
          <circle cx="87.5633" cy="222.767" r="1.5" transform="rotate(-95.7345 87.5633 222.767)" fill="white"/>
          <circle cx="106.052" cy="176.69" r="1.5" transform="rotate(-95.7345 106.052 176.69)" fill="white"/>
          <circle cx="157.829" cy="261.943" r="1.5" transform="rotate(-95.7345 157.829 261.943)" fill="white"/>
          <circle cx="111.297" cy="108.826" r="1.5" transform="rotate(-95.7345 111.297 108.826)" fill="white"/>
          <circle cx="208.012" cy="101.124" r="1.5" transform="rotate(-95.7345 208.012 101.124)" fill="white"/>
          <circle cx="203.307" cy="34.2595" r="1.5" transform="rotate(-95.7345 203.307 34.2595)" fill="white"/>
          <circle cx="27.4139" cy="104.184" r="1.5" transform="rotate(-95.7345 27.4139 104.184)" fill="white"/>
          <circle cx="53.0672" cy="59.3967" r="1.5" transform="rotate(-95.7345 53.0672 59.3967)" fill="white"/>
          <circle cx="15.2992" cy="163.693" r="1.5" transform="rotate(-95.7345 15.2992 163.693)" fill="white"/>
          <circle cx="319.739" cy="62.7683" r="1.5" transform="rotate(-95.7345 319.739 62.7683)" fill="white"/>
          <circle cx="396.374" cy="105.324" r="1.5" transform="rotate(-95.7345 396.374 105.324)" fill="white"/>
          <circle cx="374.455" cy="277.375" r="1.5" transform="rotate(-95.7345 374.455 277.375)" fill="white"/>
        </g>
          <circle cx="206.564" cy="207" r="80" stroke={handleColorComplete()} strokeWidth="3"/>
          <circle cx="137.282" cy="247" r="80" transform="rotate(60 137.282 247)" stroke={handleColor(5)} strokeWidth="3"/>
          <circle cx="137.282" cy="167" r="80" transform="rotate(-60 137.282 167)" stroke={handleColor(6)} strokeWidth="3"/>
          <circle cx="206.564" cy="287" r="80" stroke={handleColor(4)} strokeWidth="3"/>
          <circle cx="275.846" cy="247" r="80" transform="rotate(-60 275.846 247)" stroke={handleColor(3)} strokeWidth="3"/>
          <circle cx="275.846" cy="167" r="80" transform="rotate(60 275.846 167)" stroke={handleColor(2)} strokeWidth="3"/>
          <circle cx="207" cy="127" r="80" stroke={handleColor(1)} strokeWidth="3"/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(207 207) rotate(90) scale(207)">
          <stop stopColor="#15E7BC"/>
          <stop offset="1" stopColor="#15E7BC" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>

    </div>
  )
}

// prop-types
FlowerOfLife.propTypes = {
  /** level */
  level: PropTypes.number
}

export default FlowerOfLife
