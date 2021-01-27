import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#151E1F',
    borderRadius: 10
  }
})

const Email = () => {
  const classes = useStyles()
  return (
        <form id="mc-embedded-subscribe-form" action="https://Sensieapp.us14.list-manage.com/subscribe/post?u=1d3a330059900e75b4cbd38d4&amp;id=292a1f4049" method="post" noValidate autoComplete="off">
            <TextField fullWidth name="MERGE0" className={classes.root} variant="outlined" />

</form>
  )
}

export default Email
