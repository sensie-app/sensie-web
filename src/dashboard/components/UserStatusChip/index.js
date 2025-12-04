import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import { STATUS_CONFIG } from './constans'

/**
 * Component to display Cognito user status using MUI Chip with a descriptive Tooltip
 * @param {string} userStatus - The status of the user (e.g., 'CONFIRMED')
 */
const UserStatusChip = ({ userStatus }) => {
  const config = STATUS_CONFIG[userStatus] || STATUS_CONFIG.DEFAULT

  return (
    <Box sx={{ minWidth: 180 }}>
      <Tooltip title={config.description} arrow placement="top">
        <Chip
          label={config.label}
          color={config.color}
          size="small"
          variant="filled" // Use 'outlined' for less contrast
        />
      </Tooltip>
    </Box>
  )
}

UserStatusChip.propTypes = {
  userStatus: PropTypes.string
}

export default UserStatusChip
