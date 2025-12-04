// src/dashboard/components/UserTable.js

import React, { useState } from 'react'
import PropTypes from 'prop-types' // Para validar las props
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import UserStatusChip from '../UserStatusChip'
import { COLORS } from '../../../constants/theme'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // 1. Fondo del encabezado: Gris muy oscuro, ligeramente más claro que el fondo
    backgroundColor: theme.palette.grey[800], // Usamos gris 800 o 900
    // 2. Color del texto del encabezado: Texto primario claro
    color: COLORS.fontColor1,
    fontWeight: 'bold' // Opcional: para destacar
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '0px',
    paddingLeft: '10px',
    color: COLORS.fontColor1
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // 1. Rayado de cebra (Zebra Striping): Usamos un gris muy oscuro (950) para un contraste mínimo.
  '&:nth-of-type(odd)': {
    // Utilizamos el color de fondo para la fila PAR (Odd/Impar) para un contraste muy suave
    backgroundColor: theme.palette.grey[900]
  },
  // 2. Fondo de la fila en Hover: Un gris más claro para que resalte
  '&:hover': {
    backgroundColor: theme.palette.grey[700]
  },
  // Ocultar el último borde
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

/**
 * Formats a 10-digit phone number to (XXX)-XXXXXXX
 * @param {string} number
 * @returns {string}
 */
const formatNumber = (number) => {
  if (!number) return ''
  // Remove non-digit characters
  const cleanNumber = number.replace(/\D/g, '')

  if (cleanNumber.length === 10) {
    return `(${cleanNumber.slice(0, 3)})-${cleanNumber.slice(3)}`
  }
  return number
}

/**
 * Helper function to split phone number into country code and number
 * Supports: USA/Canada (+1), and any 2-digit country code (e.g. +52, +55)
 * @param {string} phoneNumber
 * @returns {object} { code, number }
 */
const splitPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return { code: '-', number: '-' }

  let code = '-'
  let number = phoneNumber

  // Check for USA/Canada (+1) first as it is a specific single digit code
  if (phoneNumber.startsWith('+1')) {
    code = '+1'
    number = phoneNumber.slice(2)
  } else {
    // Check for generic + followed by 2 digits (e.g. +52, +55, +34)
    const match = phoneNumber.match(/^\+(\d{2})/)
    if (match) {
      code = match[0] // The full match like "+52"
      number = phoneNumber.slice(3) // Length of "+52" is 3
    }
  }

  // Apply formatting to the extracted number part
  return { code, number: formatNumber(number) }
}

// 1. Receive the data and the action functions as props
const UserTable = ({ users, onEdit, onDelete }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  if (!users || users.length === 0) {
    return <Typography sx={{ mt: 2 }}>No users found.</Typography>
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  // Calculate the rows to display on the current page
  const visibleRows = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: (theme) => theme.palette.grey[900] }}>
      <TableContainer component={Paper} sx={{ backgroundColor: (theme) => theme.palette.grey[900] }}>
        <Table sx={{ minWidth: 650 }} aria-label="User table">
          {/* Fixed header */}
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Code</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* Table body */}
          <TableBody>
            {visibleRows.map((user) => {
              const { code, number } = splitPhoneNumber(user.Attributes.phone_number)
              return (
                <StyledTableRow
                  key={user.Username}
                  hover
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">{user.Attributes.name}</StyledTableCell>
                  <StyledTableCell >{user.Attributes.email}</StyledTableCell>
                  <StyledTableCell >{code}</StyledTableCell>
                  <StyledTableCell >{number}</StyledTableCell>
                  <StyledTableCell >
                    <UserStatusChip userStatus={user.UserStatus} />
                  </StyledTableCell>
                  <StyledTableCell >
                    <IconButton
                      aria-label="Edit"
                      onClick={() => onEdit(user.Username)} // Call the prop
                      color="inherit"
                      sx={{ mr: 1 }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Delete"
                      onClick={() => onDelete(user.Username)} // Call the prop
                      color="inherit"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>

                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: COLORS.fontColor1 }}
      />
    </Paper>
  )
}

// 2. PropTypes definition (Good Practice)
UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      Username: PropTypes.string.isRequired,
      UserStatus: PropTypes.string,
      Attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone_number: PropTypes.string
      })
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default UserTable
