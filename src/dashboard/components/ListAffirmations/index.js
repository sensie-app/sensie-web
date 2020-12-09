// react
import React from 'react'
// components
import BarIndicator from '../BarIndicator'
import MenuListComposition from '../MenuListComposition'
import Icon from '../Icon'
// constants
import { MenuFilterStateListAffirmationsComponent, MenuFilterTopicsListAffirmationsComponent } from '../../constants/menus'
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS
const defValueState = {
  index: -1,
  key: 'state'
}
const defValueTopic = {
  index: -1,
  key: 'topic'
}

const ListAffirmations = () => {
  return (
    <section className={styles.ListAffirmationsContainer}>
      <div className={styles.ListAffirmationsFiltersContainer}>
        <div className={styles.ListAffirmationsFilterBtnMenu}>
          <div className={styles.ListAffirmationsFilterBtnMenuIcon}><Icon name="activity-outline" color={fontColor1} size="md" /></div>
          <div className={styles.ListAffirmationsFilterBtnMenuComponent}><MenuListComposition data={MenuFilterStateListAffirmationsComponent} onClickValue={() => {}} defaultValue={defValueState} /></div>
        </div>
        <div className={styles.ListAffirmationsFilterBtnMenu}>
          <div className={styles.ListAffirmationsFilterBtnMenuIcon}><Icon name="activity-outline" color={fontColor1} size="md" /></div>
          <div className={styles.ListAffirmationsFilterBtnMenuComponent}><MenuListComposition data={MenuFilterTopicsListAffirmationsComponent} onClickValue={() => {}} defaultValue={defValueTopic} /></div>
        </div>
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
