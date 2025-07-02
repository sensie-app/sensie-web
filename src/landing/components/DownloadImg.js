/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

const useStyle = makeStyles({
  root: {
    width: '10rem',
    height: '4rem'
  }
})

const DownloadImg = ({ ImgStore, link }) => {
  const classes = useStyle()
  return (
    <Box mr={2}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={ImgStore} className={classes.root} />
      </a>
    </Box>
  )
}

export default DownloadImg
