/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  root: {
    paddingLeft: '22px;',
    paddingRight: '22px'
  }
})

const Sponsor = ({ SponsorImg, width, height, link }) => {
  const classes = useStyle()
  return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
        src={SponsorImg}
        className={classes.root}
        style={{ width: width, height: height }}
        />
      </a>
  )
}

export default Sponsor
