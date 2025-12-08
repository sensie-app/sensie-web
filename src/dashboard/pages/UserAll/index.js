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
  Typography,
  Button
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
  // We keep a history of tokens to allow "Previous" functionality if needed,
  // though basic token pagination is often just forward-only or requires caching.
  // For now, let's implement simple forward pagination.
  // We can also reset to first page.
  const [limit] = useState(10)

  useEffect(() => {
    // Initial load
    dispatch(listAllUsersCognitoAction(limit, null))
  }, [dispatch, limit])

  // --- Funciones de Manejo de Acciones ---
  const handlePageChange = (direction) => {
    // direction: 1 for next
    // For now we only support "Next" with token, as we don't have "Previous" token from API
    // To implement "Previous", we'd need to store the token stack in local state
    if (direction === 1 && usersCognitoReducer.paginationToken) {
      dispatch(listAllUsersCognitoAction(limit, usersCognitoReducer.paginationToken))
    }
    // If we wanted "Previous", we would pop from a history stack.
  }

  const handleEdit = (username) => {
    // Find full user object
    const user = usersCognitoReducer.users.find(u => u.Username === username)
    if (user) {
      setSelectedUser(user)
      setIsModalOpen(true)
    }
  }

  const handleDelete = (userId) => {
    console.log(`Delete user with ID: ${userId}`)
    // Aquí iría la lógica para mostrar un diálogo de confirmación y luego llamar a la API de borrado si existe
    // Por ahora solo log
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
          onDelete={handleDelete}
          paginationToken={usersCognitoReducer.paginationToken}
          onChangePage={handlePageChange}
          limit={limit}
        />

        {/* Button to create new user, outside of the table */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="success">
            Create New User
          </Button>
        </Box>

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
