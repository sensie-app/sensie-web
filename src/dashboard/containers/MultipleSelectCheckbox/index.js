/* eslint-disable react/prop-types */
// react
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useTranslation } from 'react-i18next'
// material-ui
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
// components
// import Popover from '../../components/Popover'
// import Icon from '../../components/Icon'
// constants
import { COLORS } from '../../constants/theme'
// redux
import { useSelector } from 'react-redux'
// utils
import { handleLargeName } from '../../utils/functions'
// styles
import styles from './styles.module.scss'
// test data
import { testData } from './data'

// const
const { grayColor6, fontColor1 } = COLORS

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
const MultipleSelectCheckbox = ({ onClickValue, children, defValue, disabled = false, isPacks = false }) => {
  // ? hooks
  const {
    topicsReducer: { topics },
    packsReducer: { packs }
  } = useSelector(state => state)
  const [items, setItems] = useState(defValue)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(isPacks ? packs : topics)
  // const [t] = useTranslation('global')

  useEffect(() => {
    if (isPacks) {
      setData(packs.length > 0 ? packs : testData)
    } else {
      setData(topics.length > 0 ? topics : testData)
    }
  }, [topics, packs])
  useEffect(() => setItems(defValue), [open])
  useEffect(() => onClickValue(items), [items])

  // material-ui const
  const MenuProps = {
    PaperProps: {
      style: {
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

  // ? render functions
  /**
   * render menu item with checkbox and label
   * @return  {undefined} MenuItem (html)
   */
  const renderItems = () => {
    return data.length > 0 && data.map((value, index) => (
      <MenuItem key={index} value={value} className={styles.MultipleSelectCheckboxMenuItem}>
        <Checkbox checked={items.indexOf(value) > -1} className={styles.MultipleSelectCheckboxMenuItemCheckbox} />
        <ListItemText primary={handleLargeName(value.name, 10)} />
      </MenuItem>
    ))
  }

  return (
    <div className={styles.MultipleSelectCheckboxContainer} id="container">
      <Button disabled={disabled} className={`${styles.MultipleSelectCheckboxButton} ${disabled ? styles.MultipleSelectCheckboxButtonDisabled : undefined}`} onClick={() => handleOpen(true)}>{children}</Button>
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
  disabled: PropTypes.bool,
  /** packs */
  isPacks: PropTypes.bool
}

export default MultipleSelectCheckbox
