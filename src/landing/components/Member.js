/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Avatar, makeStyles, Grid } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    },
    textAlign: '-webkit-center'
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  nameStyle: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: 'white'
  },
  roleStyle: {
    fontSize: '1.4rem',
    color: 'white'
  },
  iconStyle: {
    color: 'white'
  }
}))

const Member = ({ avatar, name, role, urlLinkedin }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
        </Grid>{' '}
          <Grid item xs={12}>
        <Box mt={2} className={classes.nameStyle}>
            {name}
        </Box>
          </Grid>
        {role ? (
          <Grid item xs={12}>
          <Box mt={1} className={classes.roleStyle}>
            {role}
          </Box>
          </Grid>
        ) : (null)}

          <Grid item container justify="center">
              <Grid item xs={12}>
        <Box mt={2} className={classes.iconStyle}>
                <a href={urlLinkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon fontSize="small" />
                </a>
        </Box>
              </Grid>
          </Grid>
      </Grid>{' '}
    </Box>
  )
}

export default Member
