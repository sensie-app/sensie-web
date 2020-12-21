/* eslint-disable react/prop-types */
import React from 'react'
import { Grid, makeStyles, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  icon: {
    width: '35px',
    height: '35px'
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: '20px'
  }
})

const BulletPoint = ({ IconItem, title = false }) => {
  const classes = useStyles()
  return (
    <Grid container direction="column">
      <Grid item container xs={12}>
          <Box>
            <img src={IconItem} className={classes.icon} />
          </Box>
          <Box ml={2} mt={0.5}>
            <Typography className={classes.text}>{title}</Typography>
          </Box>
      </Grid>
    </Grid>
  )
}

export default BulletPoint
