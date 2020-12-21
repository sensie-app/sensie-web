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
    }
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25)
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

const Member = ({ avatar, name, role, urlLinkedin }) => {
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
        {role ? (<Box mt={1} className={classes.roleStyle}>
          <Grid item xs={12}>
            {role}
          </Grid>{' '}
        </Box>) : (null)}

        <Box mt={2} className={classes.iconStyle}>
          <Grid item container justify="center">
            <Box>
              <Grid item xs={12}>
                <a href={urlLinkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon fontSize="small" />
                </a>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Grid>{' '}
    </Box>
  )
}

export default Member
