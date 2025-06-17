/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles({
  leadStyle: {
    color: 'white',
    fontSize: '1.7rem'
  }
})

const Lead = ({ lead }) => {
  const classes = useStyles()
  return (
        <Box mt={2}>
            <p className={classes.leadStyle}>{lead}</p>
        </Box>
  )
}

export default Lead
