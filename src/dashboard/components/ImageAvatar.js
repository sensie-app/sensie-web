// react
import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'

/**
 * ImageAvatar component
 * @component
 * @param {string} url
 * @param {string} alt
 * @param {string} size (small | medium | large | xlarge) (default: 'medium')
 */
const ImageAvatar = ({ url, alt, size = 'medium' }) => {
  const sizeStyles = {
    small: { width: '4.5vh', height: '4.5vh' },
    medium: { width: '7.5vh', height: '7.5vh' },
    large: { width: '15vh', height: '15vh' },
    xlarge: { width: '20vh', height: '20vh' }
  }

  // Asegura que url sea string, si no, usa string vacío
  const safeUrl = typeof url === 'string' ? url : ''

  return (
    <Box sx={{ display: 'flex', '& > *': { m: 1 } }}>
      <Avatar alt={alt} src={safeUrl} sx={sizeStyles[size] || sizeStyles.medium} />
    </Box>
  )
}

ImageAvatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.string
}

export default ImageAvatar
