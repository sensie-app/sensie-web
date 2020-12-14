// react
import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// components
import BarIndicator from '../../components/BarIndicator'
import MenuListComposition from '../../components/MenuListComposition'
import MultipleSelectCheckbox from '../../components/MultipleSelectCheckbox'
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setAffirmationsStateFilterAction, setAffirmationsTopicFilterAction } from '../../../redux/actions/filters.actions'
// constants
import { MenuFilterStateListAffirmationsComponent, MenuFilterTopicsListAffirmationsComponent } from '../../constants/menus'
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS

// * container
const ListAffirmations = () => {
  // hooks
  const dispatch = useDispatch()
  const { filtersReducer: { affirmations: { topicFilter, stateFilter } } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [selectValue, setSelectValue] = useState(topicFilter)

  useEffect(() => {
    console.log('selectValue', selectValue)
    selectValue !== topicFilter && dispatch(setAffirmationsTopicFilterAction(selectValue))
  }, [selectValue])

  // handleFunctions
  const handleClickStateMenu = value => dispatch(setAffirmationsStateFilterAction(value))

  const handleClickTopicMenu = value => setSelectValue(value)

  const handleClickCloseChip = value => setSelectValue(selectValue.filter(item => item !== value))

  // render functions
  const renderMultipleSelectCheckboxChildren = () => {
    return (
      <Fragment>
        <span className={styles.ListAffirmationsMultipleSelectCheckboxItemCount}>{selectValue.length}</span>
        <span>{t('dashboard.MultipleSelectCheckbox.topics')}</span>
        <Icon name="arrow-ios-downward-outline" color={fontColor1} size="md" />
      </Fragment>
    )
  }

  const renderMenuListCompositionChildren = () => (
    <Icon name="activity-outline" color={fontColor1} size="md" />
  )

  const renderChipsItems = () => {
    return selectValue.map(item => <Chip key={item.index} label={item} onClose={value => handleClickCloseChip(value)}/>)
  }

  return (
    <section className={styles.ListAffirmationsContainer}>
      <div className={styles.ListAffirmationsFiltersContainer}>
        <div className={styles.ListAffirmationsFilterBtnMenu}>
          <div className={styles.ListAffirmationsFilterBtnMenuComponent}>
            <MenuListComposition
              data={MenuFilterStateListAffirmationsComponent}
              onClickValue={value => handleClickStateMenu(value)}
              defaultValue={stateFilter}>
                {renderMenuListCompositionChildren()}
              </MenuListComposition>
          </div>
        </div>
        <div className={styles.ListAffirmationsFilterBtnMenu}>
          <div className={styles.ListAffirmationsFilterBtnMenuComponent}>
            <MultipleSelectCheckbox
              data={MenuFilterTopicsListAffirmationsComponent}
              onClickValue={value => handleClickTopicMenu(value)}
              defValue={topicFilter}
            >
              {renderMultipleSelectCheckboxChildren()}
            </MultipleSelectCheckbox>
          </div>
        </div>
      </div>
      <div className={styles.ListAffirmationsListContainer}>
        <div className={styles.ListAffirmationsListBarIndicatorContainer}>
          <BarIndicator value={75} title="Affirmation" />
          <BarIndicator value={100} title="Affirmation" />
          <BarIndicator value={45} title="Affirmation" />
        </div>
        <div className={styles.ListAffirmationsListChipsContainer}>
          {renderChipsItems()}
        </div>
      </div>
    </section>
  )
}

export default ListAffirmations
