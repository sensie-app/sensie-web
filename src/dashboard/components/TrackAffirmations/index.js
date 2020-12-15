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
  chipsUp: PropTypes.bool,
  limit: PropTypes.number,
  title: PropTypes.string.isRequired,
  btn: PropTypes.shape({
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  }),
  fixHeight: PropTypes.bool
}

export default TrackAffirmations
