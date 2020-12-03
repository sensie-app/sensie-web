/* eslint-disable react/prop-types */
// react
import React from 'react'
// components
import ListAffirmations from '../ListAffirmations'
// styles
import styles from './styles.module.scss'

const TrackAffirmations = () => {
  return (
    <section className={styles.TrackAffirmationsContainer}>
      <div className={styles.TrackAffirmationsBodyContainer}>
        {/* header */}
        <div className={styles.TrackAffirmationsHeaderContainer}>
          <div className={styles.TrackAffirmationsHeaderTitleContainer}>
            <h3>Mind - author and track affirmations</h3>
          </div>
          <div className={styles.TrackAffirmationsHeaderBtnContainer}>
            <button>View more</button>
          </div>
        </div>
        {/* body */}
        <div className={styles.TrackAffirmationsOptionsContainer}>
          <ListAffirmations />
        </div>
      </div>
    </section>
  )
}

export default TrackAffirmations
