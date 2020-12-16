/* eslint-disable react/prop-types */
// react
import React, { useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// material-ui
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
  Badge
} from '@material-ui/core'
// components
import Icon from '../../components/Icon'
import ImageAvatar from '../../components/ImageAvatar'
import AlertDialog from '../../components/AlertDialog'
// import { ChangeLngBtn } from '../Globals' // btn to change languge
// constants
import DASHBOARD_ROUTES from '../../constants/routes'
import { COLORS } from '../../constants/theme'
import IMG from '../../constants/images'
// styles
import styles from './styles.module.scss'
// test
import { userTest } from './testData'

// constants
const { home, client, team } = DASHBOARD_ROUTES
const { grayColor8, fontColor1, fontColor2 } = COLORS
const { logo } = IMG
// const-sizes
const drawerWidth = 210

// * container
/**
 * Layout container
 * @component
 */
const Layout = ({ children }) => {
  // hooks
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const [t] = useTranslation('global')

  // const-items
  /** @type {Array.<Item>} */
  const listItems = [
    {
      title: <span>{t('dashboard.Layout.home').toUpperCase()}</span>,
      icon: 'home-outline',
      link: home
    },
    {
      title: <Fragment>
        <span>{t('dashboard.Layout.client').toUpperCase()}</span>
        <span>{t('dashboard.Layout.dashboard').toUpperCase()}</span>
      </Fragment>,
      icon: 'layout-outline',
      link: client
    },
    {
      title: <span>{t('dashboard.Layout.team').toUpperCase()}</span>,
      icon: 'people-outline',
      link: team
    }
  ]

  // ? handle functions
  /**
   * handle drawer open
   * @returns {boolean} open = !open
   */
  const handleDrawerOpen = () => setOpen(!open)

  // ? render functions
  /**
   * render list items
   * @returns {undefined} list items (html)
   */
  const renderListItems = () => {
    return listItems.map((item, index) =>
      <NavLink
        to={item.link}
        key={index}
        className={styles.LayoutLinkTo}
        activeClassName={styles.LayoutLinkToSelected}>
        <div className={styles.LayoutLinkToListItem}>
            <div className={styles.LayoutLinkToIcon}>
              <Icon name={item.icon} size="md" color={fontColor1} />
            </div>
            <div className={styles.LayoutLinkToTextContainer}>
              <span className={styles.LayoutLinkToText}>{item.title}</span>
            </div>
        </div>
      </NavLink>
    )
  }

  /**
   * render avatar drawer
   * @param {User} user
   * @returns {undefined} user avatar (html)
   */
  const renderAvatar = user => {
    return <div className={styles.LayoutLinkToListItem}>
      <div className={styles.LayoutAvatarImgContainer}>
        <button className={styles.LayoutAvatarBtnImg} onClick={() => handleDrawerOpen()}>
          <ImageAvatar url={user.avatar} alt={user.name} size="small" />
        </button>
      </div>
      <div className={styles.LayoutAvatarTextContainer}>
        <div className={styles.LayoutAvatarText}>
          {/* // todo: acomodar */}
          <div className={styles.LayoutAvatarNameContainer}>
            <span className={styles.LayoutAvatarNameText}>{user.name.split(' ')[0]}</span>
            <span>{user.name.split(' ')[1]}</span>
          </div>
          <div className={styles.LayoutAvatarSubTextContainer}>
            <span className={styles.LayoutAvatarSubText}>{t('dashboard.Layout.couch')}</span>
            <Icon name="arrow-ios-downward-outline" size="sm" color={fontColor2} />
          </div>
        </div>
      </div>
    </div>
  }

  return (
    <Fragment>
      <div className={styles.LayoutContainer}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <Icon name="menu-outline" size="md" color={fontColor1} />
            </IconButton>
            <div className={styles.LayoutAppBarLeftIconsContainer}>
              <img src={logo} alt="Sensie logo" width="91" />
              <div>
                {/* <ChangeLngBtn /> */}
                <IconButton aria-label="show notifications" color="inherit">
                  <Badge badgeContent={17} color="primary">
                    <Icon name="bell-outline" size="md" color={fontColor1} />
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" aria-controls="logout-menu" color="inherit" onClick={() => {}}>
                    <AlertDialog title={t('dashboard.Layout.signOut')} withLogout={true} description={t('dashboard.Layout.signOut?')} disagreeText={t('dashboard.Layout.close')}>
                      <Icon name="log-out-outline" size="md" color={fontColor1} />
                    </AlertDialog>
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [styles.LayoutDrawerOpen]: open,
            [classes.drawerClose]: !open,
            [styles.LayoutDrawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerOpen}>
              <Icon name="chevron-left-outline" size="md" color={fontColor1} />
            </IconButton>
          </div>
          <Divider />
          <List className={styles.LayoutListContainer}>
            <div>
              {renderListItems()}
            </div>
            <div>
              {renderAvatar(userTest)}
            </div>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={styles.LayoutChildrenContainer}>
            {children}
          </div>
        </main>
      </div>
    </Fragment>
  )
}

// prop-types
Layout.propTypes = {
  /** children */
  children: PropTypes.element.isRequired
}

// styles material-ui
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: grayColor8,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    color: fontColor1,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    backgroundColor: grayColor8,
    color: fontColor1,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    backgroundColor: grayColor8,
    color: fontColor1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1
    }
  },
  toolbar: {
    color: fontColor1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  },
  content: {
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

export default Layout
