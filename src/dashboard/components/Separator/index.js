// react
import React from 'react'
// styles
import styles from './styles.module.scss'

// * component
/**
 * Separator component
 * @component
 */
const Separator = () => {
  return (
    <div className={styles.SeparatorContainer}>
      <span className={styles.Separator1}></span>
      <span className={styles.Separator2}></span>
    </div>
  )
}

export default Separator
