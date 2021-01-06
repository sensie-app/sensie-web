// react
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// component
import SvgIcon from '../SvgIcon'
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
 * @param {string} img (default: null)
 * @param {string} title
 * @param {string} topic
 * @param {boolean} withLink (default: true)
 * @param {boolean} witCheckbox (default: true)
 * @param {string} size (default: 250px)
 * @param {string} iconSize (default: 50px)
 */
const Topic = ({
  route,
  img = null,
  title,
  topic,
  withLink = true,
  witCheckbox = true,
  size = '250px',
  iconSize = '50px'
}) => {
  // hooks
  const [check, setCheck] = useState(false)
  const [image] = useState(img === null ? noImg : img)

  // ? handle functions
  /**
   * handle checkbox
   * @returns {boolean} setCheck(!check)
   */
  const handleCheck = () => setCheck(!check)

  return (
    <div className={styles.TopicContainer} style={{ backgroundImage: `url(${image})`, width: size, height: size }}>
      <div className={styles.TopicBodyContainer}>
        {witCheckbox && <Checkbox checked={check} onChange={handleCheck} color={actionColor1} className={styles.TopicCheckbox} />}
        {withLink
          ? <Link to={route}>
              <div style={{ height: '75%' }}>
                <SvgIcon icon={topic} size={iconSize}/>
                <span>{title}</span>
              </div>
            </Link>
          : <div style={{ height: '100%' }}>
              <SvgIcon icon={topic} size={iconSize}/>
              <span>{title}</span>
            </div>
        }
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
  topic: PropTypes.string.isRequired,
  /** withLink */
  withLink: PropTypes.bool,
  /** witCheckbox */
  witCheckbox: PropTypes.bool,
  /** size */
  size: PropTypes.string,
  /** iconSize */
  iconSize: PropTypes.string
}

export default Topic
