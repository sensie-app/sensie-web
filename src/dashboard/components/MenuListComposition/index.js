/* eslint-disable react/prop-types */

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

// const
const { fontColor1 } = COLORS
const defValue = {
  index: 0,
  key: 'clickHere'
}

const MenuListComposition = ({ data, onClickValue, defaultValue = defValue }) => {
  // hooks
  const [open, setOpen] = useState(false)
  const [item, setItem] = useState(defValue)
  const anchorRef = useRef(null)
  const prevOpen = useRef(open)
  const [t] = useTranslation('global')

  useEffect(() => {
    prevOpen.current === true && open === false && anchorRef.current.focus()
    prevOpen.current = open
  }, [open])

  useEffect(() => {
    setItem(defaultValue)
  }, [defaultValue])

  // handle functions
  const handleToggle = () => setOpen((prevOpen) => !prevOpen)

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const handleClick = (value, event) => {
    setItem(value)
    onClickValue(value)
    handleClose(event)
  }

  // render functions
  const renderItems = () => {
    return data.map(item => {
      return (
        <button className={styles.MenuListCompositionItem} key={item.index} onClick={() => handleClick(item, event)}>
          <div>
            {t(`dashboard.MenuListCompositionComponent.${item.key}`)}
          </div>
        </button>
      )
    })
  }

  return (
    <div className={styles.MenuListCompositionContainer}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <span>{t(`dashboard.MenuListCompositionComponent.${item.key}`)}</span>
          <Icon name="arrow-ios-downward-outline" size="md" color={fontColor1} />
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
    </div>
  )
}

// prop-types
MenuListComposition.propTypes = {
  data: PropTypes.array.isRequired,
  onClickValue: PropTypes.func.isRequired,
  defaultValue: PropTypes.object
}

export default MenuListComposition
