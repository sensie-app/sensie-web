// react
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// amplify
import { AmplifySignOut } from '@aws-amplify/ui-react'
// material-ui
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

// * componet
const AlertDialog = ({
  children,
  title,
  description = '',
  agreeText = '',
  disagreeText = '',
  agreeOnClick = () => {},
  disagreeOnClick = () => {},
  withLogout = false
}) => {
  // hooks
  const [open, setOpen] = React.useState(false)

  // handle functions
  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleDisagreeOnClick = () => {
    handleClose()
    disagreeOnClick()
  }

  const handleAgreeOnClick = () => {
    handleClose()
    agreeOnClick()
  }

  return (
    <Fragment>
      <Button onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagreeOnClick} color="primary">
            {disagreeText}
          </Button>
          {withLogout
            ? <button onClick={handleClose}><AmplifySignOut /></button>
            : <Button onClick={handleAgreeOnClick} color="primary" autoFocus>{agreeText}</Button>
          }
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

// prop-types
AlertDialog.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  disagreeText: PropTypes.string,
  disagreeOnClick: PropTypes.func,
  agreeText: PropTypes.string,
  agreeOnClick: PropTypes.func,
  withLogout: PropTypes.bool
}

export default AlertDialog
