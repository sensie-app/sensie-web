// Status Configuration with English labels and descriptions
export const STATUS_CONFIG = {
  UNCONFIRMED: {
    label: 'Confirmation Pending',
    color: 'warning', // Yellow for alert
    description: 'User has been created but not confirmed.'
  },
  CONFIRMED: {
    label: 'Confirmed',
    color: 'success', // Green for s
    description: 'User has been confirmed.'
  },
  EXTERNAL_PROVIDER: {
    label: 'External Provider',
    color: 'info', // Blue for information
    description: 'User signed in with a third-party IdP.'
  },
  RESET_REQUIRED: {
    label: 'Reset Required',
    color: 'error', // Red for critical issue
    description: 'User is confirmed, but the user must request a code and reset their password before they can sign in.'
  },
  FORCE_CHANGE_PASSWORD: {
    label: 'Force Change Password',
    color: 'secondary', // Secondary color (Purple/Grey)
    description: 'The user is confirmed and the user can sign in using a temporary password, but on first sign-in, the user must change their password to a new value before doing anything else.'
  },
  DEFAULT: {
    label: 'Unknown',
    color: 'default',
    description: 'Unknown status'
  }
}
