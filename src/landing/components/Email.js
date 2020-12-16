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
        <form noValidate autoComplete="off">
            <TextField fullWidth className={classes.root} variant="outlined" />

</form>
  )
}

export default Email
