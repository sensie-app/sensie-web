// react
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// components
import AffirmationsList from '../../containers/AffirmationsList'
import Line from '../../components/Line'
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
 * @param {undefined} getSensies (default: () => {})
 */
const TrackAffirmations = ({
  chipsUp = false,
  multiUser = true,
  limit,
  title,
  btn,
  user,
  fixHeight = false,
  theme = 1,
  getSensies = () => {}
}) => {
  return (
    <section className={`${styles.TrackAffirmationsContainer} ${fixHeight ? styles.TrackAffirmationsContainerHeight : styles.TrackAffirmationsContainerHeightMin}`}>
      <div className={styles.TrackAffirmationsBodyContainer}>
        {/* header */}
        {theme !== 2 && <Fragment><TitleAndButton title={title} btnTitle={btn.title} route={btn.route} /> <Line /></Fragment>}
        {/* line */}
        {/* body */}
        <div className={styles.TrackAffirmationsOptionsContainer}>
          <AffirmationsList getSensies={getSensies} multiUser={multiUser} user={user} chipsUp={chipsUp} limit={limit} title={title} theme={theme} />
        </div>
      </div>
    </section>
  )
}

// prop-types
TrackAffirmations.propTypes = {
  /** whether chips are displayed above or below the declaration list */
  chipsUp: PropTypes.bool,
  /** multiUser */
  multiUser: PropTypes.bool,
  /** user */
  user: PropTypes.object,
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
  theme: PropTypes.number,
  /** getSensies */
  getSensies: PropTypes.func
}

export default TrackAffirmations
