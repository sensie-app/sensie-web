/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core'
import './Title.scss'

const useStyle = makeStyles({
  mainTitle: {
    color: 'white',
    fontSize: '50px',
    fontWeight: 'bold'
  },
  titleMembership: {
    color: 'white',
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: '-webkit-center'
  },
  titleDashboard: {
    color: 'white',
    fontSize: '45px',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 80%)',
    width: '100%'
  }
})

const Title = ({ title, titleDashboard, titleMembership }) => {
  const classes = useStyle()
  if (titleDashboard) {
    return <p className={classes.titleDashboard}>{title}</p>
  } else if (titleMembership) {
    return <p className={classes.titleMembership}>{title}</p>
  } else {
    const first = title.substring(0, 18)
    const second = title.substring(18, 32)
    return (
      <p className={classes.mainTitle}>
        <span className={classes.mainTitle} style={{ display: 'inline' }}>{first} </span>
        <span className={classes.mainTitle} style= {{ display: 'inline-block' }}>{second}</span>
      </p>
    )
  }
}

export default Title
