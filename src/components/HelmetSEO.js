// react
import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

export const HelmetSEO = ({ title = 'sensie', subtitle }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
  )
}

// prop-types
HelmetSEO.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
