import React from 'react'
import LANDING_ROUTES from '../constants/routes'
import { HashLink as Link } from 'react-router-hash-link'

const { scc } = LANDING_ROUTES

const LearnMore = () => {
  return (
    <div>
      <Link style={{ fontSize: '1.3rem' }} to={scc}>Learn more &gt;</Link>
    </div>
  )
}

export default LearnMore
