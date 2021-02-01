// react
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Storage } from 'aws-amplify'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// constants
import IMG from '../../constants/images'
// sytyles
import styles from './styles.module.scss'

// const
const { noImg } = IMG

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
  const [uri, setUri] = useState('')

  const getImage = async function (k) {
    return (k ? await Storage.get(k) : noImg)
  }
  useEffect(() => {
    getImage(img).then(d => setUri(d))
  }, [])

  // ? handle functions
  /**
   * handle checkbox
   * @returns {boolean} setCheck(!check)
   */
  const handleCheck = () => setCheck(!check)

  return (
    <div className={styles.PackContainer}>
      <Link to={route}>
        <div className={styles.PackImgContainer} style={{ backgroundImage: `url(${uri})` }} />
      </Link>
      <Checkbox checked={check} onChange={handleCheck} className={styles.PackCheckbox} />
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
