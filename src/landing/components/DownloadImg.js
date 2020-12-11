/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

const useStyle = makeStyles({
  root: {
    width: '116px',
    height: '44px'
  }
})

const DownloadImg = ({ ImgStore }) => {
  const classes = useStyle()
  return (
    <Box mr={2}>
      <img src={ImgStore} className={classes.root} />
    </Box>
  )
}

export default DownloadImg
