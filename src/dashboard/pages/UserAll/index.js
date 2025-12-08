import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  listAllUsersCognitoAction,
  updateCognitoUserAction,
  verifyCognitoUserAttributeAction,
  resetCognitoUserPasswordAction
} from '../../../redux/actions/userscognito.actions'
// Componentes de MUI necesarios para la tabla y acciones
import {
  Box,
  Typography
} from '@mui/material'
// Iconos de MUI
import styles from './styles.module.scss'
import UserTable from '../../components/UserTable'
import EditUserDialog from '../../components/EditUserDialog'
import Toast from '../../components/Toast' // Asumiendo que existe un componente Toast

const UserAll = () => {
  const dispatch = useDispatch()
  const { usersCognitoReducer } = useSelector(state => state)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  // Pagination State
  const [limit] = useState(10)

  useEffect(() => {
    // Initial load
    dispatch(listAllUsersCognitoAction(limit, null))
  }, [dispatch, limit])

  // --- Funciones de Manejo de Acciones ---

  const handlePageChange = (direction) => {
    if (direction === 1 && usersCognitoReducer.paginationToken) {
      dispatch(listAllUsersCognitoAction(limit, usersCognitoReducer.paginationToken))
    }
  }

  const handleEdit = (username) => {
    const user = usersCognitoReducer.users.find(u => u.Username === username)
    if (user) {
      setSelectedUser(user)
      setIsModalOpen(true)
    }
  }

  const handleResetPassword = async (username) => {
    // We could add a confirmation dialog here before resetting
    if (window.confirm(`Are you sure you want to reset the password for user ${username}?`)) {
      const result = await onResetPassword(username)
      // Toast logic is handled inside onResetPassword wrapper or here
      console.log('Reset Password result:', result)
    }
  }

  const handleUpdateAttribute = (username) => {
    // Logic for Update Attribute (likely opening another dialog or repurposing EditUserDialog)
    console.log('Update attribute for:', username)
    // Placeholder implementation
    showToast('Update Attribute functionality pending', 'info')
  }

  const handleDelete = (userId) => {
    console.log(`Delete user with ID: ${userId}`)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedUser(null)
  }

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000)
  }

  const onUpdateUser = async (username, attributes) => {
    const result = await dispatch(updateCognitoUserAction(username, attributes))
    if (result.success) {
      showToast('User updated successfully', 'success')
    } else {
      showToast(result.message, 'error')
    }
    return result
  }

  const onVerifyAttribute = async (username, attributeName, attributeValue) => {
    const result = await dispatch(verifyCognitoUserAttributeAction(username, attributeName, attributeValue))
    if (result.success) {
      showToast('Attribute verified successfully', 'success')
    } else {
      showToast(result.message, 'error')
    }
  }

  const onResetPassword = async (username) => {
    const result = await dispatch(resetCognitoUserPasswordAction(username))
    if (result.success) {
      showToast('Password reset initiated successfully', 'success')
    } else {
      showToast(result.message, 'error')
    }
    return result
  }

  return (
    <section className={styles.UserAllContainer}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Administration
        </Typography>

        {toast.show && (
          <Box sx={{ mb: 2 }}>
            <Toast type={toast.type} onClose={() => setToast({ ...toast, show: false })}>
              {toast.message}
            </Toast>
          </Box>
        )}

        <UserTable
          users={usersCognitoReducer.users}
          onEdit={handleEdit}
          onResetPassword={handleResetPassword}
          onUpdateAttribute={handleUpdateAttribute}
          onDelete={handleDelete}
          paginationToken={usersCognitoReducer.paginationToken}
          onChangePage={handlePageChange}
          limit={limit}
        />

        {selectedUser && (
          <EditUserDialog
            open={isModalOpen}
            onClose={handleCloseModal}
            user={selectedUser}
            onUpdateUser={onUpdateUser}
            onVerifyAttribute={onVerifyAttribute}
            onResetPassword={onResetPassword}
          />
        )}

      </Box>
    </section>
  )
}

export default UserAll
