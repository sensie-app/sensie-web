// react
import React from 'react'
import PropTypes from 'prop-types'
// component
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS

// * component
const Chip = ({ label, withClose = true, onClose = () => {} }) => {
  return (
    <div className={styles.ChipContainer}>
      <span>{label.value}</span>
      <button onClick={() => onClose(label)}>
        {withClose && <span>
          <Icon name="close-outline" size="sm" color={fontColor1} />
        </span>}
      </button>
    </div>
  )
}

Chip.propTypes = {
  label: PropTypes.object.isRequired,
  withClose: PropTypes.bool,
  onClose: PropTypes.func
}

export default Chip
