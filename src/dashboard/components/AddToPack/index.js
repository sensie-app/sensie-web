// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// material-ui
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// styles
import styles from './styles.module.scss'

// * component
/**
 * AddToPack component
 * @component
 * @param {arary} packs
 */
const AddToPack = ({ packs }) => {
  // hooks
  const [t] = useTranslation('global')
  const [value, setValue] = useState(null)

  // ? handle functions
  /**
   * handleChnage
   * @returns {string} value (state)
   */
  const handleChange = (event) => setValue(event.target.value)

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
      <RadioGroup aria-label="packs" name="packs" value={value} onChange={handleChange}>
        <div className={styles.AddToPackBodyContainer}>
          {renderPacksItems()}
        </div>
      </RadioGroup>
      <div className={styles.AddToPackFooterContainer}>
        <button>{t('dashboard.AddToPack.add')}</button>
      </div>
    </div>
  )
}

// prop-types
AddToPack.propTypes = {
  packs: PropTypes.array.isRequired
}

export default AddToPack
