// react
import React, { useState, Fragment, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// component
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
import Toast from '../../components/Toast'
import MenuListComposition from '../../components/MenuListComposition'
// containers
import MultipleSelectCheckbox from '../MultipleSelectCheckbox'
// constants
import { MenuItemNewAffirmationComponent } from '../../constants/menus'
import { COLORS } from '../../constants/theme'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setLastAffirmationsAction } from '../../../redux/actions/affirmations.actions'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS

// * component
/**
 * NewAffirmation component
 * @component
 */
const NewAffirmation = ({ title, selectedTopics }) => {
  // hooks
  const dispatch = useDispatch()
  const { affirmationsReducer: { lastAffirmations } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const inputRef = useRef(null)
  const [check, setCheck] = useState(false)
  const [selectTopics, setSelectTopics] = useState(selectedTopics)
  const [itemTitle, setItemTitle] = useState(title)
  const [showChips, setShowChips] = useState(true)
  const [disabledTopics, setDisabledTopics] = useState(true)
  const [menuAction, setMenuAction] = useState({})
  const [showErrorToast, setShowErrorToast] = useState(false)
  const [toAdd, setToAdd] = useState(false)
  console.log('setToAdd', setToAdd)

  useEffect(() => {
    if (menuAction.value === 'edit') {
      if (itemTitle === '' || selectTopics.length === 0) {
        setShowErrorToast(true)
      } else {
        setShowErrorToast(false)
        dispatch(setLastAffirmationsAction(
          lastAffirmations.map(item => item.title === title
            ? { title: itemTitle, topics: selectTopics }
            : item
          )
        ))
      }
    }
  }, [selectTopics, itemTitle])

  useEffect(() => {
    menuAction.value === 'edit'
      ? setDisabledTopics(false)
      : menuAction.value === 'delete' && dispatch(setLastAffirmationsAction(
        lastAffirmations.filter(item => item.title !== title)
      ))
  }, [menuAction])

  // ? handle functions
  /**
   * handle click topic menu
   * @param {DataAffirmation} value
   * @returns {undefined} selectTopics = value
   */
  const handleClickTopicMenu = value => setSelectTopics(value)

  /**
   * handle click close chip
   * @param {DataAffirmation} value
   * @returns {undefined} selectTopics = value(filtered)
   */
  const handleClickCloseChip = value => setSelectTopics(selectTopics.filter(item => item !== value))

  /**
   * handle click state menu
   * @param {DataAffirmation} value
   * @returns {undefined} setMenuAction
   */
  const handleClickStateMenu = value => {
    console.log('value', value)
    setMenuAction(value)
  }

  /**
   * handle input value
   * @param {undefined} event
   * @returns {Object} setItemTitle()
   */
  const handleInputValue = event => setItemTitle(event.target.value)

  /**
   * handle click btn done
   * @return {}
   */
  const handleClickBtnDone = () => {
    // inputRef.current.value = ''
    setMenuAction({})
    setDisabledTopics(true)
    // TODO: use Mutation
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
          selectTopics.length === 0
            ? <Icon custom="topic" color={fontColor1} size="md" />
            : <span className={styles.NewAffirmationCountCheckbox}>
                {selectTopics.length}
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
    return selectTopics.map((item, index) => <Chip key={index} disabled={disabledTopics} label={item} onClose={value => handleClickCloseChip(value)}/>)
  }

  return (
    <div className={styles.NewAffirmationContainer}>
      <div className={styles.NewAffirmationSTop}>
        <div className={styles.NewAffirmationS1}>
          <Checkbox checked={check} className={styles.NewAffirmationCheckbox} onChange={() => setCheck(!check)} />
          {!disabledTopics
            ? <div className={styles.NewAffirmationEditTitleContainer}>
                <input
                  ref={inputRef}
                  value={title}
                  placeholder={t('dashboard.CreateAffirmations.writeNewAffirmation')}
                  onChange={handleInputValue}
                />
                <button onClick={() => handleClickBtnDone()}>Done</button>
              </div>
            : <h4>{itemTitle}</h4>}
        </div>

        <div className={styles.NewAffirmationS2}>
          {!toAdd
            ? <button className={styles.NewAffirmationS2RemoveBtn} onClick={() => {}}>
                <span>{t('dashboard.NewAffirmation.remove')}</span>
              </button>
            : <button className={styles.NewAffirmationS2AddBtn} onClick={() => {}}>
                <span>{t('dashboard.NewAffirmation.add')}</span>
              </button>
          }
          <div className={styles.NewAffirmationS2TopicsBtn}>
            {/* // TODO: adaptar componente a esta sección (redux) */}
            <MultipleSelectCheckbox
              onClickValue={value => handleClickTopicMenu(value)}
              defValue={selectedTopics}
              disabled={disabledTopics}
            >
              {renderMultipleSelectCheckboxChildren()}
            </MultipleSelectCheckbox>
          </div>
          <div className={styles.NewAffirmationS2Icons}>
            <div className={styles.NewAffirmationMenuActions}>
              <MenuListComposition
                data={MenuItemNewAffirmationComponent}
                onClickValue={value => handleClickStateMenu(value)}
                withName={false}>
                <Icon name="more-horizontal-outline" color={fontColor1} size="md" />
              </MenuListComposition>
            </div>
            <button onClick={() => setShowChips(!showChips)}>
              <Icon name={'arrow-ios-downward-outline'} color={fontColor1} size="md" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.NewAffirmationSBottom}>
        {showChips && renderChipsItems()}
      </div>
      {showErrorToast && <Toast type="error">{t('dashboard.CreateAffirmations.errorToast')}</Toast>}
    </div>
  )
}

// prop-types
NewAffirmation.propTypes = {
  /** title */
  title: PropTypes.string.isRequired,
  /** selectedTopics */
  selectedTopics: PropTypes.array.isRequired
}

export default NewAffirmation
