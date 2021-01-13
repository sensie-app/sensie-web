// react
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// constants
import IMG from '../../constants/images'
import { COLORS } from '../../constants/theme'
// sytyles
import styles from './styles.module.scss'

// const
const { noImg } = IMG
const { actionColor1 } = COLORS

// * component
/**
 * Pack component
 * @component
 * @param {string} route
 * @param {string} img
 * @param {string} title
 * @param {number} totalAffirmations
 */
const Pack = ({ route, img = noImg, title, totalAffirmations }) => {
  // ? hooks
  const [t] = useTranslation('global')
  const [check, setCheck] = useState(false)

  // ? handle functions
  /**
   * handle checkbox
   * @returns {boolean} setCheck(!check)
   */
  const handleCheck = () => setCheck(!check)

  return (
    <div className={styles.PackContainer}>
      <Link to={route}>
        <div className={styles.PackImgContainer} style={{ backgroundImage: `url(${img})` }} />
      </Link>
      <Checkbox checked={check} onChange={handleCheck} color={actionColor1} className={styles.PackCheckbox} />
      <div className={styles.PackBodyContainer}>
        <span>{title}</span>
        <div>
          <span>{totalAffirmations} {t('dashboard.Pack.affirmations')}</span>
        </div>
      </div>
    </div>
  )
}

// prop-types
Pack.propTypes = {
  /** route */
  route: PropTypes.string.isRequired,
  /** img */
  img: PropTypes.string,
  /** title */
  title: PropTypes.string.isRequired,
  /** totalAffirmations */
  totalAffirmations: PropTypes.number.isRequired
}

export default Pack
