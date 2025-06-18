/* eslint-disable react/prop-types */
// react
import React, { useState, Fragment, useEffect } from 'react'
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
  Box
} from '@mui/material'
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
import { Storage } from 'aws-amplify'

// constants
const { home, client, intentions, profile } = DASHBOARD_ROUTES
const { grayColor8, fontColor1 } = COLORS
const { logo, avatarFemale, avatarMale } = IMG
const drawerWidth = 210

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
        <Fragment>
          <span>{t('dashboard.Layout.client').toUpperCase()}</span>
          <span>{t('dashboard.Layout.dashboard').toUpperCase()}</span>
        </Fragment>
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
        className={styles.LayoutLinkTo}
        activeClassName={styles.LayoutLinkToSelected}
        onClick={() => setOpen(false)}
      >
        <div className={styles.LayoutLinkToListItem}>
          <div className={styles.LayoutLinkToIcon}>
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
      const img = (k && k !== 'null') ? await Storage.get(k) : defaultAvatar
      setPicture(img)
    }
    getImage(data.picture)
  }, [data])

  const renderAvatar = () => {
    const user = data
    return (
      <div className={styles.LayoutLinkToListItem}>
        <div className={styles.LayoutAvatarImgContainer}>
          <button className={styles.LayoutAvatarBtnImg} onClick={() => handleDrawerOpen()}>
            <ImageAvatar url={picture || defaultAvatar} alt="avatar" size="small" />
          </button>
        </div>
        <div className={styles.LayoutAvatarTextContainer}>
          <div className={styles.LayoutAvatarText}>
            <Link to={profile} onClick={() => setOpen(false)}>
              <div className={styles.LayoutAvatarNameContainer}>
                <span className={styles.LayoutAvatarNameText}>{user.firstName}</span>
                <span>{user.lastName}</span>
              </div>
            </Link>
            <div className={styles.LayoutAvatarSubTextContainer}>
              <span className={styles.LayoutAvatarSubText}>{t('dashboard.Layout.couch')}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <Box className={styles.LayoutContainer}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: grayColor8,
            zIndex: (theme) => theme.zIndex.drawer + 1,
            transition: (theme) => theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen
            }),
            ...(open && {
              marginLeft: drawerWidth,
              width: `calc(100% - ${drawerWidth}px)`,
              transition: (theme) => theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
              })
            })
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                color: fontColor1,
                marginRight: 3,
                ...(open && { display: 'none' })
              }}
            >
              <Icon name="menu-outline" size="md" color={fontColor1} />
            </IconButton>
            <div className={styles.LayoutAppBarLeftIconsContainer}>
              <img src={logo} alt="Sensie logo" width="91" />
              <div>
                {process.env.REACT_APP_FEAT_NOTIFICATIONS_ENABLED === 'true'
                  ? (
                  <div className={styles.LayoutAppBarLeftIconsNotifications}>
                    <MenuListNotifications
                      data={notificationsTest}
                      onClickValue={(value) => console.log(value)}
                      theme={2}
                      withName={false}
                      defaultValue={null}
                    >
                      <IconButton aria-label="show notifications" color="inherit">
                        <Badge badgeContent={17} color="primary">
                          <Icon name="bell-outline" size="md" color={fontColor1} />
                        </Badge>
                      </IconButton>
                    </MenuListNotifications>
                  </div>
                    )
                  : null}
                <div className={styles.LayoutAppBarLeftIconsLogout}>
                  <AlertDialog
                    title={t('dashboard.Layout.signOut')}
                    withLogout={true}
                    description={t('dashboard.Layout.signOut?')}
                    disagreeText={t('dashboard.Layout.close')}
                  >
                    <IconButton
                      aria-label="logout"
                      aria-controls="logout-menu"
                      color="inherit"
                    >
                      <Icon name="log-out-outline" size="md" color={fontColor1} />
                    </IconButton>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            '& .MuiDrawer-paper': {
              backgroundColor: grayColor8,
              color: fontColor1,
              width: open ? drawerWidth : (theme) => theme.spacing(7) + 1,
              overflowX: 'hidden',
              transition: (theme) => theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
              }),
              ...(open
                ? {}
                : {})
            }
          }}
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
            <IconButton onClick={handleDrawerOpen}>
              <Icon name="chevron-left-outline" size="md" color={fontColor1} />
            </IconButton>
          </Box>
          <Divider />
          <List
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
            className={styles.LayoutListContainer}
          >
            <div>{renderListItems()}</div>
            <div>{data && renderAvatar()}</div>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: '100%',
            p: 3
          }}
        >
          <Box sx={{ height: (theme) => theme.mixins.toolbar.minHeight }} />
          <div className={styles.LayoutChildrenContainer}>{children}</div>
        </Box>
      </Box>
    </Fragment>
  )
}
Layout.propTypes = {
  children: PropTypes.array
}
export default Layout
