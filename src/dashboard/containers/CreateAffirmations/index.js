// react
import React, { Fragment, useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setNewAffirmationAction, setLastAffirmationsAction } from '../../../redux/actions/affirmations.actions'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// components
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
import MultipleSelectCheckbox from '../MultipleSelectCheckbox'
// containers
import NewAffirmation from '../NewAffirmation'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1, actionColor1 } = COLORS
// const cleanAffirmation = { title: '', topics: [] }

// * container
/**
 * CreateAffirmations container
 * @component
 */
const CreateAffirmations = () => {
  // hooks
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const { affirmationsReducer: { newAffirmation, lastAffirmations } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false)
  const [title, setTitle] = useState(newAffirmation.title)
  const [topics, setTopics] = useState(newAffirmation.topics)
  const [listAffirmations, setListAffirmations] = useState([])

  useEffect(() => dispatch(setNewAffirmationAction({ title, topics })), [title, topics])

  // ? handle functions
  /**
   * handle click topic menu
   * @param {DataAffirmation} value
   * @returns {undefined} selectTopics = value
   */
  const handleClickTopicMenu = value => setTopics(value)

  /**
   * handle click close chip
   * @param {DataAffirmation} value
   * @returns {undefined} selectTopics = value(filtered)
   */
  const handleClickCloseChip = value => setTopics(topics.filter(item => item !== value))

  /**
   * handle input value
   * @param {undefined} event
   * @returns {Object} setAffirmation()
   */
  const handleInputValue = event => setTitle(event.target.value)

  /**
   * handle click btn done
   * @return {}
   */
  const handleClickBtnDone = () => {
    inputRef.current.value = ''
    const _list = listAffirmations
    _list.push({ title, topics })
    setListAffirmations(_list)
    dispatch(setLastAffirmationsAction(_list))
    setTitle('')
    setTopics([])
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
          newAffirmation.topics.length === 0
            ? <Icon custom="topic" color={fontColor1} size="md" />
            : <span className={styles.CreateAffirmationsCountCheckbox}>
                {newAffirmation.topics.length}
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
    return topics.map(item => <Chip key={item.index} label={item} onClose={value => handleClickCloseChip(value)}/>)
  }

  /**
   * render Form Item
   * @return {undefined} form item ("") (html)
   */
  const renderFormItem = () => {
    return (
      <div className={styles.CreateAffirmationsForm}>
        <div className={styles.CreateAffirmationsFormTopContainer}>
          <div className={styles.CreateAffirmationsFormD1}>
            <div className={styles.CreateAffirmationsFormD1Inputs}>
              <input
                ref={inputRef}
                placeholder={t('dashboard.CreateAffirmations.writeNewAffirmation')}
                onChange={handleInputValue}
              />
            </div>
            <div className={styles.CreateAffirmationsFormD1Btns}>
              <button onClick={() => handleClickBtnDone()} className={styles.CreateAffirmationsFormButtonDone}>Done</button>
              <MultipleSelectCheckbox
                onClickValue={value => handleClickTopicMenu(value)}
                defValue={topics}
              >
                {renderMultipleSelectCheckboxChildren()}
              </MultipleSelectCheckbox>
            </div>
          </div>
          <div className={styles.CreateAffirmationsFormD2}>
            <div>
              <Icon name="more-horizontal-outline" color={fontColor1} size="md" />
              <Icon name="arrow-ios-upward-outline" color={fontColor1} size="md" />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.CreateAffirmationsChipsContainer}>
          {renderChipsItems()}
        </div>
      </div>
    )
  }

  /**
   * render last affirmations
   * @returns {undefined} NewAffirmation (component)
   */
  const renderLastAffirmations = () => {
    return lastAffirmations.map((item, index) => <NewAffirmation key={index} title={item.title} selectedTopics={item.topics} />)
  }

  return (
    <div className={styles.CreateAffirmationsContainer}>
      {/* header */}
      <div className={styles.CreateAffirmationsHeaderContainer}>
        <Checkbox checked={selectAllCheckbox} onChange={() => setSelectAllCheckbox(!selectAllCheckbox)} color={actionColor1} className={styles.CreateAffirmationsCheckbox} />
        <button><Icon name="plus-outline" color={fontColor1} size="md" /> {t('dashboard.CreateAffirmations.addNew')}</button>
      </div>
      {/* list affirmations */}
      <div className={styles.CreateAffirmationsBodyContainer}>
        {/* create affirmation */}
        {renderFormItem()}
        {/* list affirmations */}
        <div className={styles.CreateAffirmationsList}>
          {renderLastAffirmations()}
        </div>
      </div>
    </div>
  )
}

export default CreateAffirmations
