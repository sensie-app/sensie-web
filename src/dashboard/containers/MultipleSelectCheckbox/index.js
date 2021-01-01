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
import Popover from '../../components/Popover'
import Icon from '../../components/Icon'
// constants
import { COLORS } from '../../constants/theme'
// redux
import { useSelector } from 'react-redux'
// styles
import styles from './styles.module.scss'
// test data
import { testData } from './data'

// const
const { grayColor4, grayColor6, fontColor1, actionColor1 } = COLORS
const ITEM_HEIGHT = 70

// * containers
/**
 * MultipleSelectCheckbox containers
 * @component
 * @param {Array.Menutopics} topics
 * @param {undefined} onClickValue
 * @param {undefined} children
 * @param {Menutopics} defValue
 * @param {boolean} disabled (default: false)
 */
const MultipleSelectCheckbox = ({ onClickValue, children, defValue, disabled = false }) => {
  // hooks
  const { topicsReducer: { topics } } = useSelector(state => state)
  const [items, setItems] = useState(defValue)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(topics)
  // const [t] = useTranslation('global')

  useEffect(() => setData(topics.length > 0 ? topics : testData), [])
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
  const handleLargeName = (name, large) => name.length > large ? name.substr(0, large) + '...' : name

  // ? render functions
  /**
   * render menu item with checkbox and label
   * @return  {undefined} MenuItem (html)
   */
  const renderItems = () => {
    return data.length > 0 && data.map(value => (
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
      <Button disabled={disabled} className={styles.MultipleSelectCheckboxButton} onClick={() => handleOpen(true)}>{children}</Button>
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
        { renderItems() }
      </Select>
    </div>
  )
}

// prop-types
MultipleSelectCheckbox.propTypes = {
  /** children -> button open select */
  children: PropTypes.element.isRequired,
  /** action */
  onClickValue: PropTypes.func.isRequired,
  /** default value */
  defValue: PropTypes.array.isRequired,
  /** disabled */
  disabled: PropTypes.bool
}

export default MultipleSelectCheckbox
