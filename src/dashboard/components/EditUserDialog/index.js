import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Dialog, Slide, Typography, Alert } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { updateCognitoUserAction } from '../../../redux/actions/userscognito.actions'
// import Icon from '../Icon'
import { COLORS } from '../../constants/theme'
import styles from './styles.module.scss'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const { grayColor8 } = COLORS

const EditUserDialog = ({ open, onClose, user, onUpdateUser }) => {
  const dispatch = useDispatch()
  const [t] = useTranslation('global')
  const [formData, setFormData] = useState({
    name: '',
    family_name: '',
    email: '',
    phone_number: ''
  })
  const [loading, setLoading] = useState(false)
  const [showError, setShowError] = useState(false)
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.Attributes.name || '',
        family_name: user.Attributes.family_name || '',
        email: user.Attributes.email || '',
        phone_number: user.Attributes.phone_number || ''
      })
      // Clear errors when user changes or dialog opens
      setApiError(null)
      setShowError(false)
    }
  }, [user, open])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear validation error when user types
    if (showError) setShowError(false)
    if (apiError) setApiError(null)
  }

  const handleForm = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email) {
      setShowError(true)
      return
    }

    setLoading(true)
    setApiError(null)

    try {
      // Prepare attributes for Cognito
      const attributes = [
        { Name: 'name', Value: formData.name },
        { Name: 'family_name', Value: formData.family_name },
        { Name: 'email', Value: formData.email },
        { Name: 'phone_number', Value: formData.phone_number }
      ]

      let result
      if (onUpdateUser) {
        result = await onUpdateUser(user.Username, attributes)
      } else {
        result = await dispatch(updateCognitoUserAction(user.Username, attributes))
      }

      if (result && result.success) {
        onClose()
      } else {
        setApiError(result?.message || 'Error updating user')
      }
    } catch (error) {
      console.error('Error updating user:', error)
      setApiError('Unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (!user) return null

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
          backgroundColor: grayColor8 || '#071215', // Usamos un gris muy oscuro/negro
          overflow: 'hidden',
          border: '1px solid #333'
        }
      }}
    >
      <div className={styles.EditUserBody}>
        <div className={styles.EditUserHeader}>
          <Typography variant="h5" style={{ color: '#fff', fontWeight: 'bold' }}>
            Edit User
          </Typography>
        </div>

        {apiError && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {apiError}
          </Alert>
        )}

        {/* Form Section */}
        <form className={styles.EditUserBodyForm}>
          <div className={styles.EditUserBodyFormInput}>
            <label>{t('dashboard.Profile.firstName') || 'First Name'}</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={showError && !formData.name ? styles.inputBorderError : styles.inputBorder}
            />
          </div>
          <div className={styles.EditUserBodyFormInput}>
            <label>{t('dashboard.Profile.lastName') || 'Last Name'}</label>
            <input
              name="family_name"
              value={formData.family_name}
              onChange={handleInputChange}
              className={styles.inputBorder}
            />
          </div>
          <div className={styles.EditUserBodyFormInput}>
            <label>{t('dashboard.Profile.email') || 'Email'}</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={showError && !formData.email ? styles.inputBorderError : styles.inputBorder}
            />
          </div>
          <div className={styles.EditUserBodyFormInput}>
            <label>{t('dashboard.Profile.phone') || 'Phone'}</label>
            <input
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              className={styles.inputBorder}
            />
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
              {loading ? 'Saving...' : (t('dashboard.Profile.save') || 'Save')}
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  )
}

EditUserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object,
  onUpdateUser: PropTypes.func
}

export default EditUserDialog
