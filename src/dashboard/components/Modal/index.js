// react
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

// material-ui
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
import ItemCheckbox from '../ItemCheckbox'

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
const ModalComponent = ({ children, initialState = false, title = '', width = '25%' }) => {
  const [t] = useTranslation('global')
  // ? hooks
  const [open, setOpen] = useState(initialState)

  // ? handle functions
  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <div className={styles.ModalComponentContainer}>
      <button type="button" onClick={handleOpen}>
        {children[0]}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.ModalContainer}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div
            className={styles.ModalComponentBodyContainer}
            style={{ width: width }}
          >
            <div className={styles.ModalComponentHeader}>
              <span>{title}</span>
              <button onClick={() => handleClose()}>
                <Icon name="close-outline" color={grayColor3} size="sm" />
              </button>
            </div>
            {children[1]}
            {/* Footer */}
            <div className={styles.ShareWithContainer}>
              <div className={styles.ShareWithFooterContainer}>
                <ItemCheckbox
                defaultValue={false}
                onClick={(value) => console.log(!value)}
                >
                  <span className={styles.ShareWithItemCheckboxTitle}>
                    {t('dashboard.ShareWith.publicAvailable')}
                  </span>
                </ItemCheckbox>
                <button>{t('dashboard.ShareWith.share')}</button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

// prop-types
ModalComponent.propTypes = {
  /** children */
  children: PropTypes.element.isRequired,
  /** handleOpen */
  initialState: PropTypes.bool.isRequired,
  /** title */
  title: PropTypes.string,
  /** width */
  width: PropTypes.string
}

export default ModalComponent
