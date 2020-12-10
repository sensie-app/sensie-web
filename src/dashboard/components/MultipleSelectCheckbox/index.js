// react
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
// material-ui
// import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const {
  grayColor6,
  fontColor1,
  actionColor1
} = COLORS
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: grayColor6,
      color: fontColor1
    }
  }
}

const MultipleSelectCheckbox = ({ data, title = '', onClickValue }) => {
  // hooks
  const [items, setItems] = useState([])
  const [count, setCount] = useState(0)

  // handle functions
  const handleChange = event => {
    setItems(event.target.value)
    onClickValue(items)
  }

  // render functions
  const renderItems = () => {
    return data.map(value => (
      <MenuItem key={value.index} value={value} className={styles.MultipleSelectCheckboxMenuItem}>
        <Checkbox checked={items.indexOf(value) > -1} color={actionColor1} className={styles.MultipleSelectCheckboxMenuItemCheckbox} />
        <ListItemText primary={value.key} />
      </MenuItem>
    ))
  }

  return (
    <Fragment>
      <InputLabel
        id="demo-mutiple-checkbox-label"
        disableAnimation={true}
        shrink={true}
        variant="standard"
        classes={styles.test}
      >
        <div className={styles.MultipleSelectCheckboxTextContainer}>
          <span className={styles.MultipleSelectCheckboxInputCount}>{count}</span>
          <span>{title}</span>
        </div>
      </InputLabel>
      <Select
        autoWidth={true}
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={items}
        onChange={handleChange}
        // input={<Input />}
        renderValue={(selected) => setCount(selected.length)}
        MenuProps={MenuProps}
      >
        {renderItems()}
      </Select>
    </Fragment>
  )
}

// prop-types
MultipleSelectCheckbox.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  onClickValue: PropTypes.func
}

export default MultipleSelectCheckbox
