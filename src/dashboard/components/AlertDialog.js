// react
import React, { Fragment } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { onClearAff } from '../../redux/actions/affirmations.actions'
import { onClearCheckbox } from '../../redux/actions/checkbox.actions'
import { onClearFilters } from '../../redux/actions/filters.actions'
import { onClearInvitations } from '../../redux/actions/invitations.actions'
import { onClearPacks } from '../../redux/actions/packs.actions'
import { onClearPagination } from '../../redux/actions/pagination.actions'
import { onClearShow } from '../../redux/actions/show.actions'
import { onClearTopics } from '../../redux/actions/topics.action'
import { onClearUser } from '../../redux/actions/user.actions'
import { onClearUsers } from '../../redux/actions/users.actions'

import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
// amplify
// import { AmplifySignOut } from '@aws-amplify/ui-react'
// import { Auth } from 'aws-amplify'
import { useAuthenticator } from '@aws-amplify/ui-react'
// material-ui
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

// mixpanel
import { trackEvents } from '../../utils/mixpanel'

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
  const dispatch = useDispatch()
  // ? hooks
  const { signOut } = useAuthenticator()
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()
  // ? handle functions
  /**
   * handle open
   * @return  {boolean} open = true
   */
  const handleClickOpen = () => setOpen(true)

  const handleAuthStateChange = state => {
    if (state === 'signedout') {
      dispatch(onClearAff())
      dispatch(onClearCheckbox())
      dispatch(onClearFilters())
      dispatch(onClearInvitations())
      dispatch(onClearPacks())
      dispatch(onClearPagination())
      dispatch(onClearShow())
      dispatch(onClearTopics())
      dispatch(onClearUser())
      dispatch(onClearUsers())
      navigate('/dashboard')
    }
  }

  const handleSignOut = async () => {
    try {
      // Track manual logout
      trackEvents.userLogout()
      await signOut()
      handleAuthStateChange('signedout')
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

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
      <div onClick={handleClickOpen} style={{ cursor: 'pointer' }}>
        {children}
      </div>
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
            ? <Button onClick={handleSignOut} color={agreeColor} autoFocus>{agreeText} Sign Out</Button>
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
