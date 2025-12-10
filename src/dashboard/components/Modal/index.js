// react
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// material-ui
import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop'
import Fade from '@mui/material/Fade'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { grayColor3 } = COLORS

// * component
/**
 * ModalComponent component
 * @component
 * @param {Array.undefined} children (array) children[0]: Button Content, children[1]: Modal Content
 * @param {boolean} initialState (default: false)
 * @param {string} title (default: '')
 * @param {string} width (default: '25%')
 */
const ModalComponent = ({ children, initialState = false, title = '', width = '25%', width2 = null, onOpen, onClose, styleBtn }) => {
  // ? hooks
  const [open, setOpen] = useState(initialState)

  // ? handle functions
  const handleOpen = () => {
    setOpen(true)
    if (onOpen) {
      onOpen()
    }
  }

  const handleClose = () => {
    setOpen(false)
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className={styles.ModalComponentContainer}>
      <button type="button" onClick={handleOpen} style={{ width: width2 !== null ? width2 : undefined, ...styleBtn }}>
        {children[0]}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.ModalContainer}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style: { zIndex: '-1' }
          }
        }}
      >
        <Fade in={open}>
          <div className={styles.ModalComponentBodyContainer} style={{ width }}>
            <div className={styles.ModalComponentHeader}>
              <span>{title}</span>
              <button onClick={() => handleClose()}>
                <Icon name="close-outline" color={grayColor3} size="md" />
              </button>
            </div>
            {children[1]}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

// prop-types
ModalComponent.propTypes = {
  /** children */
  children: PropTypes.array.isRequired,
  /** handleOpen */
  initialState: PropTypes.bool,
  /** title */
  title: PropTypes.string,
  /** width */
  width: PropTypes.string,
  /** width2 */
  width2: PropTypes.string,
  /** onOpen */
  onOpen: PropTypes.func,
  /** onClose */
  onClose: PropTypes.func,
  /** styleBtn */
  styleBtn: PropTypes.object
}

export default ModalComponent
