/* eslint-disable react/prop-types */
import React from 'react'
import hand from '../assets/img/hand.png'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'relative',
    marginTop: '22%',
    marginLeft: '-10%'
  }
})

const Hand = () => {
  const classes = useStyles()
  return (
    <div>
      <img className={classes.root} src={hand}></img>
    </div>
  )
}

export default Hand
