/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core'
import './Title.scss'

const useStyle = makeStyles({
  title: {
    color: 'white',
    fontSize: '50px',
    fontWeight: 'bold'
  },
  centerTitle: {
    textAlign: 'center'
  }
})

const Title = ({ title, centerTitle }) => {
  const classes = useStyle()
  return (
    <p
      className={`${classes.title} ${centerTitle ? 'titleCenter' : ''}`}
    >
      { title }
    </p>
  )
}

export default Title
