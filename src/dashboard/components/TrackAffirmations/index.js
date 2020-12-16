// react
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// components
import AffirmationsList from '../../containers/AffirmationsList'
// components
import Title from '../Title'
// styles
import styles from './styles.module.scss'

// * component
/**
 * TrackAffirmations component
 * @component
 */
const TrackAffirmations = ({ chipsUp = false, limit, title, btn, fixHeight = false }) => {
  return (
    <section className={`${styles.TrackAffirmationsContainer} ${fixHeight && styles.TrackAffirmationsContainerHeight}`}>
      <div className={styles.TrackAffirmationsBodyContainer}>
        {/* header */}
        <div className={styles.TrackAffirmationsHeaderContainer}>
          <div className={styles.TrackAffirmationsHeaderTitleContainer}>
            <Title text={title} />
          </div>
          <div className={styles.TrackAffirmationsHeaderBtnContainer}>
            <Link to={btn.route}>
              <button>{btn.title}</button>
            </Link>
          </div>
        </div>
        {/* body */}
        <div className={styles.TrackAffirmationsOptionsContainer}>
          <AffirmationsList chipsUp={chipsUp} limit={limit} />
        </div>
      </div>
    </section>
  )
}

// prop-types
TrackAffirmations.propTypes = {
  /** whether chips are displayed above or below the declaration list */
  chipsUp: PropTypes.bool,
  /** number of affirmations */
  limit: PropTypes.number,
  /** title section */
  title: PropTypes.string.isRequired,
  /** btn: { title(string), route(string) } */
  btn: PropTypes.shape({
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  }),
  /** fixed height (true, false) */
  fixHeight: PropTypes.bool
}

export default TrackAffirmations
