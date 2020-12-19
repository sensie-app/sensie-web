import React from 'react'
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Button,
  makeStyles,
  Hidden
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

import LANDING_ROUTES from '../constants/routes'
import APP_ROUTES from '../../constants/routes'

// Components
import LogoSensie from './Logo'
import CustomizedMenus from './Menu'

const { home, membership, howitworks, scienceanchor, abs, hm } = LANDING_ROUTES

const useStyle = makeStyles((theme) => ({
  offset: {
    theme: theme.mixins.toolbar,
    offset2: theme.spacing(2)
  },
  btnStyle: {
    borderRadius: 10,
    margin: theme.spacing(1),
    fontSize: '13px',
    fontWeight: 'bold',
    width: '96px',
    height: '39px'
  },
  textTab: {
    fontSize: '13px',
    fontStyle: 'normal',
    color: 'white',
    justifyContent: 'center'
  },
  navbarStyle: {
    backgroundColor: 'rgba(7, 18, 21, 0.8)',
    minHeight: '90px',
    backdropFilter: 'blur(10px)'
  },
  toolbarStyle: {
    minHeight: '90px'
  }
}))

const Navbar = () => {
  const classes = useStyle()
  return (
    <>
      <AppBar position="fixed" className={classes.navbarStyle}>
        <Toolbar className={classes.toolbarStyle}>
          <Grid container alignItems="center">
            <Hidden mdUp>
              <Grid xs={1}>
                <CustomizedMenus />
              </Grid>
            </Hidden>
            <Grid item xs={4} sm={2}>
              <Box display="flex" justifyContent="flex-start">
                <Link to={hm}>
                  <LogoSensie />
                </Link>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid
                item
                container
                xs={8}
                sm={8}
                direction="row"
                className={classes.textTab}
              >
                <Link to={howitworks}>
                  <Box mx={1}>HOW IT WORKS</Box>
                </Link>

                <Link to={scienceanchor}>
                  <Box mx={1}>SCIENCE</Box>
                </Link>

                <Link to={membership}>
                  <Box mx={1}>MEMBERSHIP</Box>
                </Link>

                <NavLink to={home}>
                  <Box mx={1}>BLOG</Box>
                </NavLink>

                <Link to={abs}>
                  <Box mx={1}>ABOUT SENSIE</Box>
                </Link>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item xs={3} sm={2}>
                <Box display="flex" justifyContent="flex-end">
                  <Box>
                    <a href={APP_ROUTES.dashboard + '/'}>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className={classes.btnStyle}
                      >
                        LOGIN
                      </Button>
                    </a>
                  </Box>
                  <Box>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      className={classes.btnStyle}
                    >
                      SIGN UP
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
