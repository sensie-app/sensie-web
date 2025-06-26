import React from 'react'
import { styled } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import { IconButton, Box, Button, Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

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

// Usar styled en lugar de makeStyles
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    color: '#FFFFFF',
    backgroundColor: '#071215'
  }
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: '#15E7BC'
}))

export default function TemporaryDrawer () {
  const [state, setState] = React.useState({
    top: false
  })

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
        sx={{ color: 'white', fontSize: '1rem', fontStyle: 'normal', justifyContent: 'center' }}
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
          <StyledIconButton
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
            edge="start"
          >
            <MenuIcon />
          </StyledIconButton>
          <StyledDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </StyledDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
