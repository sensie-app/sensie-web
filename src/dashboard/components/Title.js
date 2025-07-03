// react
import React from 'react'
import PropTypes from 'prop-types'
// constants
import { COLORS } from '../constants/theme'

// * component
/**
 * Title component
 * @component
 * @param {string} title
 * @param {string} color
 * @param {string} margin (default: '0px 0px')
 * @param {string} padding (default: '0px 0px')
 */
const Title = ({
  text,
  color = COLORS.fontColor1,
  margin = '0px 0px',
  padding = '0px 0px'
}) => <span style={{
  color,
  margin,
  padding,
  fontSize: '1.5rem',
  fontWeight: 'bold'
}}>{text}</span>

// prop-types
Title.propTypes = {
  /** Text */
  text: PropTypes.string.isRequired,
  /** Color */
  color: PropTypes.string,
  /** Margin */
  margin: PropTypes.string,
  /** Padding */
  padding: PropTypes.string
}

export default Title
