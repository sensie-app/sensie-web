import React from 'react'
import {
  Box,
  Typography,
  TextField,
  makeStyles,
  Button
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#151E1F',
    borderRadius: '0.9rem'
  },
  textStyle: {
    fontSize: '1.2rem',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  btnSend: {
    borderRadius: '0.8rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    width: '16rem'
  }
})

const FormFooter = () => {
  const classes = useStyles()

  return (
    <form noValidate autoComplete="off" className={classes.textStyle}>
      <Box my={5}>
        <Box mt={1}>
          <Typography>First and last name</Typography>
          <TextField fullWidth className={classes.root} variant="outlined" />
        </Box>
        <Box mt={1}>
          <Typography>Email</Typography>
          <TextField fullWidth className={classes.root} variant="outlined" />
        </Box>
        <Box mt={1}>
          <Typography>Message</Typography>
          <TextField
            fullWidth
            multiline
            className={classes.root}
            variant="outlined"
          />
        </Box>
        <Box mt={2} style={{ textAlign: 'right' }}>
          <Button
            color="primary"
            variant="outlined"
            className={classes.btnSend}
          >
            Send
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default FormFooter
