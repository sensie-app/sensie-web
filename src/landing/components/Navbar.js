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
import { Link, NavLink } from 'react-router-dom'

import LANDING_ROUTES from '../constants/routes'

// Components
import LogoSensie from './Logo'
import CustomizedMenus from './Menu'

const { home, science, aboutsensie } = LANDING_ROUTES

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
    backgroundColor: 'rgba(7, 18, 21, 0.5)',
    minHeight: '90px'
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
                <Link to={home}>
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
                className={ classes.textTab }
              >
                    <NavLink to={home}>
                      <Box mx={1}>

                       HOW IT WORKS
                      </Box>
                    </NavLink>

                    <NavLink to={science}>
                    <Box mx={1}>

                        SCIENCE
                        </Box>

                    </NavLink>

                    <NavLink to={science}>
                    <Box mx={1}>

                       MEMBERSHIP
                       </Box>

                    </NavLink>

                    <NavLink to={science}>
                    <Box mx={1}>

                        BLOG
                        </Box>

                    </NavLink>

                    <NavLink to={aboutsensie}>
                    <Box mx={1}>

                        ABOUT SENSIE
                        </Box>

                    </NavLink>
                  </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item xs={3} sm={2}>
                <Box display="flex" justifyContent="flex-end">
                  <Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.btnStyle}
                    >
                      LOGIN
                    </Button>
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
      <div
        style={{ minHeight: '90px', backgroundColor: '#071215' }}
      ></div>
    </>
  )
}

export default Navbar
