/* eslint-disable react/prop-types */
// react
import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// material-ui
import clsx from 'clsx'
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
  Badge,
  Box,
  Typography,
  Tooltip
} from '@mui/material'
import { styled } from '@mui/material/styles'
// components
import Icon from '../../components/Icon'
import MenuListNotifications from '../../components/MenuListNotifications'
import ImageAvatar from '../../components/ImageAvatar'
import SvgIcon from '../../components/SvgIcon'
import AlertDialog from '../../components/AlertDialog'
// redux
import { useSelector } from 'react-redux'
// constants
import DASHBOARD_ROUTES from '../../constants/routes'
import { COLORS } from '../../constants/theme'
import IMG from '../../constants/images'
// styles
import styles from './styles.module.scss'
// test data
import { notificationsTest } from './testData'
import { getUrl } from '@aws-amplify/storage'

// constants
const { home, client, intentions, profile } = DASHBOARD_ROUTES
const { grayColor8, fontColor1, actionColor1 } = COLORS
const { logo, avatarFemale, avatarMale } = IMG
const drawerWidth = 210

// Styled components for Material UI 5
const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  backgroundColor: grayColor8,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  '& .MuiDrawer-paper': {
    backgroundColor: grayColor8,
    color: fontColor1,
    width: open ? drawerWidth : theme.spacing(7) + 1,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    borderRight: 'none',
    boxShadow: theme.shadows[8]
  }
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2),
  minHeight: theme.mixins.toolbar.minHeight,
  ...theme.mixins.toolbar
}))

const Layout = ({ children }) => {
  const { userReducer: { user: { data } } } = useSelector(state => state)
  const [open, setOpen] = useState(false)
  const [picture, setPicture] = useState()
  const [t] = useTranslation('global')

  const listItems = [
    {
      title: <span>{t('dashboard.Layout.home').toUpperCase()}</span>,
      icon: 'home-outline',
      link: home
    },
    {
      title: (
        <>
          <span>{t('dashboard.Layout.client').toUpperCase()}</span>
          <span>{t('dashboard.Layout.dashboard').toUpperCase()}</span>
        </>
      ),
      icon: 'layout-outline',
      link: client
    },
    {
      title: <span>{t('dashboard.Layout.intentions').toUpperCase()}</span>,
      icon: 'list-outline',
      link: intentions
    }
  ]

  const handleDrawerOpen = () => setOpen(!open)

  const renderListItems = () => {
    return listItems.map((item, index) => (
      <NavLink
        to={item.link}
        key={index}
        className={({ isActive }) =>
          clsx(styles.LayoutLinkTo, { [styles.LayoutLinkToSelected]: isActive })
        }
        onClick={() => setOpen(false)}
      >
        <div className={styles.LayoutLinkToListItem}>
          <div
            className={styles.LayoutLinkToIcon}
          >
            {item.icon !== null
              ? (
                <Icon name={item.icon} size="md" color={fontColor1} />
                )
              : (
                <SvgIcon icon={item.icon2} />
                )}
          </div>
          <div className={styles.LayoutLinkToTextContainer}>
            <span className={styles.LayoutLinkToText}>{item.title}</span>
          </div>
        </div>
      </NavLink>
    ))
  }

  const defaultAvatar = data.gender === 'Male' ? avatarMale : avatarFemale

  useEffect(() => {
    const getImage = async (k) => {
      if (k && k !== 'null') {
        const { url } = await getUrl({ path: `${k}` })
        setPicture(url.href)
      } else {
        setPicture(defaultAvatar)
      }
    }
    getImage(data.picture)
  }, [data])

  const renderAvatar = () => {
    const user = data
    return (
      <div className={styles.LayoutLinkToListItem}>
        <div className={styles.LayoutAvatarImgContainer}>
          <IconButton
            onClick={() => handleDrawerOpen()}
            sx={{
              padding: 0,
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}
          >
            <ImageAvatar url={picture || defaultAvatar} alt="avatar" size="small" />
          </IconButton>
        </div>
        <div className={styles.LayoutAvatarTextContainer}>
          <div className={styles.LayoutAvatarText}>
            <Link to={profile} onClick={() => setOpen(false)}>
              <div className={styles.LayoutAvatarNameContainer}>
                <Typography
                  variant="body2"
                  component="span"
                  className={styles.LayoutAvatarNameText}
                  sx={{
                    color: fontColor1,
                    '&:hover': { color: actionColor1 }
                  }}
                >
                  {user.firstName}
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: fontColor1,
                    '&:hover': { color: actionColor1 }
                  }}
                >
                  {user.lastName}
                </Typography>
              </div>
            </Link>
            <div className={styles.LayoutAvatarSubTextContainer}>
              <Typography
                variant="caption"
                className={styles.LayoutAvatarSubText}
                sx={{ color: COLORS.fontColor2 }}
              >
                {t('dashboard.Layout.couch')}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Box className={styles.LayoutContainer}>
        <CssBaseline />
        <StyledAppBar position="fixed" open={open}>
          <StyledToolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  color: fontColor1,
                  marginRight: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }
                }}
              >
                <Icon name="menu-outline" size="md" color={fontColor1} />
              </IconButton>
              <Box
                component="img"
                src={logo}
                alt="Sensie logo"
                sx={{
                  width: 91,
                  height: 'auto',
                  marginLeft: 2
                }}
              />
              {process.env.REACT_APP_FEAT_NOTIFICATIONS_ENABLED === 'true' && (
                <div className={styles.LayoutAppBarLeftIconsNotifications}>
                  <MenuListNotifications
                    data={notificationsTest}
                    onClickValue={(value) => console.log(value)}
                    theme={2}
                    withName={false}
                    defaultValue={null}
                  >
                    <Tooltip title="Notificaciones">
                      <IconButton
                        aria-label="show notifications"
                        color="inherit"
                        sx={{
                          color: fontColor1,
                          marginLeft: 2,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.08)'
                          }
                        }}
                      >
                        <Badge badgeContent={17} color="primary">
                          <Icon name="bell-outline" size="md" color={fontColor1} />
                        </Badge>
                      </IconButton>
                    </Tooltip>
                  </MenuListNotifications>
                </div>
              )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
              <div className={styles.LayoutAppBarLeftIconsLogout}>
                <AlertDialog
                  title={t('dashboard.Layout.signOut')}
                  withLogout={true}
                  description={t('dashboard.Layout.signOut?')}
                  disagreeText={t('dashboard.Layout.close')}
                >
                  <Tooltip title="Cerrar sesión">
                    <IconButton
                      aria-label="logout"
                      aria-controls="logout-menu"
                      color="inherit"
                      sx={{
                        color: fontColor1,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.08)'
                        }
                      }}
                    >
                      <Icon name="log-out-outline" size="md" color={fontColor1} />
                    </IconButton>
                  </Tooltip>
                </AlertDialog>
              </div>
            </Box>
          </StyledToolbar>
        </StyledAppBar>

        <StyledDrawer
          variant="permanent"
          open={open}
          className={clsx({
            [styles.LayoutDrawerOpen]: open,
            [styles.LayoutDrawerClose]: !open
          })}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: (theme) => theme.mixins.toolbar.minHeight,
              px: 1
            }}
          >
            <Tooltip title={open ? 'Cerrar menú' : 'Abrir menú'}>
              <IconButton
                onClick={handleDrawerOpen}
                sx={{
                  color: fontColor1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }
                }}
              >
                <Icon name="chevron-left-outline" size="md" color={fontColor1} />
              </IconButton>
            </Tooltip>
          </Box>
          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
          <List
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
            className={styles.LayoutListContainer}
            sx={{
              padding: 0,
              paddingTop: '12px',
              paddingBottom: '8px',
              '& .MuiListItem-root': {
                padding: 0
              }
            }}
          >
            <div>{renderListItems()}</div>
            <div>{data && renderAvatar()}</div>
          </List>
        </StyledDrawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: '100%',
            p: 3,
            backgroundColor: COLORS.grayColor7,
            minHeight: '100vh'
          }}
        >
          <Box sx={{ height: (theme) => theme.mixins.toolbar.minHeight }} />
          <div className={styles.LayoutChildrenContainer}>{children}</div>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
