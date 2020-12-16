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
/**
 * AlertDialog component
 * @component
 */
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

  // ? handle functions
  /**
   * handle open
   * @return  {boolean} open = true
   */
  const handleClickOpen = () => setOpen(true)

  /**
   * handle close
   * @return  {boolean} open = false
   */
  const handleClose = () => setOpen(false)

  /**
   * handle disagree action button
   * @return  {boolean | undefined} open = false + disagree action
   */
  const handleDisagreeOnClick = () => {
    handleClose()
    disagreeOnClick()
  }

  /**
   * handle agree action button
   * @return  {boolean | undefined} open = true + agree action
   */
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
  /** children -> open dialog button */
  children: PropTypes.element.isRequired,
  /** Dialog title */
  title: PropTypes.string.isRequired,
  /** Dialog description */
  description: PropTypes.string,
  /** Dialog disagree button title */
  disagreeText: PropTypes.string,
  /** Dialog disagree button action */
  disagreeOnClick: PropTypes.func,
  /** Dialog agree button title */
  agreeText: PropTypes.string,
  /** Dialog agree button action */
  agreeOnClick: PropTypes.func,
  /** change button (agree button, amplify logout button) */
  withLogout: PropTypes.bool
}

export default AlertDialog
