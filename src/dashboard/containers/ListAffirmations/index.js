// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import BarIndicator from '../../components/BarIndicator'
import MenuListComposition from '../../components/MenuListComposition'
import MultipleSelectCheckbox from '../../components/MultipleSelectCheckbox'
import Icon from '../../components/Icon'
// redux
import { useDispatch } from 'react-redux'
import { setAffirmationsStateFilterAction, setAffirmationsTopicFilterAction } from '../../../redux/actions/filters.actions'
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
// const defValueTopic = {
//   index: -1,
//   key: 'topic'
// }

const ListAffirmations = () => {
  // hooks
  const dispatch = useDispatch()
  const [t] = useTranslation('global')

  // handleFunctions
  const handleClickStateMenu = value => dispatch(setAffirmationsStateFilterAction(value))
  const handleClickTopicMenu = value => dispatch(setAffirmationsTopicFilterAction(value))

  return (
    <section className={styles.ListAffirmationsContainer}>
      <div className={styles.ListAffirmationsFiltersContainer}>
        <div className={styles.ListAffirmationsFilterBtnMenu}>
          <div className={styles.ListAffirmationsFilterBtnMenuIcon}>
            <Icon name="activity-outline" color={fontColor1} size="md" />
          </div>
          <div className={styles.ListAffirmationsFilterBtnMenuComponent}>
            <MenuListComposition
              data={MenuFilterStateListAffirmationsComponent}
              onClickValue={value => handleClickStateMenu(value)}
              defaultValue={defValueState} />
          </div>
        </div>
        {/* <div className={styles.ListAffirmationsFilterBtnMenu}> */}
          {/* <div className={styles.ListAffirmationsFilterBtnMenuIcon}>
            <Icon name="activity-outline" color={fontColor1} size="md" />
          </div> */}
          {/* <div className={styles.ListAffirmationsFilterBtnMenuComponent}> */}
            <MultipleSelectCheckbox
              data={MenuFilterTopicsListAffirmationsComponent}
              onClickValue={value => handleClickTopicMenu(value)}
              title={t('dashboard.MultipleSelectCheckbox.topics')} />
          {/* </div> */}
        {/* </div> */}
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
