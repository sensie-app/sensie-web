// react
import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// components
import AffirmationChart from '../../components/AffirmationChart'
import MenuListComposition from '../../components/MenuListComposition'
import MultipleSelectCheckbox from '../MultipleSelectCheckbox'
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
import Title from '../../components/Title'
import Pagination from '../../components/Pagination'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setAffirmationsStateFilterAction, setAffirmationsTopicFilterAction, setAffirmationAction } from '../../../redux/actions/filters.actions'
import { setPaginationAffirmationsListAction } from '../../../redux/actions/pagination.actions'
// constants
import { MenuFilterStateAffirmationsListComponent } from '../../constants/menus'
import { COLORS } from '../../constants/theme'
// utils
import { handleFlow } from '../../utils/functions'
// styles
import styles from './styles.module.scss'
// test data
// import { data } from './data'

// const
const { fontColor1, grayColor5 } = COLORS

// * container
/**
 * AffirmationsList container
 * @component
 * @param {boolean} chipsUp (default: false)
 * @param {number} limit
 * @param {string} title (default: ')
 * @param {number} theme (1, 2, 3) -> 1: default; 2: change title; 3: change backgroundColor & padding
 * @param {undefined} getSensies (default: () => {})
 */
const AffirmationsList = ({ chipsUp = false, limit, title = '', theme = 1, getSensies = () => {} }) => {
  // ? hooks
  const dispatch = useDispatch()
  const {
    affirmationsReducer,
    filtersReducer: { affirmations: { topicFilter, stateFilter, affirmation } },
    paginationReducer: { pagination: { pagAffirmationsList } }
  } = useSelector(state => state)
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
   * handleTotalAffirmations
   * @returns {number} total
   */
  const handleTotalAffirmations = () => affirmationsReducer.affirmations.length

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

  /**
   * handle click affirmation
   * @param {AffirmationChart} value
   * @returns {AffirmationChart} redux
   */
  const handleClickAffirmation = value => dispatch(setAffirmationAction(value))

  /**
   * handle theme styles (theme = 3)
   * @returns {string} return style object
   */
  const handleTheme3Styles = () => {
    const styles = {}
    if (theme === 3) {
      styles.backgroundColor = 'transparent'
      styles.padding = '10px 0px'
    } else {
      styles.backgroundColor = grayColor5
      styles.padding = '10px 20px'
    }
    return styles
  }

  /**
   * handle paginaion change
   * @param {*} event
   * @param {number} value
   * @returns {undefined} redux action
   */
  const handlePaginationChange = (event, value) => {
    dispatch(setPaginationAffirmationsListAction(value))
  }

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
   * renderAffirmationChart
   * @param {object} data
   * @param {number} flow
   */
  const renderAffirmationChart = (data, flow) => <AffirmationChart key={data.id} data={data} value={flow} onClickValue={value => handleClickAffirmation(value)} isActive={affirmation === data} />

  /**
   * render affirmations
   * @return {undefined} AffirmationChart[] (html)
   */
  const renderAffirmationsAffirmationChart = () => {
    const _data = !affirmationsReducer.loading && limit ? affirmationsReducer.affirmations.slice(0, limit) : affirmationsReducer.affirmations
    return !affirmationsReducer.loading && _data.map(item => {
      const flow = handleFlow(item.sensies.items)
      switch (stateFilter.value) {
        case 'flowing': return flow >= 50 && renderAffirmationChart(item, flow)
        case 'blocked': return flow < 50 && renderAffirmationChart(item, flow)
        case 'all': return renderAffirmationChart(item, flow)
        case 'incomplete': return flow === 0 && renderAffirmationChart(item, flow)
        default: return renderAffirmationChart(item, flow)
      }
    })
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
                theme={2}
                defaultValue={stateFilter}>
                {renderMenuListCompositionChildren()}
              </MenuListComposition>
            </div>
          </div>
          <div className={styles.AffirmationsListFilterBtnMenu}>
            <div className={styles.AffirmationsListFilterBtnMenuComponent}>
              <MultipleSelectCheckbox
                onClickValue={value => handleClickTopicMenu(value)}
                defValue={topicFilter}
              >
                {renderMultipleSelectCheckboxChildren()}
              </MultipleSelectCheckbox>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.AffirmationsListBodyContainer} style={handleTheme3Styles()}>
        {chipsUp && <div className={`${styles.AffirmationsListChipsContainer} ${styles.AffirmationsListChipsUp}`}>
          {renderChipsItems()}
        </div>}
        <div className={styles.AffirmationsListAffirmationChartContainer}>
          {handleTotalAffirmations() > 0
            ? renderAffirmationsAffirmationChart()
            : <span>{t('dashboard.AffirmationsList.noData')}</span>
          }
          {!limit && <div className={styles.AffirmationsListAffirmationChartPagination}>
            {handleTotalAffirmations() > 0 && <Pagination count={4} onChange={() => handlePaginationChange()} defaultPage={pagAffirmationsList} />}
          </div>}
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
  theme: PropTypes.number,
  /** getSensies */
  getSensies: PropTypes.func
}

export default AffirmationsList
