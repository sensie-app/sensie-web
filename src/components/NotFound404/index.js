/* eslint-disable react/prop-types */
// react
import React from 'react'
import PropTypes from 'prop-types'
// styles
import './styles.scss'

export const NotFound404 = ({ children }) => {
  return (
    <div>
      <div className="NotFound404Container">
        <h1>404</h1>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

// prop-types
NotFound404.propTypes = {
  children: PropTypes.element
}
