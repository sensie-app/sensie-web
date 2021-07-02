// react
import React, { useState, Fragment, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// component
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
import ItemCheckbox from '../../components/ItemCheckbox'
// import Toast from '../../components/Toast'
// import MenuListComposition from '../../components/MenuListComposition'
// containers
import MultipleSelectCheckbox from '../MultipleSelectCheckbox'
// constants
// import { MenuItemNewAffirmationComponent } from '../../constants/menus'
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
 * @param {object} data
 * @param {string} title
 * @param {string} packId (default: null)
 * @param {array} selectedTopics
 * @param {boolean} withRemoveBtn (default: true)
 * @param {boolean} withAddBtn (default: false)
 * @param {boolean} checkAll (default: false)
 * @param {undefined} onAddToPack (default: ()=>{})
 * @param {undefined} onRemovePack (default: ()=>{})
 * @param {undefined} onDelete (default: ()=>{})
 * @param {boolean} onDelete (default: ()=>false)
 */
const NewAffirmation = ({
  data,
  title,
  packId = null,
  joinId = null,
  selectedTopics,
  withRemoveBtn = true,
  withAddBtn = false,
  checkAll = false,
  isChecked = () => false,
  onAddToPack = () => {},
  onRemovePack = () => {},
  onDelete = () => {}
}) => {
  // ? hooks
  const dispatch = useDispatch()
  const { affirmationsReducer: { lastAffirmations } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const inputRef = useRef(null)
  const [selectTopics, setSelectTopics] = useState(selectedTopics)
  const [itemTitle, setItemTitle] = useState(title)
  const [showChips, setShowChips] = useState(true)
  const [disabledTopics, setDisabledTopics] = useState(true)
  const [menuAction, setMenuAction] = useState({})

  useEffect(() => {
    if (menuAction.value === 'edit') {
      if (itemTitle === '' || selectTopics.length === 0) {
        // setShowErrorToast(true)
      } else {
        // setShowErrorToast(false)
        dispatch(setLastAffirmationsAction(
          lastAffirmations.map(item => item.title === title
            ? { title: itemTitle, topics: selectTopics }
            : item
          )
        ))
      }
    }
  }, [selectTopics, itemTitle])

  useEffect(async () => {
    menuAction.value === 'edit'
      ? setDisabledTopics(false)
      : menuAction.value === 'delete'
        ? await onDelete(data.id)
        : console.log('🗑')
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
  // const handleClickStateMenu = value => {
  //   setMenuAction(value)
  // }

  /**
   * handle input value
   * @param {undefined} event
   * @returns {Object} setItemTitle()
   */
  const handleInputValue = event => {
    setItemTitle(event.target.value)
  }

  /**
   * handle click btn done
   * @return {}
   */
  const handleClickBtnDone = () => {
    // inputRef.current.value = ''
    setMenuAction({})
    setDisabledTopics(true)
    // TODO: use Mutation
    // * edit
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
    return selectTopics.filter(t => t !== null).map((topic, index) => <Chip key={index} disabled={disabledTopics} label={topic} onClose={value => handleClickCloseChip(value)}/>)
  }

  return (
    <div className={styles.NewAffirmationContainer}>
      <div className={styles.NewAffirmationSTop}>
        <div className={styles.NewAffirmationS1}>
          <ItemCheckbox check={checkAll} defaultValue={false} onClick={value => isChecked(!value)}>
            {!disabledTopics
              ? <div className={styles.NewAffirmationEditTitleContainer}>
                  <input
                    ref={inputRef}
                    value={itemTitle}
                    placeholder={t('dashboard.CreateAffirmations.writeNewAffirmation')}
                    onChange={handleInputValue}
                  />
                  <button onClick={() => handleClickBtnDone()}>Done</button>
                </div>
              : <h4>{itemTitle}</h4>}
          </ItemCheckbox>
        </div>

        <div className={styles.NewAffirmationS2}>
          {withRemoveBtn && !withAddBtn && <button className={styles.NewAffirmationS2RemoveBtn} onClick={() => onRemovePack(joinId)}>
                <span>{t('dashboard.NewAffirmation.remove')}</span>
             </button>
          }
          {withAddBtn && !withRemoveBtn && <button className={styles.NewAffirmationS2AddBtn} onClick={() => onAddToPack(data.id, packId)}>
                <span>{t('dashboard.NewAffirmation.add')}</span>
              </button>
          }
          <div className={styles.NewAffirmationS2TopicsBtn}>
            <MultipleSelectCheckbox
              onClickValue={value => handleClickTopicMenu(value)}
              defValue={selectedTopics}
              disabled={disabledTopics}
            >
              {renderMultipleSelectCheckboxChildren()}
            </MultipleSelectCheckbox>
          </div>
          <div className={styles.NewAffirmationS2Icons}>
            {/* <div className={styles.NewAffirmationMenuActions}>
              <MenuListComposition
                data={MenuItemNewAffirmationComponent}
                onClickValue={value => handleClickStateMenu(value)}
                withName={false}>
                <Icon name="more-horizontal-outline" color={fontColor1} size="md" />
              </MenuListComposition>
            </div> */}
            <button onClick={() => setShowChips(!showChips)}>
              <Icon name={'arrow-ios-downward-outline'} color={fontColor1} size="md" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.NewAffirmationSBottom}>
        {showChips && renderChipsItems()}
      </div>
      {/* {showErrorToast && <Toast type="error">{t('dashboard.CreateAffirmations.errorToast')}</Toast>} */}
    </div>
  )
}

// prop-types
NewAffirmation.propTypes = {
  /** data */
  data: PropTypes.object.isRequired,
  /** title */
  title: PropTypes.string.isRequired,
  /** packId */
  packId: PropTypes.string,
  /** joinId */
  joinId: PropTypes.string,
  /** selectedTopics */
  selectedTopics: PropTypes.array.isRequired,
  /** withRemoveBtn */
  withRemoveBtn: PropTypes.bool,
  /** withAddBtn */
  withAddBtn: PropTypes.bool,
  /** checkAll */
  checkAll: PropTypes.bool,
  /** onAddToPack */
  onAddToPack: PropTypes.func,
  /** onRemovePack */
  onRemovePack: PropTypes.func,
  /** onDelete */
  onDelete: PropTypes.func,
  /** onDelete */
  isChecked: PropTypes.func
}

export default NewAffirmation
