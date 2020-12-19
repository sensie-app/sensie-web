// react
import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// components
import BarIndicator from '../../components/BarIndicator'
import MenuListComposition from '../../components/MenuListComposition'
import MultipleSelectCheckbox from '../../components/MultipleSelectCheckbox'
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
import Title from '../../components/Title'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setAffirmationsStateFilterAction, setAffirmationsTopicFilterAction } from '../../../redux/actions/filters.actions'
// constants
import { MenuFilterStateAffirmationsListComponent, MenuFilterTopicsAffirmationsListComponent } from '../../constants/menus'
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
// test data
import { data } from './data'

// const
const { fontColor1 } = COLORS

// * container
/**
 * AffirmationsList container
 * @component
 * @param {boolean} chipsUp
 * @param {number} limit
 * @param {string} title
 * @param {number} theme
 */
const AffirmationsList = ({ chipsUp = false, limit, title = '', theme = 1 }) => {
  // hooks
  const dispatch = useDispatch()
  const { filtersReducer: { affirmations: { topicFilter, stateFilter } } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [selectValue, setSelectValue] = useState(topicFilter)

  useEffect(() => {
    selectValue !== topicFilter && dispatch(setAffirmationsTopicFilterAction(selectValue))
  }, [selectValue])

  // ? handle Functions
  /**
   * handle click state menu
   * @param {DataAffirmation} value
   * @returns {undefined} setAffirmationsStateFilterAction (dispatch REDUX)
   */
  const handleClickStateMenu = value => dispatch(setAffirmationsStateFilterAction(value))

  /**
   * handle click topic menu
   * @param {DataAffirmation} value
   * @returns {undefined} selectValue = value
   */
  const handleClickTopicMenu = value => setSelectValue(value)

  /**
   * handle click close chip
   * @param {DataAffirmation} value
   * @returns {undefined} selectValue = value(filtered)
   */
  const handleClickCloseChip = value => setSelectValue(selectValue.filter(item => item !== value))

  // ? render functions
  /**
   * render multiple select - checkbox (children)
   * @return {undefined} (html)
   */
  const renderMultipleSelectCheckboxChildren = () => {
    return (
      <Fragment>
        {
          selectValue.length === 0
            ? <Icon custom="topic" color={fontColor1} size="md" />
            : <span className={styles.AffirmationsListMultipleSelectCheckboxItemCount}>
                {selectValue.length}
              </span>
        }
        <span>{t('dashboard.MultipleSelectCheckbox.topics')}</span>
        <Icon name="arrow-ios-downward-outline" color={fontColor1} size="md" />
      </Fragment>
    )
  }

  /**
   * render Icon
   * @return {undefined} Icon (html)
   */
  const renderMenuListCompositionChildren = () => (
    <Icon name="activity-outline" color={fontColor1} size="md" />
  )

  /**
   * render chips items
   * @return {undefined} Chips[] (html)
   */
  const renderChipsItems = () => {
    return selectValue.map(item => <Chip key={item.index} label={item} onClose={value => handleClickCloseChip(value)}/>)
  }

  /**
   * render affirmations
   * @return {undefined} BarIndicator[] (html)
   */
  const renderAffirmationsBarIndicator = () => {
    const _data = limit ? data.slice(0, limit) : data
    return _data.map((affirmation, index) => (
      <BarIndicator key={index} value={affirmation.value} title={affirmation.title} />
    ))
  }

  return (
    <section className={styles.AffirmationsListContainer}>
      <div className={styles.AffirmationsListFiltersContainer}>
        {theme === 2 && <div className={styles.AffirmationsListFilterBtnMenuTitleContainer}>
          <Title text={title} />
        </div>}
        <div className={theme === 2 ? styles.AffirmationsListFilterBtnMenuContainerTheme2 : styles.AffirmationsListFilterBtnMenuContainerTheme1}>
          <div className={styles.AffirmationsListFilterBtnMenu}>
            <div className={styles.AffirmationsListFilterBtnMenuComponent}>
              <MenuListComposition
                data={MenuFilterStateAffirmationsListComponent}
                onClickValue={value => handleClickStateMenu(value)}
                defaultValue={stateFilter}>
                  {renderMenuListCompositionChildren()}
                </MenuListComposition>
            </div>
          </div>
          <div className={styles.AffirmationsListFilterBtnMenu}>
            <div className={styles.AffirmationsListFilterBtnMenuComponent}>
              <MultipleSelectCheckbox
                data={MenuFilterTopicsAffirmationsListComponent}
                onClickValue={value => handleClickTopicMenu(value)}
                defValue={topicFilter}
              >
                {renderMultipleSelectCheckboxChildren()}
              </MultipleSelectCheckbox>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.AffirmationsListBodyContainer}>
        {chipsUp && <div className={`${styles.AffirmationsListChipsContainer} ${styles.AffirmationsListChipsUp}`}>
          {renderChipsItems()}
        </div>}
        <div className={styles.AffirmationsListBarIndicatorContainer}>
          {renderAffirmationsBarIndicator()}
        </div>
        {!chipsUp && <div className={styles.AffirmationsListChipsContainer}>
          {renderChipsItems()}
        </div>}
      </div>
    </section>
  )
}

// prop-types
AffirmationsList.propTypes = {
  /** whether chips are displayed above or below the declaration list */
  chipsUp: PropTypes.bool,
  /** number of affirmations */
  limit: PropTypes.number,
  /** title if theme = 2 */
  title: PropTypes.string,
  /** theme (1, 2) */
  theme: PropTypes.number

}

export default AffirmationsList
