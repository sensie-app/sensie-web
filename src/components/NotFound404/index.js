/* eslint-disable react/prop-types */
// react
// react
import React from 'react'
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
