// react
import React from 'react'
// components
import BarIndicator from '../BarIndicator'
// styles
import styles from './styles.module.scss'

const ListAffirmations = () => {
  return (
    <section className={styles.ListAffirmationsContainer}>
      <div className={styles.ListAffirmationsFiltersContainer}>
        <span>Filtros</span>
      </div>
      <div className={styles.ListAffirmationsListContainer}>
        <BarIndicator value={75} title="gráfico" />
        <BarIndicator value={100} title="gráfico" />
        <BarIndicator value={45} title="gráfico" />
      </div>
    </section>
  )
}

export default ListAffirmations
