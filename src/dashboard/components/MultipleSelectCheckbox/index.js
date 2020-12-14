// react
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// material-ui
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { grayColor6, fontColor1, actionColor1 } = COLORS
const ITEM_HEIGHT = 70

// * component
const MultipleSelectCheckbox = ({ data, onClickValue, children, defValue }) => {
  // hooks
  const [items, setItems] = useState(defValue)
  const [open, setOpen] = useState(false)

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

  // handle functions
  const handleChange = event => {
    !open && handleOpen(true)
    setItems(event.target.value)
  }

  const handleOpen = (value = !open) => setOpen(value)

  // render functions
  const renderItems = () => {
    return data.map(value => (
      <MenuItem key={value.index} value={value} className={styles.MultipleSelectCheckboxMenuItem}>
        <Checkbox checked={items.indexOf(value) > -1} color={actionColor1} className={styles.MultipleSelectCheckboxMenuItemCheckbox} />
        <ListItemText primary={value.name} />
      </MenuItem>
    ))
  }

  return (
    <div className={styles.MultipleSelectCheckboxContainer} id="container">
      <Button className={styles.MultipleSelectCheckboxButton} onClick={() => handleOpen(true)}>{children}</Button>

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
  data: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
  onClickValue: PropTypes.func.isRequired,
  defValue: PropTypes.array.isRequired
}

export default MultipleSelectCheckbox
