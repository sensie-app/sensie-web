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
 * OnThePath component
 * @component
 * @param {number} level
 */
const OnThePath = ({ level }) => {
  // const
  const MaxLevel = 5
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
        <path opacity="0.2" d="M162.5 101.25L107.751 194.625M162.5 101.25L217.25 195.247M162.5 101.25L162.5 39M107.751 194.625L217.25 195.247M107.751 194.625L53 225.749M217.25 195.247L272 225.75M53 101.25H271.999L162.5 287.999L53 101.25Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path d="M193.56 160.793C164.814 177.398 128.057 167.544 111.46 138.782C94.864 110.02 104.713 73.2428 133.459 56.6373C162.205 40.0317 198.962 49.8862 215.559 78.6479C232.155 107.41 222.306 144.187 193.56 160.793Z" fill="url(#paint0_radial)" fillOpacity="0.3" stroke={handleColor(5)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M223.742 253.399C194.996 270.005 158.239 260.15 141.642 231.388C125.046 202.627 134.895 165.849 163.641 149.244C192.387 132.638 229.144 142.493 245.74 171.254C262.337 200.016 252.488 236.793 223.742 253.399Z" fill="url(#paint1_radial)" fillOpacity="0.3" stroke={handleColor(4)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M163.379 253.399C134.633 270.005 97.8758 260.15 81.2793 231.388C64.6829 202.627 74.532 165.849 103.278 149.244C132.024 132.638 168.781 142.493 185.378 171.254C201.974 200.016 192.125 236.793 163.379 253.399Z" fill="url(#paint2_radial)" fillOpacity="0.3" stroke={handleColor(3)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M145.27 196.024C116.524 212.629 79.7669 202.775 63.1705 174.013C46.574 145.251 56.4231 108.474 85.169 91.8682C113.915 75.2627 150.672 85.1172 167.269 113.879C183.865 142.641 174.016 179.418 145.27 196.024Z" fill="url(#paint3_radial)" fillOpacity="0.3" stroke={handleColor(2)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M241.85 196.024C213.104 212.629 176.347 202.775 159.751 174.013C143.154 145.251 153.003 108.474 181.749 91.8682C210.495 75.2627 247.252 85.1172 263.849 113.879C280.445 142.641 270.596 179.418 241.85 196.024Z" fill="url(#paint4_radial)" fillOpacity="0.3" stroke={handleColor(1)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M53.0005 101.25L52.5063 100.381L52.0005 101.25H53.0005ZM162.5 39.0005L162.994 38.1311L162.006 38.1311L162.5 39.0005ZM272 101.25H273L272.494 100.381L272 101.25ZM272 225.75L272.494 226.619L273 225.75H272ZM162.5 288L162.006 288.869H162.994L162.5 288ZM53.0005 225.75H52.0005L52.5063 226.619L53.0005 225.75ZM53.4947 102.12L162.994 39.8698L162.006 38.1311L52.5063 100.381L53.4947 102.12ZM162.006 39.8698L271.506 102.12L272.494 100.381L162.994 38.1311L162.006 39.8698ZM271 101.25V225.75H273V101.25H271ZM271.506 224.881L162.006 287.131L162.994 288.869L272.494 226.619L271.506 224.881ZM162.994 287.131L53.4947 224.881L52.5063 226.619L162.006 288.869L162.994 287.131ZM54.0005 225.75V101.25H52.0005V225.75H54.0005ZM107.75 133.375H217.25V131.375H107.75V133.375ZM216.387 131.869L161.638 225.244L163.363 226.255L218.113 132.88L216.387 131.869ZM163.363 225.244L108.613 131.869L106.888 132.88L161.638 226.255L163.363 225.244ZM161.638 38.4947L52.1378 225.244L53.8631 226.256L163.363 39.5063L161.638 38.4947ZM53.0005 226.75H272V224.75H53.0005V226.75ZM272.863 225.244L163.363 38.4947L161.638 39.5063L271.137 226.256L272.863 225.244ZM108.245 131.505L53.4947 100.381L52.5063 102.12L107.256 133.244L108.245 131.505ZM217.744 133.244L272.494 102.12L271.506 100.381L216.756 131.505L217.744 133.244ZM161.5 225.749L161.5 288L163.5 288L163.5 225.749H161.5Z" fill={handleColorComplete()}/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.51 108.715) rotate(90) scale(60.1441 60.1112)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(193.691 201.321) rotate(90) scale(60.1441 60.1112)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(133.328 201.321) rotate(90) scale(60.1441 60.1112)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(115.22 143.946) rotate(90) scale(60.1441 60.1112)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(211.8 143.946) rotate(90) scale(60.1441 60.1112)">
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
OnThePath.propTypes = {
  /** level */
  level: PropTypes.number
}

export default OnThePath
