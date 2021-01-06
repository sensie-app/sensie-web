// TODO:
// ! ERROR React.StrictMode -> desde Header

// react
import React, { useState, useEffect, useRef, Fragment } from 'react'
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
// import { MenuDataPropTypes } from '../../prop-types'

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
 * @param {(MenuData|null)} defaultValue (default: null)
 * @param {undefined} children
 * @param {number} theme (default: 1)
 * @param {boolean} withName (default: true)
 * @param {boolean} onlyChildren (default: false)
 */
const MenuListComposition = ({ data, onClickValue, defaultValue = null, children, theme = 1, withName = true, onlyChildren = false }) => {
  // hooks
  const [open, setOpen] = useState(false)
  const [item, setItem] = useState(defValue)
  const anchorRef = useRef(null)
  const prevOpen = useRef(open)
  const [t] = useTranslation('global')

  useEffect(() => defaultValue === null && setItem(defValue), [])
  useEffect(() => setItem(defaultValue), [defaultValue])
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
    setItem(value)
    onClickValue(value)
    handleClose(event)
  }

  /**
   * handle theme styles
   * @return {string} retrun styles
   */
  const handleThemeStyles = () => {
    const styles = {}
    styles.padding = theme === 1 ? '5px 5px' : '5px 40px'
    return styles
  }

  // ? render functions
  /**
   * render items
   * @return  {undefined} items (html)
   */
  const renderItems = () => {
    return data.length > 0 && data.map(item => {
      return (
        <button style={handleThemeStyles()} className={styles.MenuListCompositionItem} key={item.index} onClick={() => handleClick(item, event)}>
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
        {withName
          ? <Fragment>
              {children}
              <span>{t(`dashboard.MenuListComposition.${item.name}`)}</span>
              <Icon name="arrow-ios-downward-outline" color={fontColor1} size="md" />
            </Fragment>
          : children
        }
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
  // data: MenuDataPropTypes, // Todo: revisar!
  data: PropTypes.array.isRequired,
  /** click action */
  onClickValue: PropTypes.func.isRequired,
  /** default value */
  defaultValue: PropTypes.object,
  /** children -> btn open menu */
  children: PropTypes.element,
  /** theme */
  theme: PropTypes.number,
  /** withName */
  withName: PropTypes.bool,
  /** only children */
  onlyChildren: PropTypes.bool
}

export default MenuListComposition
