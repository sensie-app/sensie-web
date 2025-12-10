// react
import React from 'react'
import { Box } from '@mui/material'
// components
import CircularProgress from '../CircularProgress'

// * component
/**
 * Loading component
 */
const Loading = () => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <CircularProgress />
  </Box>
)

export default Loading
