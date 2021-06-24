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
 * @param {undefined} children
 * @param {string} title
 * @param {string} description
 * @param {string} agreeText
 * @param {string} disagreeText
 * @param {undefined} agreeOnClick (default: () => {}))
 * @param {undefined} disagreeOnClick (default: () => {})
 * @param {boolean} withLogout (default: false)
 */
const AlertDialog = ({
  children,
  title,
  description = '',
  agreeText = '',
  disagreeText = '',
  agreeColor = 'primary',
  disagreeColor = 'primary',
  agreeOnClick = () => {},
  disagreeOnClick = () => {},
  withLogout = false
}) => {
  // ? hooks
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
          <Button onClick={handleDisagreeOnClick} color={disagreeColor}>
            {disagreeText}
          </Button>
          {withLogout
            ? <button onClick={handleClose}><AmplifySignOut /></button>
            : <Button onClick={handleAgreeOnClick} color={agreeColor} autoFocus>{agreeText}</Button>
          }
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

// prop-types
AlertDialog.propTypes = {
  /** children -> open dialog button */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  /** Dialog title */
  title: PropTypes.string.isRequired,
  /** Dialog description */
  description: PropTypes.string,
  /** Dialog disagree button title */
  disagreeText: PropTypes.string,
  agreeColor: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
  disagreeColor: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
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
