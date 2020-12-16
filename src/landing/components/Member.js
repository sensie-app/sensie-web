/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Avatar, makeStyles, Grid } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30)
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  roleStyle: {
    fontSize: 16,
    color: 'white'
  },
  iconStyle: {
    color: 'white'
  }
}))

const Member = ({ avatar, name, role }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
        </Grid>{' '}
        <Box mt={2} className={classes.nameStyle}>
          <Grid item xs={12}>
            {name}
          </Grid>
        </Box>
        <Box mt={1} className={classes.roleStyle}>
          <Grid item xs={12}>
            {role}
          </Grid>{' '}
        </Box>
        <Box mt={2} className={classes.iconStyle}>
          <Grid item container justify="center">
            <Box mr={2}>
              <Grid item xs={6}>
                <InstagramIcon fontSize="small" />
              </Grid>
            </Box>
            <Box ml={2}>
              <Grid item xs={6}>
                <TwitterIcon fontSize="small" />
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Grid>{' '}
    </Box>
  )
}

export default Member
