/* eslint-disable react/prop-types */
// react
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useTranslation } from 'react-i18next'
// material-ui
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
// components
import Popover from '../Popover'
import Icon from '../Icon'
// import CircularProgress from '../CircularProgress'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// prop-types
import { MenuDataPropTypes } from '../../prop-types'

// const
const { grayColor4, grayColor6, fontColor1, actionColor1 } = COLORS
const ITEM_HEIGHT = 70

// * component
/**
 * MultipleSelectCheckbox component
 * @component
 * @param {Array.MenuData} data
 * @param {undefined} onClickValue
 * @param {undefined} children
 * @param {MenuData} defValue
 */
const MultipleSelectCheckbox = ({ data, onClickValue, children, defValue, topics }) => {
  console.log('data', data)
  console.log('topics', topics)
  // hooks
  const [items, setItems] = useState(defValue)
  const [open, setOpen] = useState(false)
  // const [t] = useTranslation('global')

  useEffect(() => setItems(defValue), [open])

  useEffect(() => onClickValue(items), [items])

  // material-ui const
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * data.length,
        width: 250,
        backgroundColor: grayColor6,
        color: fontColor1
      }
    }
  }

  // ? handle functions
  /**
   * handle changes
   * @param {Object} event event
   * @return  {boolean | undefined} open = true + items = event.target.value
   */
  const handleChange = event => {
    !open && handleOpen(true)
    setItems(event.target.value)
  }

  /**
   * handle open
   * @param {boolean} boolean setOpen
   */
  const handleOpen = (value = !open) => setOpen(value)

  /**
   * handle large name
   * @param {string} name
   * @param {number} large
   */
  const handleLargeName = (name, large) => name.substr(0, large) + '...'

  // ? render functions
  /**
   * render menu item with checkbox and label
   * @return  {undefined} MenuItem (html)
   */
  const renderItems = () => {
    return topics.value !== null && !topics.loading && topics.value.data.listTopics.items.map(value => (
      <MenuItem key={value.id} value={value} className={styles.MultipleSelectCheckboxMenuItem}>
        <Checkbox checked={items.indexOf(value) > -1} color={actionColor1} className={styles.MultipleSelectCheckboxMenuItemCheckbox} />
        <ListItemText primary={handleLargeName(value.name, 10)} />
        <div>
          <Popover text={value.description}>
            <Icon name="info-outline" color={grayColor4} size="md" />
          </Popover>
        </div>
      </MenuItem>
    ))
  }

  return (
    <div className={styles.MultipleSelectCheckboxContainer} id="container">
      <Button disabled={topics.loading} className={styles.MultipleSelectCheckboxButton} onClick={() => handleOpen(true)}>{children}</Button>
      {/* {topics.loading && <CircularProgress color={actionColor1} />} */}
      <Select
        id="select"
        onBlurCapture={e => e.relatedTarget === null && handleOpen(false)}
        autoWidth={true}
        open={open}
        multiple
        value={items}
        renderValue={() => {}}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        {renderItems()}
      </Select>
    </div>
  )
}

// prop-types
MultipleSelectCheckbox.propTypes = {
  /** data */
  data: MenuDataPropTypes, // Todo: revisar!
  /** children -> button open select */
  children: PropTypes.element.isRequired,
  /** action */
  onClickValue: PropTypes.func.isRequired,
  /** default value */
  defValue: PropTypes.array.isRequired
}

export default MultipleSelectCheckbox
