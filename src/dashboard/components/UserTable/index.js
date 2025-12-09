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
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import UserStatusChip from '../UserStatusChip'
import Loading from '../Loading'
import { COLORS } from '../../../constants/theme'
// Import individual icons
import EditIcon from '@mui/icons-material/Edit'
import LockResetIcon from '@mui/icons-material/LockReset'
import BuildIcon from '@mui/icons-material/Build'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
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

const UserTable = ({ users, onEdit, onResetPassword, onUpdateAttribute, paginationToken, onChangePage, limit, currentPage, onSearch, loading }) => {
  const [searchEmail, setSearchEmail] = useState('')

  const handleSearchClick = () => {
    if (searchEmail.trim()) {
      // Build Cognito filter syntax: email ^= "value" (starts with)
      const filter = `email ^= "${searchEmail.trim()}"`
      onSearch(filter)
    }
  }

  const handleClearClick = () => {
    setSearchEmail('')
    onSearch(null) // Clear filter
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick()
    }
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: (theme) => theme.palette.grey[900] }}>
      {/* Search Filter Section */}
      <div style={{
        padding: '15px 20px',
        backgroundColor: COLORS.grayColor7,
        borderBottom: `1px solid ${COLORS.grayColor4}`,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Typography variant="body2" style={{ color: COLORS.fontColor1, minWidth: '120px' }}>
          Search by Email:
        </Typography>
        <input
          type="text"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter email to search..."
          style={{
            flex: 1,
            padding: '8px 12px',
            backgroundColor: COLORS.grayColor6,
            color: COLORS.fontColor1,
            border: `1px solid ${COLORS.grayColor4}`,
            borderRadius: '4px',
            fontSize: '14px',
            outline: 'none'
          }}
        />
        <Tooltip title="Search">
          <IconButton
            onClick={handleSearchClick}
            sx={{
              color: COLORS.actionColor1,
              backgroundColor: COLORS.grayColor6,
              '&:hover': { backgroundColor: COLORS.grayColor5 }
            }}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Clear Filter">
          <IconButton
            onClick={handleClearClick}
            sx={{
              color: COLORS.fontColor2,
              backgroundColor: COLORS.grayColor6,
              '&:hover': { backgroundColor: COLORS.grayColor5 }
            }}
          >
            <ClearIcon />
          </IconButton>
        </Tooltip>
      </div>

      <TableContainer component={Paper} sx={{ backgroundColor: (theme) => theme.palette.grey[900], minHeight: '300px' }}>
        {loading
          ? (
              <Loading />
            )
          : !users || users.length === 0
              ? (
                  <div style={{ padding: '50px', textAlign: 'center' }}>
                    <Typography sx={{ color: COLORS.fontColor1 }}>No users found.</Typography>
                  </div>
                )
              : (
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
                                sx={{ color: COLORS.actionColor3 }}
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Reset Password">
                              <IconButton
                                onClick={() => onResetPassword(user.Username)}
                                sx={{ color: COLORS.actionColor4 }}
                              >
                                <LockResetIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Update Attribute">
                              <IconButton
                                onClick={() => onUpdateAttribute(user.Username)}
                                sx={{ color: COLORS.fontColor2 }}
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
                )}
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <div style={{ color: COLORS.fontColor1, display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>Rows per page: {limit}</span>
          <button
            disabled={currentPage <= 0}
            onClick={() => onChangePage(-1)}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage > 0 ? COLORS.actionColor1 : COLORS.grayColor4,
              cursor: currentPage > 0 ? 'pointer' : 'default',
              fontWeight: 'bold',
              marginRight: '15px'
            }}
          >
            &lt; Prev Page
          </button>
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
  ),
  onEdit: PropTypes.func.isRequired,
  onResetPassword: PropTypes.func.isRequired,
  onUpdateAttribute: PropTypes.func.isRequired,
  paginationToken: PropTypes.string,
  onChangePage: PropTypes.func,
  limit: PropTypes.number,
  currentPage: PropTypes.number,
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export default UserTable
