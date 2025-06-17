// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// material-ui
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
// styles
import styles from './styles.module.scss'

// * component
/**
 * AddToPack component
 * @component
 * @param {arary} packs
 * @param {undefined} onAddToPack
 * @param {undefined} closeModal
 */
const AddToPack = ({ packs, onAddToPack, closeModal }) => {
  // ? hooks
  const [t] = useTranslation('global')
  const [packId, setPackId] = useState(null)
  const [showError, setShowError] = useState(false)

  // ? handle functions
  /**
   * handleChnage
   * @returns {string} value (state)
   */
  const handleChange = (event) => setPackId(event.target.value)

  /**
   * handleClick
   */
  const handleClick = () => {
    if (packId === null) {
      setShowError(true)
    } else {
      onAddToPack(packId)
      setShowError(false)
    }
  }

  // ? render functions
  /**
   * renderPacksItems
   * @returns {undefined} item (html)
   */
  const renderPacksItems = () => {
    return packs.map(pack => (
      <div key={pack.id} className={styles.AddToPackItemContainer}>
        <span className={styles.AddToPackItemTitle}>{pack.name}</span>
        <FormControlLabel value={pack.id} control={<Radio className={styles.AddToPackRadio} />} />
      </div>
    ))
  }

  return (
    <div className={styles.AddToPackContainer}>
      <RadioGroup aria-label="packs" name="packs" value={packId} onChange={handleChange}>
        <div className={styles.AddToPackBodyContainer}>
          {renderPacksItems()}
        </div>
      </RadioGroup>
      <div className={styles.AddToPackFooterContainer}>
        <button onClick={() => handleClick()}>{t('dashboard.AddToPack.add')}</button>
        {showError && <span className={styles.AddToPackError}>{t('dashboard.AddToPack.error')}</span>}
      </div>
    </div>
  )
}

// prop-types
AddToPack.propTypes = {
  /** packs */
  packs: PropTypes.array.isRequired,
  /** onAddToPack */
  onAddToPack: PropTypes.func.isRequired,
  /** closeModal */
  closeModal: PropTypes.func
}

export default AddToPack
