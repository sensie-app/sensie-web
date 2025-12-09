/* eslint-disable react/prop-types */
// react
import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
// styles
import './styles.scss'

export const NotFound404 = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div className="NotFound404Container">
      <div className="NotFound404Content">
        <div className="NotFound404Number">404</div>
        <h1 className="NotFound404Title">Page not found</h1>
        <p className="NotFound404Description">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        {children && (
          <div className="NotFound404Children">
            {children}
          </div>
        )}
        <button
          className="NotFound404Button"
          onClick={() => navigate('/')}
        >
          Back to home
        </button>
      </div>
    </div>
  )
}

// prop-types
NotFound404.propTypes = {
  children: PropTypes.element
}
