/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  leadStyle: {
    color: 'white',
    fontSize: '30px'
  }
})

const Lead = ({ lead }) => {
  const classes = useStyles()
  return (
        <div>
            <p className={classes.leadStyle}>{lead}</p>
        </div>
  )
}

export default Lead
