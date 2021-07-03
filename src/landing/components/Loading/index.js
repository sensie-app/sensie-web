// react
import React from 'react'
// components
import CircularProgress from '../CircularProgress'
// styles
import styles from './styles.module.scss'

// * component
/**
 * Loading component
 */
const Loading = () => <div className={styles.LoadingContainer}><CircularProgress /></div>

export default Loading
