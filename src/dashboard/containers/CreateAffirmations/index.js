// react
import React, { Fragment, useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setNewAffirmationAction, setLastAffirmationsAction } from '../../../redux/actions/affirmations.actions'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// components
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
import MultipleSelectCheckbox from '../MultipleSelectCheckbox'
import AffirmationsByTopics from '../../components/AffirmationsByTopics'
// containers
import NewAffirmation from '../NewAffirmation'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1, actionColor1 } = COLORS

// * container
/**
 * CreateAffirmations container
 * @component
 * @param {boolean} initShowForm (default: true)
 * @param {boolean} withAffirmationsByTopics (default: true)
 * @param {boolean} addToPack (default: false)
 * @param {undefiend} onSave (default: ()=>{}) return string
 * @param {string} defaultTopic (default: '0')
 * @param {string} defaultPack (default: '0')
 */
const CreateAffirmations = ({ initShowForm = true, withAffirmationsByTopics = true, addToPack = false, onSave = () => {}, defaultTopic = '0', defaultPack = '0' }) => {
  // hooks
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const {
    affirmationsReducer: { newAffirmation, lastAffirmations },
    userReducer: { user }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false)
  const [title, setTitle] = useState(newAffirmation.title)
  const [topics, setTopics] = useState(newAffirmation.topics)
  const [listAffirmations, setListAffirmations] = useState([])
  const [showErrorTitle, setShowErrorTitle] = useState(false)
  const [showErrorTopics, setShowErrorTopics] = useState(false)
  const [showNewForm, setShowNewForm] = useState(initShowForm)

  useEffect(() => defaultTopic !== 0 && defaultTopic.length !== 0 && setTopics(defaultTopic), [defaultTopic])
  useEffect(() => dispatch(setNewAffirmationAction({ title, topics })), [title, topics])
  console.log('defaultTopic', defaultTopic)
  console.log('topics', topics)

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
   * handle array topics
   * @param {array} items
   * @returns {array} array of ids
   */
  const handleArrTopicsId = items => items.map(item => item.id)

  /**
   * handle click btn done
   * @return {}
   */
  const handleClickBtnDone = async () => {
    setShowErrorTitle(title === '')
    setShowErrorTopics(topics.length === 0)
    if (title !== '' && topics.length > 0) {
      inputRef.current.value = ''
      const _list = listAffirmations
      _list.push({ title, topics })
      setListAffirmations(_list)
      dispatch(setLastAffirmationsAction(_list))
      setTitle('')
      setTopics([])
      setShowNewForm(false)
      console.log('handleArrTopicsId(topics)', handleArrTopicsId(topics))
      const affId = await onSave(title, '...', '0', handleArrTopicsId(topics), user.id)
      console.log('affId', affId)
      // TODO: use Mutation
    }
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
    return topics.map((item, index) => <Chip key={index} label={item} onClose={value => handleClickCloseChip(value)}/>)
  }

  /**
   * render Form Item
   * @return {undefined} form item ("") (html)
   */
  const renderFormItem = () => {
    return (
      <div className={styles.CreateAffirmationsForm}>
        <div className={styles.CreateAffirmationsFormTopContainer}>
          <div className={`${styles.CreateAffirmationsFormD1} ${showErrorTitle || showErrorTopics ? styles.CreateAffirmationsFormD1FlexError : styles.CreateAffirmationsFormD1Flex}`}>
            <div className={styles.CreateAffirmationsFormD1Inputs}>
              <input
                ref={inputRef}
                placeholder={t('dashboard.CreateAffirmations.writeNewAffirmation')}
                onChange={handleInputValue}
                className={showErrorTitle ? styles.inputBorderError : styles.inputBorder}
              />
              {showErrorTitle && <span className={styles.errorMessage}>{t('dashboard.CreateAffirmations.errorTitle')}</span>}
            </div>
            <div className={styles.CreateAffirmationsFormD1Btns}>
              <div>
                <div className={showErrorTopics ? styles.btnTopicsError : styles.btnTopics}>
                  <MultipleSelectCheckbox
                    onClickValue={value => handleClickTopicMenu(value)}
                    defValue={topics}
                  >
                    {renderMultipleSelectCheckboxChildren()}
                  </MultipleSelectCheckbox>
                </div>
                {showErrorTopics && <span className={styles.errorMessage}>{t('dashboard.CreateAffirmations.errorTopic')}</span>}
              </div>
              <button onClick={() => handleClickBtnDone()} className={styles.CreateAffirmationsFormButtonDone}>Done</button>
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
        <div>
          <Checkbox checked={selectAllCheckbox} onChange={() => setSelectAllCheckbox(!selectAllCheckbox)} color={actionColor1} className={styles.CreateAffirmationsCheckbox} />
          {selectAllCheckbox
            ? <div className={styles.CreateAffirmationsHeaderActions}>
                <button>
                  <span>{t('dashboard.CreateAffirmations.delete')}</span>
                </button>
                {!addToPack
                  ? <button>
                      <span>{t('dashboard.CreateAffirmations.removeToPack')}</span>
                    </button>
                  : <button>
                      <span>{t('dashboard.CreateAffirmations.addToPack')}</span>
                    </button>
                }
              </div>
            : <h5>{t('dashboard.CreateAffirmations.selectAll')}</h5>
          }
        </div>

        <button className={styles.CreateAffirmationsAddBtn} disabled={showNewForm} onClick={() => setShowNewForm(true)} style={{ opacity: !showNewForm ? 1 : 0.5 }}>
          <Icon name="plus-outline" color={fontColor1} size="md" />
          {t('dashboard.CreateAffirmations.addNew')}
        </button>
      </div>
      {/* list affirmations */}
      <div className={styles.CreateAffirmationsBodyContainer}>
        {/* create affirmation */}
        {showNewForm && renderFormItem()}
        {/* list affirmations */}
        <div className={styles.CreateAffirmationsList}>
          {renderLastAffirmations()}
        </div>
      </div>
      {/* affirmations by topics */}
      {withAffirmationsByTopics && <div className={styles.CreateAffirmationsAffirmationsByTopicsContainer}>
        <AffirmationsByTopics />
      </div>}
    </div>
  )
}

// prop-types
CreateAffirmations.propTypes = {
  /** initShowForm */
  initShowForm: PropTypes.bool,
  /** withAffirmationsByTopics */
  withAffirmationsByTopics: PropTypes.bool,
  /** addToPack */
  addToPack: PropTypes.bool,
  /** onSave */
  onSave: PropTypes.func,
  /** defaultTopic */
  defaultTopic: PropTypes.string,
  /** defaultPack */
  defaultPack: PropTypes.string
}

export default CreateAffirmations
