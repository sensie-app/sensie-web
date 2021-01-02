// react
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// component
import TopicItem from '../TopicItem'
// constants
import IMG from '../../constants/images'
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { noImg } = IMG
const { actionColor1 } = COLORS

// * component
/**
 * Topic component
 * @component
 * @param {string} route
 * @param {string} img
 * @param {string} title
 * @param {string} topic
 */
const Topic = ({ route, img = noImg, title, topic }) => {
  const [check, setCheck] = useState(false)

  // ? handle functions
  /**
   * handle checkbox
   * @returns {boolean} setCheck(!check)
   */
  const handleCheck = () => setCheck(!check)

  return (
    <div className={styles.TopicContainer} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.TopicBodyContainer}>
        <Checkbox checked={check} onChange={handleCheck} color={actionColor1} className={styles.TopicCheckbox} />
        <Link to={route}>
          <div>
            <TopicItem topic={topic} />
            <span>{title}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

// prop-types
Topic.propTypes = {
  /** route */
  route: PropTypes.string.isRequired,
  /** img */
  img: PropTypes.string,
  /** title */
  title: PropTypes.string.isRequired,
  /** topic */
  topic: PropTypes.string.isRequired
}

export default Topic
