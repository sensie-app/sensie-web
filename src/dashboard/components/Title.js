// react
import React from 'react'
import PropTypes from 'prop-types'
// constants
import { COLORS } from '../constants/theme'

// * component
/**
 * Title component
 * @component
 */
const Title = ({
  text,
  color = COLORS.fontColor1,
  margin = '0px 0px',
  padding = '0px 0px'
}) => <span style={{
  color: color,
  margin: margin,
  padding: padding,
  fontSize: '18px',
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
