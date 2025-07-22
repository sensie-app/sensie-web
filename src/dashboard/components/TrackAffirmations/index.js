// react
import React from 'react'
import PropTypes from 'prop-types'
// material-ui
import Box from '@mui/material/Box'
// components
import AffirmationsList from '../../containers/AffirmationsList'
import Line from '../../components/Line'
import TitleAndButton from '../../components/TitleAndButton'
// styles
import styles from './styles.module.scss'

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
      <Box className={styles.TrackAffirmationsBodyContainer}>
        {/* header */}
        {theme !== 2 && <><TitleAndButton title={title} btnTitle={btn.title} route={btn.route} /> <Line /></>}
        {/* body */}
        <Box className={styles.TrackAffirmationsOptionsContainer}>
          <AffirmationsList getSensies={getSensies} multiUser={multiUser} user={user} chipsUp={chipsUp} limit={limit} title={title} theme={theme} />
        </Box>
      </Box>
    </section>
  )
}

TrackAffirmations.propTypes = {
  chipsUp: PropTypes.bool,
  multiUser: PropTypes.bool,
  user: PropTypes.object,
  limit: PropTypes.number,
  title: PropTypes.string.isRequired,
  btn: PropTypes.shape({
    title: PropTypes.string,
    route: PropTypes.string
  }),
  fixHeight: PropTypes.bool,
  theme: PropTypes.number,
  getSensies: PropTypes.func
}

export default TrackAffirmations
