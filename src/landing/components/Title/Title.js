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
    return <p className={classes.mainTitle}>{title}</p>
  }
}

export default Title
