/* eslint-disable react/prop-types */
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles({
  epigraphStyle: {
    color: 'white',
    fontSize: '1.7rem',
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
