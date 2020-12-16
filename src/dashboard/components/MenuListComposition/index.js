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
} from '@material-ui/core'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// prop-types
import { MenuDataPropTypes } from '../../prop-types'

// const
const { fontColor1 } = COLORS
const defValue = {
  index: 0,
  name: 'clickHere'
}

// * component
/**
 * MenuListComposition component
 * @component
 * @param {Array.MenuData} data
 * @param {undefined} onClickValue
 * @param {(MenuData|null)} defaultValue
 * @param {undefined} children
 */
const MenuListComposition = ({ data, onClickValue, defaultValue = null, children }) => {
  // hooks
  const [open, setOpen] = useState(false)
  const [item, setItem] = useState(defValue)
  const anchorRef = useRef(null)
  const prevOpen = useRef(open)
  const [t] = useTranslation('global')

  useEffect(() => defaultValue === null && setItem(defValue), [])

  useEffect(() => {
    prevOpen.current === true && open === false && anchorRef.current.focus()
    prevOpen.current = open
  }, [open])

  useEffect(() => {
    setItem(defaultValue)
  }, [defaultValue])

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
   * @param {Array} value value
   * @param {Object} event event
   * @return  {Array | undefined | boolean}
   * item = value
   * onClickValue
   * open = false
   */
  const handleClick = (value, event) => {
    setItem(value)
    onClickValue(value)
    handleClose(event)
  }

  // ? render functions
  /**
   * render items
   * @return  {undefined} items (html)
   */
  const renderItems = () => {
    return data.map(item => {
      return (
        <button className={styles.MenuListCompositionItem} key={item.index} onClick={() => handleClick(item, event)}>
          <div>
            {t(`dashboard.MenuListComposition.${item.name}`)}
          </div>
        </button>
      )
    })
  }

  return (
    <div className={styles.MenuListCompositionContainer}>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {children}
        <span>{t(`dashboard.MenuListComposition.${item.name}`)}</span>
        <Icon name="arrow-ios-downward-outline" color={fontColor1} size="md" />
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <div className={styles.MenuListCompositionMenuContainer}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {renderItems()}
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
MenuListComposition.propTypes = {
  /** data */
  data: MenuDataPropTypes,
  /** click action */
  onClickValue: PropTypes.func.isRequired,
  /** default value */
  defaultValue: PropTypes.object,
  /** children -> btn open menu */
  children: PropTypes.element
}

export default MenuListComposition
