// react
import React from 'react'
import PropTypes from 'prop-types'
// components
import AffirmationsList from '../../containers/AffirmationsList'
// components
import TitleAndButton from '../../components/TitleAndButton'
// styles
import styles from './styles.module.scss'

// * component
/**
 * TrackAffirmations component
 * @component
 * @param {boolean} chipsUp (default: false)
 * @param {number} limit
 * @param {string} title
 * @param {BtnTrackAffirmation} btn
 * @param {boolean} fixHeight (default: false)
 * @param {number} theme (default: 1)
 */
const TrackAffirmations = ({ chipsUp = false, limit, title, btn, fixHeight = false, theme = 1 }) => {
  return (
    <section className={`${styles.TrackAffirmationsContainer} ${fixHeight && styles.TrackAffirmationsContainerHeight}`}>
      <div className={styles.TrackAffirmationsBodyContainer}>
        {/* header */}
        {theme !== 2 && <TitleAndButton title={title} btnTitle={btn.title} route={btn.route} />}
        {/* body */}
        <div className={styles.TrackAffirmationsOptionsContainer}>
          <AffirmationsList chipsUp={chipsUp} limit={limit} title={title} theme={theme} />
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
    title: PropTypes.string,
    route: PropTypes.string
  }),
  /** fixed height (true, false) */
  fixHeight: PropTypes.bool,
  /** theme (1,2) */
  theme: PropTypes.number
}

export default TrackAffirmations
