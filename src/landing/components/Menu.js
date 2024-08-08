import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { IconButton, Box, Button, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { NavLink } from 'react-router-dom'

import { HashLink as Link } from 'react-router-hash-link'
import LogoSensie from './Logo'

import APP_ROUTES from '../../constants/routes'
import LANDING_ROUTES from '../constants/routes'

const {
  howitworks,
  /* membership, */
  blog,
  scienceanchor,
  abs,
  contact,
  hm
} = LANDING_ROUTES

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    color: '#FFFFFF',
    backgroundColor: '#071215'
  },
  fullList: {
    width: 'auto'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#15E7BC'
  },
  hide: {
    display: 'none'
  }
}))

export default function TemporaryDrawer () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false
  })
  const [open] = React.useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Grid
          item
          container
          xs={12}
          sm={8}
          direction="column"
          className={classes.textTab}
        >
          <Link to={hm}>
            <Box mt={2} ml={3}>
              <LogoSensie />
            </Box>
          </Link>
          <Divider />

          <Link to={howitworks}>
            <Box mt={3} ml={3}>
              HOW IT WORKS
            </Box>
          </Link>

          <Link to={scienceanchor}>
            <Box mt={3} mx={3}>
              SCIENCE
            </Box>
          </Link>

          {/* <Link to={membership}>
                  <Box mx={1}>MEMBERSHIP</Box>
                </Link> */}
          {process.env.REACT_APP_FEAT_BLOG_ENABLED === 'true' && (
          <NavLink to={blog}>
            <Box mt={3} mx={3}>
              BLOG
            </Box>
          </NavLink>
          )}

          <Link to={abs}>
            <Box mt={3} mx={3}>
              ABOUT
            </Box>
          </Link>
          <Link to={contact}>
            <Box mt={3} mx={3} mb={3}>
              CONTACT
            </Box>
          </Link>
        </Grid>
      <Divider />
      <List>
        {process.env.REACT_APP_FEAT_DASHBOARD_ENABLED === 'true' && (
        <Grid container style={{ textAlign: 'center' }}>
          <Grid item xs={12}>
            <Box mx={2}>
              <a href={APP_ROUTES.dashboard + '/login'}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  className={classes.btnStyle}
                >
                  LOGIN
                </Button>
              </a>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2} mx={2}>
              <a href={APP_ROUTES.dashboard + '/signup'}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth
                  className={classes.btnStyle}
                >
                  SIGN UP
              </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
        )}
      </List>
    </div>
  )

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
