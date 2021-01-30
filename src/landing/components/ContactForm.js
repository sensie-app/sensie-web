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
    <form
      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSc3uiuw-EFUw891nzMPPiQPLeq25lWC0zc4S10PCvj7z8yUNw/formResponse"
      method="POST"
      noValidate
      autoComplete="off"
      className={classes.textStyle}
    >
      <Box my={5}>
        <Box mt={1}>
          <Typography style={{ fontSize: '1.3rem' }}>
            First and last name
          </Typography>
          <TextField
            fullWidth
            className={classes.root}
            variant="outlined"
            name="entry.2005620554"
          />
        </Box>
        <Box mt={1}>
          <Typography style={{ fontSize: '1.3rem' }}>Email</Typography>
          <TextField
            fullWidth
            className={classes.root}
            variant="outlined"
            name="entry.1045781291"
          />
        </Box>
        <Box mt={1}>
          <Typography style={{ fontSize: '1.3rem' }}>Message</Typography>
          <TextField
            fullWidth
            multiline
            className={classes.root}
            variant="outlined"
            name="entry.1641793364"
          />
        </Box>
        <Box mt={2} style={{ textAlign: 'right' }}>
          <Button
            color="primary"
            variant="outlined"
            className={classes.btnSend}
            type="submit"
          >
            Send
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default FormFooter
