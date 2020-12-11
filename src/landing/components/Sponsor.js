/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  root: {
    paddingLeft: '22px;',
    paddingRight: '22px'
  }
})

const Sponsor = ({ SponsorImg, width, height }) => {
  const classes = useStyle()
  return (
    <img
      src={SponsorImg}
      className={classes.root}
      style={{ width: width, height: height }}
    />
  )
}

export default Sponsor
