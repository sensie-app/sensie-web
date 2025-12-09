import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Dialog, Slide, Typography, Alert, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { COLORS } from '../../constants/theme'
import styles from './styles.module.scss'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const { grayColor8 } = COLORS

const VerifyUserAttributeDialog = ({ open, onClose, user, onVerifyAttribute }) => {
  const [t] = useTranslation('global') // eslint-disable-line no-unused-vars
  const [formData, setFormData] = useState({
    attributeName: 'email',
    attributeValue: 'true'
  })
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    if (open) {
      setApiError(null)
      setFormData({
        attributeName: 'email',
        attributeValue: 'true'
      })
    }
  }, [open])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (apiError) setApiError(null)
  }

  const handleForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    setApiError(null)

    try {
      if (onVerifyAttribute) {
        const result = await onVerifyAttribute(user.Username, formData.attributeName, formData.attributeValue)
        if (result && result.success) {
          onClose()
        } else {
          setApiError(result?.message || 'Error verifying attribute')
        }
      } else {
        console.error('onVerifyAttribute prop missing')
        setApiError('Internal error: Action missing')
      }
    } catch (error) {
      console.error('Error verifying user attribute:', error)
      setApiError('Unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (!user) return null

  // Common styles to override destructive global dashboard styles
  const formControlStyles = {
    '& .MuiInputLabel-root': {
      color: COLORS.fontColor1,
      '&.Mui-focused': { color: COLORS.actionColor1 }
    },
    '& .MuiInputBase-root': {
      color: COLORS.fontColor1,
      backgroundColor: COLORS.grayColor6,
      position: 'relative !important', // Override global absolute positioning
      zIndex: 'auto !important',
      '& svg': { display: 'block !important' } // Restore dropdown icon
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent', // Default state
      borderStyle: 'solid !important' // Restore border style
    },
    '& .MuiOutlinedInput-root': {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS.actionColor1
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS.actionColor1
      }
    },
    '& .MuiSelect-icon': {
      color: COLORS.fontColor1
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: '15px',
          backgroundColor: grayColor8 || '#071215',
          overflow: 'hidden',
          border: '1px solid #333'
        }
      }}
    >
      <div className={styles.EditUserBody}>
        <div className={styles.EditUserHeader}>
          <Typography variant="h5" style={{ color: '#fff', fontWeight: 'bold' }}>
            Verify User Attribute
          </Typography>
          <Typography variant="body2" style={{ color: '#ccc', marginTop: '5px' }}>
            Manually verify an attribute for {user.Attributes.email}
          </Typography>
        </div>

        {apiError && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {apiError}
          </Alert>
        )}

        <form className={styles.EditUserBodyForm}>
          <div className={styles.EditUserBodyFormInput}>
            <FormControl fullWidth sx={formControlStyles}>
              <InputLabel id="attribute-name-label">Attribute Name</InputLabel>
              <Select
                labelId="attribute-name-label"
                name="attributeName"
                value={formData.attributeName}
                label="Attribute Name"
                onChange={handleInputChange}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: COLORS.grayColor6,
                      color: COLORS.fontColor1,
                      '& .MuiMenuItem-root:hover': { backgroundColor: COLORS.grayColor5 },
                      '& .Mui-selected': { backgroundColor: COLORS.grayColor5, color: COLORS.actionColor1 }
                    }
                  }
                }}
              >
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="phone_number">Phone Number</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={styles.EditUserBodyFormInput}>
            <FormControl fullWidth sx={formControlStyles}>
              <InputLabel id="attribute-value-label">Value</InputLabel>
              <Select
                labelId="attribute-value-label"
                name="attributeValue"
                value={formData.attributeValue}
                label="Value"
                onChange={handleInputChange}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: COLORS.grayColor6,
                      color: COLORS.fontColor1,
                      '& .MuiMenuItem-root:hover': { backgroundColor: COLORS.grayColor5 },
                      '& .Mui-selected': { backgroundColor: COLORS.grayColor5, color: COLORS.actionColor1 }
                    }
                  }
                }}
              >
                <MenuItem value="true">True (Verified)</MenuItem>
                <MenuItem value="false">False (Unverified)</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={styles.EditUserBodyFormBtn}>
            <button
              type="button"
              onClick={onClose}
              className={styles.btnCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleForm}
              disabled={loading}
              className={styles.btnSave}
            >
              {loading ? 'Saving...' : 'Verify'}
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  )
}

VerifyUserAttributeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object,
  onVerifyAttribute: PropTypes.func.isRequired
}

export default VerifyUserAttributeDialog
