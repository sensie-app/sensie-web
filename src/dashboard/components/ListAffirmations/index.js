// react
import React from 'react'
// components
import BarIndicator from '../BarIndicator'
import MenuListComposition from '../MenuListComposition'
import Icon from '../Icon'
// constants
import { MenuFilterStateListAffirmationsComponent } from '../../constants/menus'
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS
const defValue = {
  index: -1,
  key: 'state'
}

const ListAffirmations = () => {
  return (
    <section className={styles.ListAffirmationsContainer}>
      <div className={styles.ListAffirmationsFiltersContainer}>
        <div className={styles.ListAffirmationsFilterBtnMenu}>
          <div><Icon name="activity-outline" color={fontColor1} size="md" /></div>
          <div><MenuListComposition data={MenuFilterStateListAffirmationsComponent} onClickValue={() => {}} defaultValue={defValue} /></div>
        </div>
        <div className={styles.ListAffirmationsFilterBtnMenu}>
          <Icon name="activity-outline" color={fontColor1} size="md" />
          <MenuListComposition data={MenuFilterStateListAffirmationsComponent} onClickValue={() => {}} defaultValue={defValue} />
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
