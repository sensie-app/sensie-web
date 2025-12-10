// react
import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'

// * component
/**
 * CircularIndeterminate component
 * @param {string} color (default: 'white')
 * @param {number} size (default: 20)
 */
const CircularIndeterminate = ({ color = 'white', size = 20 }) => {
  const Root = styled('div')({
    padding: 5
  })

  const StyledCircularProgress = styled(CircularProgress)({
    color
  })

  return (
    <Root>
      <StyledCircularProgress size={size} />
    </Root>
  )
}

// prop-types
CircularIndeterminate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default CircularIndeterminate
