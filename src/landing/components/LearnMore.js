import React from 'react'
import { NavLink } from 'react-router-dom'
import LANDING_ROUTES from '../constants/routes'

const { science } = LANDING_ROUTES

const LearnMore = () => {
  return (
        <div>
            <NavLink to={science}>

                        Learn more &gt;

                    </NavLink>
        </div>
  )
}

export default LearnMore
