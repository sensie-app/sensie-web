import React from 'react'
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

import LANDING_ROUTES from '../constants/routes'
import APP_ROUTES from '../../constants/routes'

// Components
import LogoSensie from './Logo'
import CustomizedMenus from './Menu'

const { /* membership, */ howitworks, blog, scienceanchor, abs, contact, hm } = LANDING_ROUTES

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(7, 18, 21, 0.8)',
  minHeight: '8rem',
  backdropFilter: 'blur(10px)'
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '8rem'
}))

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '0.8rem',
  margin: theme.spacing(1),
  fontSize: '1rem',
  fontWeight: 'bold',
  width: '8.2rem',
  height: '3.5rem'
}))

const Navbar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <Grid container alignItems="center" sx={{ minHeight: '8rem' }}>
            {isMobile && (
              <Grid item xs={1}>
                <CustomizedMenus />
              </Grid>
            )}
            <Grid item xs={11} sm={2}>
              <Box ml={2}>
                <Link to={hm}>
                  <LogoSensie />
                </Link>
              </Box>
            </Grid>
            {isDesktop && (
              <>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  container
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

                  {/* <Link to={membership}>
                    <Box mx={1}>MEMBERSHIP</Box>
                  </Link> */}

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
                          <StyledButton
                            variant="contained"
                            color="secondary"
                            size="large"
                          >
                            LOGIN
                          </StyledButton>
                        </a>
                      </Box>
                      <Box>
                        <a href={APP_ROUTES.dashboard + '/signup'}>
                          <StyledButton
                            variant="outlined"
                            color="primary"
                            size="small"
                          >
                            SIGN UP
                          </StyledButton>
                        </a>
                      </Box>
                    </Box>
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </StyledToolbar>
      </StyledAppBar>
    </>
  )
}

export default Navbar
