// react
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// components
import Title from '../Title'
// styles
import styles from './styles.module.scss'

// * component
/**
 * TitleAndButton
 * @component
 * @param {string} title
 * @param {string} route
 * @param {string} btnTitle
 */
const TitleAndButton = ({ title, route, btnTitle }) => {
  return (
    <div className={styles.TrackAffirmationsHeaderContainer}>
      <div className={styles.TrackAffirmationsHeaderTitleContainer}>
        <Title text={title} />
      </div>
      <div className={styles.TrackAffirmationsHeaderBtnContainer}>
        <Link to={route}>
          <button>{btnTitle}</button>
        </Link>
      </div>
    </div>
  )
}

TitleAndButton.propTypes = {
  /** title */
  title: PropTypes.string.isRequired,
  /** route */
  route: PropTypes.string.isRequired,
  /** btnTitle */
  btnTitle: PropTypes.string.isRequired
}

export default TitleAndButton
