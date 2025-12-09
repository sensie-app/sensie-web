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
import VerifyUserAttributeDialog from '../../components/VerifyUserAttributeDialog'
import Toast from '../../components/Toast' // Asumiendo que existe un componente Toast

const UserAll = () => {
  const dispatch = useDispatch()
  const { usersCognitoReducer } = useSelector(state => state)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  // Pagination State
  const [pageHistory, setPageHistory] = useState([null])
  const [currentPage, setCurrentPage] = useState(0)
  const [limit] = useState(10)
  const [currentFilter, setCurrentFilter] = useState(null)

  useEffect(() => {
    // Initial load
    dispatch(listAllUsersCognitoAction(limit, null, null))
  }, [dispatch, limit])

  // --- Funciones de Manejo de Acciones ---

  const handleSearch = (filter) => {
    console.log('handleSearch called in UserAll')
    console.log('Filter received:', filter)
    // Reset pagination when a new search/filter is applied
    setPageHistory([null])
    setCurrentPage(0)
    setCurrentFilter(filter)
    console.log('Dispatching listAllUsersCognitoAction with filter:', filter)
    // Fetch with new filter from page 1
    dispatch(listAllUsersCognitoAction(limit, null, filter))
  }

  const handlePageChange = (direction) => {
    if (direction === 1) {
      // Next Page
      const nextToken = usersCognitoReducer.paginationToken
      if (nextToken) {
        const newHistory = [...pageHistory.slice(0, currentPage + 1), nextToken]
        setPageHistory(newHistory)

        const nextPageIndex = currentPage + 1
        setCurrentPage(nextPageIndex)

        // Fetch using the token for the new page with current filter
        dispatch(listAllUsersCognitoAction(limit, nextToken, currentFilter))
      }
    } else if (direction === -1) {
      // Previous Page
      if (currentPage > 0) {
        const prevPageIndex = currentPage - 1
        const prevToken = pageHistory[prevPageIndex]

        setCurrentPage(prevPageIndex)
        // Fetch using the token that generated the previous page with current filter
        dispatch(listAllUsersCognitoAction(limit, prevToken, currentFilter))
      }
    }
  }

  const handleEdit = (username) => {
    const user = usersCognitoReducer.users.find(u => u.Username === username)
    if (user) {
      setSelectedUser(user)
      setIsEditModalOpen(true)
    }
  }

  const handleResetPassword = async (username) => {
    if (window.confirm(`Are you sure you want to reset the password for user ${username}?`)) {
      const result = await onResetPassword(username)
      console.log('Reset Password result:', result)
    }
  }

  const handleUpdateAttribute = (username) => {
    const user = usersCognitoReducer.users.find(u => u.Username === username)
    if (user) {
      setSelectedUser(user)
      setIsVerifyModalOpen(true)
    }
  }

  const handleDelete = (userId) => {
    console.log(`Delete user with ID: ${userId}`)
  }

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false)
    setSelectedUser(null)
  }

  const handleCloseVerifyModal = () => {
    setIsVerifyModalOpen(false)
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
    return result
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
          currentPage={currentPage}
          onSearch={handleSearch}
        />

        {selectedUser && (
          <>
            <EditUserDialog
              open={isEditModalOpen}
              onClose={handleCloseEditModal}
              user={selectedUser}
              onUpdateUser={onUpdateUser}
            />
            <VerifyUserAttributeDialog
              open={isVerifyModalOpen}
              onClose={handleCloseVerifyModal}
              user={selectedUser}
              onVerifyAttribute={onVerifyAttribute}
            />
          </>
        )}

      </Box>
    </section>
  )
}

export default UserAll
