import React from 'react'
import Title from '../components/Title/Title'
import { Box, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  background: {
    height: '768px',
    backgroundColor: '#071215'
  }
})

const Blog = () => {
  const classes = useStyles()
  return (
        <Grid container className={classes.background}>
          <Box mt={'6rem'}>
            <Title title='BLOG INCOMING' titleDashboard />
          </Box>
        </Grid>
  )
}

export default Blog
