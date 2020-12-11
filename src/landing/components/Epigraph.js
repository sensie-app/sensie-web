/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  epigraphStyle: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'lighter'
  }
})

const Epigraph = ({ epigraph }) => {
  const classes = useStyles()
  return (
        <div>
            <p className={classes.epigraphStyle}>{epigraph}</p>
        </div>
  )
}

export default Epigraph
