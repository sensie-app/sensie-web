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
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
// components
// import Popover from '../../components/Popover'
// import Icon from '../../components/Icon'
// constants
import { COLORS } from '../../constants/theme'
// redux
import { useSelector } from 'react-redux'
// utils
import { handleLargeName } from '../../utils/functions'
// test data
import { testData } from './data'

// const
const { grayColor6, fontColor1, actionColor1 } = COLORS

// Styled components for Material UI 5
const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%'
})

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'disabled'
})(({ theme, disabled }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  opacity: disabled ? 0.8 : 1,
  color: fontColor1,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 0,
  '&:hover, &:focus, &:active': {
    border: 'none',
    backgroundColor: 'transparent'
  },
  '& .MuiButton-startIcon': {
    color: fontColor1,
    marginRight: theme.spacing(1.25)
  }
}))

const StyledSelect = styled(Select)({
  '& .MuiSelect-select': {
    padding: 0
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
})

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '& .MuiCheckbox-root': {
    color: `${actionColor1} !important`
  },
  '& .MuiListItemText-root': {
    paddingRight: theme.spacing(1.25)
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}))

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
  }, [topics, packs, isPacks])

  useEffect(() => setItems(defValue), [open, defValue])
  useEffect(() => onClickValue(items), [items, onClickValue])

  // material-ui const
  const MenuProps = {
    PaperProps: {
      sx: {
        width: 250,
        backgroundColor: grayColor6,
        color: fontColor1,
        '& .MuiMenuItem-root': {
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)'
          }
        }
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
    if (!open) {
      handleOpen(true)
    }
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
      <StyledMenuItem key={index} value={value}>
        <Checkbox
          checked={items.indexOf(value) > -1}
          sx={{ color: actionColor1 }}
        />
        <ListItemText primary={handleLargeName(value.name, 10)} />
      </StyledMenuItem>
    ))
  }

  return (
    <StyledContainer id="container">
      <StyledButton
        disabled={disabled}
        onClick={() => handleOpen(true)}
        sx={{
          '&.Mui-disabled': {
            opacity: 0.8
          }
        }}
      >
        {children}
      </StyledButton>
      <StyledSelect
        id="select"
        onBlurCapture={e => e.relatedTarget === null && handleOpen(false)}
        autoWidth
        open={open}
        multiple
        value={items}
        renderValue={() => {}}
        onChange={handleChange}
        MenuProps={MenuProps}
        sx={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none'
        }}
      >
        { renderItems() }
      </StyledSelect>
    </StyledContainer>
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
