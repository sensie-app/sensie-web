// TODO:
// ! ERROR React.StrictMode -> desde Header

// react
import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// material-ui
import {
  Button,
  ClickAwayListener,
  Grow,
  Popper,
  MenuList
} from '@mui/material'
// components
import ImageAvatar from '../ImageAvatar'
// import Icon from '../Icon'
// constants
// import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// * component
/**
 * MenuListNotifications component
 * @component
 * @param {Array.MenuData} data
 * @param {undefined} onClickValue
 * @param {undefined} children
 */
const MenuListNotifications = ({ data, onClickValue, children }) => {
  // ? hooks
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const prevOpen = useRef(open)
  const [t] = useTranslation('global')

  useEffect(() => {
    prevOpen.current === true && open === false && anchorRef.current.focus()
    prevOpen.current = open
  }, [open])

  // ? handle functions
  /**
   * handle open - close
   * @return  {boolean} true | false
   */
  const handleToggle = () => setOpen((prevOpen) => !prevOpen)

  /**
   * handle close
   * @param {Object} event event
   * @return  {boolean} false
   */
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }
  /**
   * handle click
   * @param {MenuData} value value
   * @param {Object} event event
   * @return  {MenuData | undefined | boolean}
   * item = value
   * onClickValue
   * open = false
   */
  const handleClick = (value, event) => {
    onClickValue(value)
    handleClose(event)
  }

  // ? render functions
  /**
   * render items
   * @return  {undefined} items (html)
   */
  const renderItems = () => {
    return data.length > 0 && data.map(item => {
      return (
        <button className={styles.MenuListNotificationsItem} key={item.index} onClick={() => handleClick(item, event)}>
          <div className={styles.MenuListNotificationsItemInfo}>
            <ImageAvatar url={item.value.url} alt={item.value.name} size="medium" />
            <b>{item.value.name}</b>
            <span>{item.value.message}</span>
          </div>
          <div className={styles.MenuListNotificationsItemTime}>
            <span>{item.value.time}</span>
          </div>
        </button>
      )
    })
  }

  return (
    <div className={styles.MenuListNotificationsContainer}>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {children}
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <div className={styles.MenuListNotificationsMenuContainer}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={!!open} id="menu-list-grow">
                  {/* header */}
                  <div className={styles.MenuListNotificationsMenuHeader}>
                    <h4>{t('dashboard.MenuListNotifications.activity')}</h4>
                    <span>{t('dashboard.MenuListNotifications.markAllAsRead')}</span>
                  </div>
                  {/* items */}
                  <div className={styles.MenuListNotificationsMenuItems}>
                    {renderItems()}
                  </div>
                  {/* footer */}
                  <div className={styles.MenuListNotificationsMenuFooter}>
                    <button>{t('dashboard.MenuListNotifications.viewAll')}</button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </div>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

// prop-types
MenuListNotifications.propTypes = {
  data: PropTypes.array.isRequired,
  /** click action */
  onClickValue: PropTypes.func.isRequired,
  /** children -> btn open menu */
  children: PropTypes.element
}

export default MenuListNotifications
