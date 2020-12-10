// react
import React from 'react'
import PropTypes from 'prop-types'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
// styles
import styles from './styles.module.scss'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  }
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

const MultipleSelectCheckbox = ({ data = names }) => {
  const classes = useStyles()
  const [items, setItems] = React.useState([])

  const handleChange = (event) => {
    setItems(event.target.value)
  }

  return (
    <div className={styles.MultipleSelectCheckboxContainer}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={items}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {data.map((value) => (
            <MenuItem key={value} value={value}>
              <Checkbox checked={items.indexOf(value) > -1} />
              <ListItemText primary={value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

// prop-types
MultipleSelectCheckbox.propTypes = {
  data: PropTypes.array.isRequired
}

export default MultipleSelectCheckbox
