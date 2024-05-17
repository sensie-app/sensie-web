// react
import React from 'react'
import PropTypes from 'prop-types'
// material-ui
import Grid from '@material-ui/core/Grid'
// components
import Pack from '../Pack'
import CreatePack from '../../containers/CreatePack'
// constants
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'

// const
const { pack } = DASHBOARD_ROUTES

// * component
/**
 * Packs component
 * @component
 * @param {array} data
 */
const Packs = ({ data }) => {
  // ? render functions
  /**
   * renderPacks
   * @returns {undefined} Pack componnet
   */
  // TODO: TERMINAR ESTO! COPIAR EJEMLPO DE COMPONENTS/TOPICS Y COMPONENTS/TOPIC
  const renderPacks = () => {
    return data && data.map(item => {
      const countAffirmation = item.affirmationCount
      return (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Pack author={item.author} img={item.picture} route={pack + '/' + item.id} title={item.name} totalAffirmations={countAffirmation} clients={item.clientsCount} type={item.type} id={item.id} />
        </Grid>
      )
    })
  }

  return (
    <div className={styles.PacksContainer}>
      <Grid container spacing={1}>
        {/* affirmations */}
        {renderPacks()}
        <Grid item xs={12} sm={6} md={3} xl={3}><CreatePack /></Grid>
      </Grid>
    </div>
  )
}

// prop-types
Packs.propTypes = {
  data: PropTypes.array
}

export default Packs
