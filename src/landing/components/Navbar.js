import React from 'react'
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Button,
  Hidden
} from '@mui/material'

import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

import LANDING_ROUTES from '../constants/routes'
import APP_ROUTES from '../../constants/routes'

// Components
import LogoSensie from './Logo'
import CustomizedMenus from './Menu'

const {
  howitworks,
  blog,
  scienceanchor,
  abs,
  contact,
  hm
} = LANDING_ROUTES

const Navbar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(7, 18, 21, 0.8)',
          minHeight: '8rem',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Toolbar sx={{ minHeight: '8rem' }}>
          <Grid container alignItems="center">
            <Hidden mdUp>
              <Grid xs={1}>
                <CustomizedMenus />
              </Grid>
            </Hidden>
            <Grid item xs={11} sm={2}>
              <Box ml={2}>
                <Link to={hm}>
                  <LogoSensie />
                </Link>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid
                item
                container
                xs={12}
                sm={8}
                direction="row"
                sx={{
                  fontSize: '1rem',
                  fontStyle: 'normal',
                  color: 'white',
                  justifyContent: 'center'
                }}
              >
                <Link to={howitworks}>
                  <Box mx={1}>HOW IT WORKS</Box>
                </Link>
                <Link to={scienceanchor}>
                  <Box mx={1}>SCIENCE</Box>
                </Link>
                {process.env.REACT_APP_FEAT_BLOG_ENABLED === 'true' && (
                  <NavLink to={blog}>
                    <Box mx={1}>BLOG</Box>
                  </NavLink>
                )}
                <Link to={abs}>
                  <Box mx={1}>ABOUT</Box>
                </Link>
                <Link to={contact}>
                  <Box mx={1}>CONTACT</Box>
                </Link>
              </Grid>
              {process.env.REACT_APP_FEAT_DASHBOARD_ENABLED === 'true' && (
                <Grid item xs={12} sm={2}>
                  <Box display="flex" justifyContent="flex-end">
                    <Box>
                      <a href={APP_ROUTES.dashboard + '/login'}>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="large"
                          sx={{
                            borderRadius: '0.8rem',
                            margin: 1,
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            width: '8.2rem',
                            height: '3.5rem'
                          }}
                        >
                          LOGIN
                        </Button>
                      </a>
                    </Box>
                    <Box>
                      <a href={APP_ROUTES.dashboard + '/signup'}>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          sx={{
                            borderRadius: '0.8rem',
                            margin: 1,
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            width: '8.2rem',
                            height: '3.5rem'
                          }}
                        >
                          SIGN UP
                        </Button>
                      </a>
                    </Box>
                  </Box>
                </Grid>
              )}
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Aquí agregamos el espacio para el AppBar */}
      <Box sx={(theme) => ({ ...theme.mixins.toolbar })} />
    </>
  )
}

export default Navbar
