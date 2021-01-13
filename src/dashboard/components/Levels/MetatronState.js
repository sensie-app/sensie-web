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
 * MetatronState component
 * @component
 * @param {number} level
 */
const MetatronState = ({ level }) => {
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

  return (
    <div>
      <svg width="326" height="326" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M194.185 287.9C194.185 291.984 193.378 296.028 191.811 299.801C190.244 303.575 187.947 307.003 185.051 309.891C182.155 312.779 178.717 315.07 174.934 316.633C171.15 318.196 167.095 319 163 319C158.905 319 154.849 318.196 151.066 316.633C147.282 315.07 143.845 312.779 140.949 309.891C138.053 307.003 135.756 303.575 134.189 299.801C132.622 296.028 131.815 291.984 131.815 287.9C131.815 283.816 132.622 279.772 134.189 275.999C135.756 272.225 138.053 268.797 140.949 265.909C143.845 263.021 147.282 260.73 151.066 259.167C154.849 257.604 158.905 256.8 163 256.8C167.095 256.8 171.15 257.604 174.934 259.167C178.717 260.73 182.155 263.021 185.051 265.909C187.947 268.797 190.244 272.225 191.811 275.999C193.378 279.772 194.185 283.816 194.185 287.9V287.9Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path opacity="0.5" d="M85.3698 101.301C85.3698 109.549 82.0843 117.46 76.236 123.292C70.3877 129.124 62.4557 132.401 54.1849 132.401C45.9142 132.401 37.9822 129.124 32.1338 123.292C26.2855 117.46 23 109.549 23 101.301C23 93.0527 26.2855 85.1423 32.1338 79.3099C37.9822 73.4775 45.9142 70.2009 54.1849 70.2009C62.4557 70.2009 70.3877 73.4775 76.236 79.3099C82.0843 85.1423 85.3698 93.0527 85.3698 101.301V101.301Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path opacity="0.5" d="M303 101.301C303 105.385 302.194 109.429 300.626 113.202C299.059 116.976 296.762 120.404 293.866 123.292C290.971 126.18 287.533 128.471 283.749 130.034C279.966 131.596 275.911 132.401 271.815 132.401C267.72 132.401 263.665 131.596 259.881 130.034C256.098 128.471 252.66 126.18 249.764 123.292C246.868 120.404 244.571 116.976 243.004 113.202C241.437 109.429 240.63 105.385 240.63 101.301C240.63 97.2168 241.437 93.1727 243.004 89.3995C244.571 85.6262 246.868 82.1978 249.764 79.3099C252.66 76.422 256.098 74.1312 259.881 72.5683C263.665 71.0054 267.72 70.2009 271.815 70.2009C275.911 70.2009 279.966 71.0054 283.749 72.5683C287.533 74.1312 290.971 76.422 293.866 79.3099C296.762 82.1978 299.059 85.6262 300.626 89.3995C302.194 93.1727 303 97.2168 303 101.301V101.301Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path opacity="0.5" d="M85.3698 225.701C85.3698 233.949 82.0843 241.86 76.236 247.692C70.3877 253.524 62.4557 256.801 54.1849 256.801C45.9142 256.801 37.9822 253.524 32.1338 247.692C26.2855 241.86 23 233.949 23 225.701C23 217.453 26.2855 209.542 32.1338 203.71C37.9822 197.878 45.9142 194.601 54.1849 194.601C62.4557 194.601 70.3877 197.878 76.236 203.71C82.0843 209.542 85.3698 217.453 85.3698 225.701Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path opacity="0.5" d="M303 225.701C303 229.785 302.194 233.829 300.626 237.603C299.059 241.376 296.762 244.804 293.866 247.692C290.971 250.58 287.533 252.871 283.749 254.434C279.966 255.997 275.911 256.801 271.815 256.801C267.72 256.801 263.665 255.997 259.881 254.434C256.098 252.871 252.66 250.58 249.764 247.692C246.868 244.804 244.571 241.376 243.004 237.603C241.437 233.829 240.63 229.785 240.63 225.701C240.63 221.617 241.437 217.573 243.004 213.8C244.571 210.026 246.868 206.598 249.764 203.71C252.66 200.822 256.098 198.531 259.881 196.968C263.665 195.406 267.72 194.601 271.815 194.601C275.911 194.601 279.966 195.406 283.749 196.968C287.533 198.531 290.971 200.822 293.866 203.71C296.762 206.598 299.059 210.026 300.626 213.8C302.194 217.573 303 221.617 303 225.701V225.701Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path opacity="0.5" d="M194.185 39.1C194.185 43.1841 193.378 47.2282 191.811 51.0015C190.244 54.7747 187.947 58.2031 185.051 61.091C182.155 63.9789 178.717 66.2697 174.934 67.8327C171.15 69.3956 167.095 70.2 163 70.2C158.905 70.2 154.849 69.3956 151.066 67.8327C147.282 66.2697 143.845 63.9789 140.949 61.091C138.053 58.2031 135.756 54.7747 134.189 51.0015C132.622 47.2282 131.815 43.1841 131.815 39.1C131.815 35.0159 132.622 30.9718 134.189 27.1985C135.756 23.4253 138.053 19.9969 140.949 17.109C143.845 14.2211 147.282 11.9303 151.066 10.3673C154.849 8.80443 158.905 8 163 8C167.095 8 171.15 8.80443 174.934 10.3673C178.717 11.9303 182.155 14.2211 185.051 17.109C187.947 19.9969 190.244 23.4253 191.811 27.1985C193.378 30.9718 194.185 35.0159 194.185 39.1V39.1Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path opacity="0.5" d="M54.1855 225.7L163.001 163.5" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path opacity="0.5" d="M163 39.0996V163.5" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path opacity="0.5" d="M271.816 225.7C229.321 201.41 205.496 187.791 163 163.5" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
        <path d="M163.001 39.0996L54.1855 225.7H271.816L163.001 39.0996Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M54.1855 101.301L163.001 287.901L271.816 101.301H54.1855Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M163 287.9V163.5" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M271.816 101.301L163 163.501" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M54.1855 101.301L163.001 163.501" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M163.001 39.0996L271.816 101.3V225.7L163.001 287.9L54.1855 225.7V101.3L163.001 39.0996Z" stroke={handleColorComplete()} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M194.185 225.701C194.185 229.785 193.378 233.829 191.811 237.603C190.244 241.376 187.947 244.804 185.051 247.692C182.155 250.58 178.717 252.871 174.934 254.434C171.15 255.997 167.095 256.801 163 256.801C158.905 256.801 154.849 255.997 151.066 254.434C147.282 252.871 143.845 250.58 140.949 247.692C138.053 244.804 135.756 241.376 134.189 237.603C132.622 233.829 131.815 229.785 131.815 225.701C131.815 221.617 132.622 217.573 134.189 213.8C135.756 210.026 138.053 206.598 140.949 203.71C143.845 200.822 147.282 198.531 151.066 196.968C154.849 195.406 158.905 194.601 163 194.601C167.095 194.601 171.15 195.406 174.934 196.968C178.717 198.531 182.155 200.822 185.051 203.71C187.947 206.598 190.244 210.026 191.811 213.8C193.378 217.573 194.185 221.617 194.185 225.701Z" fill="url(#paint0_radial)" fillOpacity="0.3" stroke={handleColor(7)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M194.185 101.301C194.185 105.385 193.378 109.429 191.811 113.202C190.244 116.976 187.947 120.404 185.051 123.292C182.155 126.18 178.717 128.471 174.934 130.034C171.15 131.596 167.095 132.401 163 132.401C158.905 132.401 154.849 131.596 151.066 130.034C147.282 128.471 143.845 126.18 140.949 123.292C138.053 120.404 135.756 116.976 134.189 113.202C132.622 109.429 131.815 105.385 131.815 101.301C131.815 97.2168 132.622 93.1727 134.189 89.3995C135.756 85.6262 138.053 82.1978 140.949 79.3099C143.845 76.422 147.282 74.1312 151.066 72.5683C154.849 71.0054 158.905 70.2009 163 70.2009C167.095 70.2009 171.15 71.0054 174.934 72.5683C178.717 74.1312 182.155 76.422 185.051 79.3099C187.947 82.1978 190.244 85.6262 191.811 89.3995C193.378 93.1727 194.185 97.2168 194.185 101.301Z" fill="url(#paint1_radial)" fillOpacity="0.3" stroke={handleColor(6)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M139.778 132.401C139.778 140.649 136.492 148.559 130.644 154.392C124.795 160.224 116.863 163.501 108.593 163.501C100.322 163.501 92.3899 160.224 86.5416 154.392C80.6933 148.559 77.4077 140.649 77.4077 132.401C77.4077 124.152 80.6933 116.242 86.5416 110.41C92.3899 104.577 100.322 101.301 108.593 101.301C116.863 101.301 124.795 104.577 130.644 110.41C136.492 116.242 139.778 124.152 139.778 132.401Z" fill="url(#paint2_radial)" fillOpacity="0.3" stroke={handleColor(5)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M248.593 132.401C248.593 140.649 245.307 148.559 239.459 154.392C233.611 160.224 225.679 163.501 217.408 163.501C209.137 163.501 201.205 160.224 195.357 154.392C189.509 148.559 186.223 140.649 186.223 132.401C186.223 124.152 189.509 116.242 195.357 110.41C201.205 104.577 209.137 101.301 217.408 101.301C225.679 101.301 233.611 104.577 239.459 110.41C245.307 116.242 248.593 124.152 248.593 132.401Z" fill="url(#paint3_radial)" fillOpacity="0.3" stroke={handleColor(4)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M139.778 194.6C139.778 202.848 136.492 210.758 130.644 216.591C124.795 222.423 116.863 225.7 108.593 225.7C100.322 225.7 92.3899 222.423 86.5416 216.591C80.6933 210.758 77.4077 202.848 77.4077 194.6C77.4077 186.352 80.6933 178.441 86.5416 172.609C92.3899 166.776 100.322 163.5 108.593 163.5C116.863 163.5 124.795 166.776 130.644 172.609C136.492 178.441 139.778 186.352 139.778 194.6Z" fill="url(#paint4_radial)" fillOpacity="0.3" stroke={handleColor(3)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M248.593 194.6C248.593 202.848 245.307 210.758 239.459 216.591C233.611 222.423 225.679 225.7 217.408 225.7C209.137 225.7 201.205 222.423 195.357 216.591C189.509 210.758 186.223 202.848 186.223 194.6C186.223 186.352 189.509 178.441 195.357 172.609C201.205 166.776 209.137 163.5 217.408 163.5C225.679 163.5 233.611 166.776 239.459 172.609C245.307 178.441 248.593 186.352 248.593 194.6Z" fill="url(#paint5_radial)" fillOpacity="0.3" stroke={handleColor(2)} strokeWidth="2.0014" strokeLinecap="round"/>
        <path d="M194.185 163.5C194.185 167.584 193.378 171.628 191.811 175.402C190.244 179.175 187.947 182.603 185.051 185.491C182.155 188.379 178.717 190.67 174.934 192.233C171.15 193.796 167.095 194.6 163 194.6C158.905 194.6 154.849 193.796 151.066 192.233C147.282 190.67 143.845 188.379 140.949 185.491C138.053 182.603 135.756 179.175 134.189 175.402C132.622 171.628 131.815 167.584 131.815 163.5C131.815 159.416 132.622 155.372 134.189 151.599C135.756 147.825 138.053 144.397 140.949 141.509C143.845 138.621 147.282 136.33 151.066 134.767C154.849 133.205 158.905 132.4 163 132.4C167.095 132.4 171.15 133.205 174.934 134.767C178.717 136.33 182.155 138.621 185.051 141.509C187.947 144.397 190.244 147.825 191.811 151.599C193.378 155.372 194.185 159.416 194.185 163.5Z" fill="url(#paint6_radial)" fillOpacity="0.3" stroke={handleColor(1)} strokeWidth="2.0014" strokeLinecap="round"/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163 225.701) rotate(90) scale(31.1 31.1849)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163 101.301) rotate(90) scale(31.1 31.1849)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108.593 132.401) rotate(90) scale(31.1 31.1849)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(217.408 132.401) rotate(90) scale(31.1 31.1849)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108.593 194.6) rotate(90) scale(31.1 31.1849)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(217.408 194.6) rotate(90) scale(31.1 31.1849)">
            <stop stopColor={handleColorComplete()}/>
            <stop offset="1" stopColor={handleColorComplete()} stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163 163.5) rotate(90) scale(31.1 31.1849)">
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
MetatronState.propTypes = {
  /** level */
  level: PropTypes.number
}

export default MetatronState
