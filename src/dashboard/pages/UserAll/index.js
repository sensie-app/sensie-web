import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllUsersCognitoAction } from '../../../redux/actions/userscognito.actions'
// Componentes de MUI necesarios para la tabla y acciones
import {
  Box,
  Typography,
  Button
} from '@mui/material'
// Iconos de MUI
import styles from './styles.module.scss'
import UserTable from '../../components/UserTable'
const UserAll = () => {
  const dispatch = useDispatch()
  const { usersCognitoReducer } = useSelector(state => state)
  useEffect(() => {
    dispatch(listAllUsersCognitoAction())
    console.log('usersCognito', usersCognitoReducer.users)
  }, [dispatch])

  // --- Funciones de Manejo de Acciones ---
  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`)
    // Aquí iría la lógica para abrir un modal o navegar a una página de edición
  }

  const handleDelete = (userId) => {
    console.log(`Delete user with ID: ${userId}`)
    // Aquí iría la lógica para mostrar un diálogo de confirmación y luego llamar a la API
  }

  return (
    <section className={styles.UserAllContainer}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Administration
        </Typography>

        <UserTable users={usersCognitoReducer.users} onEdit={handleEdit} onDelete={handleDelete} />
        {/* Button to create new user, outside of the table */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="success">
            Create New User
          </Button>
        </Box>

      </Box>
    </section>
  )
}

export default UserAll
