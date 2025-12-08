// src/dashboard/components/UserTable.js

import React from 'react'
import PropTypes from 'prop-types' // Para validar las props
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import UserStatusChip from '../UserStatusChip'
import { COLORS } from '../../../constants/theme'
// Import individual icons
import EditIcon from '@mui/icons-material/Edit'
import LockResetIcon from '@mui/icons-material/LockReset'
import BuildIcon from '@mui/icons-material/Build'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[800],
    color: COLORS.fontColor1,
    fontWeight: 'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '0px',
    paddingLeft: '10px',
    color: COLORS.fontColor1
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.grey[900]
  },
  '&:hover': {
    backgroundColor: theme.palette.grey[700]
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

const formatNumber = (number) => {
  if (!number) return ''
  const cleanNumber = number.replace(/\D/g, '')

  if (cleanNumber.length === 10) {
    return `(${cleanNumber.slice(0, 3)})-${cleanNumber.slice(3)}`
  }
  return number
}

const splitPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return { code: '-', number: '-' }

  let code = '-'
  let number = phoneNumber

  if (phoneNumber.startsWith('+1')) {
    code = '+1'
    number = phoneNumber.slice(2)
  } else {
    const match = phoneNumber.match(/^\+(\d{2})/)
    if (match) {
      code = match[0]
      number = phoneNumber.slice(3)
    }
  }

  return { code, number: formatNumber(number) }
}

const UserTable = ({ users, onEdit, onResetPassword, onUpdateAttribute, paginationToken, onChangePage, limit }) => {
  if (!users) {
    return <Typography sx={{ mt: 2 }}>No users found.</Typography>
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: (theme) => theme.palette.grey[900] }}>
      <TableContainer component={Paper} sx={{ backgroundColor: (theme) => theme.palette.grey[900] }}>
        <Table sx={{ minWidth: 650 }} aria-label="User table">
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
          <TableBody>
            {users.map((user) => {
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
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <Tooltip title="Edit">
                        <IconButton
                          onClick={() => onEdit(user.Username)}
                          sx={{ color: COLORS.actionColor3 }} // Cyan/Blueish
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Reset Password">
                        <IconButton
                          onClick={() => onResetPassword(user.Username)}
                          sx={{ color: COLORS.actionColor4 }} // Red/Warning color for sensitive action
                        >
                          <LockResetIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Update Attribute (Pending)">
                        <IconButton
                          onClick={() => onUpdateAttribute(user.Username)}
                          sx={{ color: COLORS.fontColor2 }} // Grey/Disabled look or generic
                        >
                          <BuildIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <div style={{ color: COLORS.fontColor1, display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>Rows per page: {limit}</span>
          <button
            disabled={!paginationToken}
            onClick={() => onChangePage(1)}
            style={{
              background: 'none',
              border: 'none',
              color: paginationToken ? COLORS.actionColor1 : COLORS.grayColor4,
              cursor: paginationToken ? 'pointer' : 'default',
              fontWeight: 'bold'
            }}
          >
            Next Page &gt;
          </button>
        </div>
      </div>
    </Paper>
  )
}

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
  onResetPassword: PropTypes.func.isRequired,
  onUpdateAttribute: PropTypes.func.isRequired,
  paginationToken: PropTypes.string,
  onChangePage: PropTypes.func,
  limit: PropTypes.number
}

export default UserTable
