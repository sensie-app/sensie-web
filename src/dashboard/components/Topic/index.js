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
// utils
import { handleLargeName } from '../../utils/functions'
// styles
import styles from './styles.module.scss'

// const
const { noImg } = IMG

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
 * @param {number} count (default: 0)
 * @param {boolean} active
 */
const Topic = ({
  route,
  img = null,
  title,
  topic,
  withLink = true,
  witCheckbox = true,
  min = false,
  iconSize = '50px',
  count = 0,
  active
}) => {
  // ? hooks
  const [check, setCheck] = useState(false)
  const [image] = useState(img === null ? noImg : img)

  // ? handle functions
  /**
   * handle checkbox
   * @returns {boolean} setCheck(!check)
   */
  const handleCheck = () => setCheck(!check)

  return (
    <>
      <div className={styles.PackContainer}>
        {/* <Link to={route}> */}
          <div className={`${!min ? styles.PackImgContainer : styles.PackImgContainerMin}`} style={{ backgroundImage: `url(${image})` }}>
            <div className={`${styles.PackBodyContainer} ${styles.TopicBodyContainer}`}>
              {witCheckbox &&
                  <div className={styles.TopicHeaderContainer}>
                    <Checkbox checked={check} onChange={handleCheck} className={styles.TopicCheckbox} />
                    {count !== 0 && <h6>{count} Affirmations</h6>}
                  </div>
                }
                {withLink
                  ? <Link to={route}>
                      <div className={styles.TopicIconContainer}>
                        <SvgIcon icon={topic} size={iconSize}/>
                        <span>{handleLargeName(topic.name, 18)}</span>
                      </div>
                    </Link>
                  : <div className={styles.TopicIconContainer}>
                      <SvgIcon icon={topic} size={iconSize}/>
                      <span>{handleLargeName(topic.name, 18)}</span>
                    </div>
                }
            </div>
          </div>
        {/* </Link> */}
      </div>
    </>
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
  min: PropTypes.bool,
  /** iconSize */
  iconSize: PropTypes.string,
  /** count */
  count: PropTypes.number,
  /** active */
  active: PropTypes.bool
}

export default Topic
