// react
import React, { useState, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
// redux
import { useSelector } from 'react-redux'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// component
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
import MultipleSelectCheckbox from '../../components/MultipleSelectCheckbox'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS

// * component
/**
 * NewAffirmation component
 * @component
 */
const NewAffirmation = () => {
  // hooks
  const {
    filtersReducer: { affirmations: { topicFilter } },
    topicsReducer: { topics }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [check, setCheck] = useState(false)
  const [selectValue, setSelectValue] = useState([])

  // ? handle functions
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
   * render chips items
   * @return {undefined} Chips[] (html)
   */
  const renderChipsItems = () => {
    return selectValue.map(item => <Chip key={item.index} label={item} onClose={value => handleClickCloseChip(value)}/>)
  }
  console.log('renderChipsItems', renderChipsItems)

  return (
    <div className={styles.NewAffirmationContainer}>
      <div className={styles.NewAffirmationSTop}>
        <div className={styles.NewAffirmationS1}>
          <Checkbox checked={check} className={styles.NewAffirmationCheckbox} onChange={() => setCheck(!check)} />
          <h4>Title</h4>
        </div>

        <div className={styles.NewAffirmationS2}>
          <div className={styles.NewAffirmationS2TopicsBtn}>
            {/* // TODO: adaptar componente a esta sección (redux) */}
            <MultipleSelectCheckbox
              data={topics}
              onClickValue={value => handleClickTopicMenu(value)}
              defValue={topicFilter}
            >
              {renderMultipleSelectCheckboxChildren()}
            </MultipleSelectCheckbox>
          </div>
          <div className={styles.NewAffirmationS2Icons}>
            <Icon name="more-horizontal-outline" color={fontColor1} size="md" />
            <Icon name="arrow-ios-upward-outline" color={fontColor1} size="md" />
          </div>
        </div>
      </div>
      <div className={styles.NewAffirmationSBottom}>
        {renderChipsItems()}
      </div>
    </div>
  )
}

export default NewAffirmation
