/* eslint-disable react/prop-types */
// react
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// material-ui
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Badge,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
// components
import Icon from '../Icon'
import ImageAvatar from '../ImageAvatar'
// constants-routes
import DASHBOARD_ROUTES from '../../constants/routes'
import { COLORS } from '../../constants/theme'
// styles
import './styles.scss'

// const-routes
const { home, client, team } = DASHBOARD_ROUTES
// const-colors
const { backgroundColor1, fontColor1, fontColor2 } = COLORS
// const-sizes
const drawerWidth = 240
// const-items
const listItems = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: home
  },
  {
    title: 'Client Dashboard',
    icon: 'layout-outline',
    link: client
  },
  {
    title: 'Team',
    icon: 'people-outline',
    link: team
  }
]
const urlTest = 'https://www.hardwoodandhollywood.com/pop-culture-spin/wp-content/uploads/sites/7/2015/12/richard.png'

const Layout = ({ children }) => {
  // hooks
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  // handle functions
  const handleDrawerOpen = () => setOpen(!open)

  // render functions
  const renderListItems = () => {
    return listItems.map((item, index) =>
      <NavLink
        to={item.link}
        key={index}
        className="LayoutLinkTo"
        activeClassName='LayoutLinkToSelected'>
        <ListItem className='LayoutLinkToListItem'>
            <ListItemIcon className="LayoutLinkToIcon"><Icon name={item.icon} size="md" color={fontColor1} /></ListItemIcon>
            <div className="LayoutLinkToTextContainer">
              <ListItemText className="LayoutLinkToText" primary={item.title} />
            </div>
        </ListItem>
      </NavLink>
    )
  }

  const renderAvatar = () => {
    return <ListItem className='LayoutAvatarListItem'>
      <ListItemIcon className="LayoutAvatarImgContainer">
        <ImageAvatar url={urlTest} size="small" />
      </ListItemIcon>
      <div className="LayoutAvatarTextContainer">
        <ListItemText className="LayoutAvatarText" primary="Richard Hendricks" />
        <div className="LayoutAvatarSubTextContainer">
          <span className="LayoutAvatarSubText">Couch</span>
          <Icon name="arrow-ios-downward-outline" size="s" color={fontColor2} />
        </div>
      </div>
    </ListItem>
  }

  return (
    <div className="LayoutContainer">
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
          <div className="LayoutAppBarLeftIconsContainer">
            <Typography variant="h6" noWrap>
              Sensie
            </Typography>
            <div>
              <IconButton aria-label="show notifications" color="inherit">
                <Badge badgeContent={17} color="primary">
                  <Icon name="bell-outline" size="md" color={fontColor1} />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" aria-controls="logout-menu" color="inherit" onClick={() => {}}>
                <Icon name="log-out-outline" size="md" color={fontColor1} />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
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
        <List className="LayoutListContainer">
          <div>
            {renderListItems()}
          </div>
          <div>
            {renderAvatar()}
          </div>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="LayoutchildrenContainer">
          {children}
        </div>
      </main>
    </div>
  )
}

// styles
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: backgroundColor1,
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
    backgroundColor: backgroundColor1,
    color: fontColor1,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    backgroundColor: backgroundColor1,
    color: fontColor1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
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
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

export default Layout
