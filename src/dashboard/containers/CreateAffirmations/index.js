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
const { fontColor1, actionColor1, actionColor2, actionColor4 } = COLORS

// * container
/**
 * CreateAffirmations container
 * @component
 * @param {boolean} initShowForm
 * @param {boolean} withAffirmationsByTopics
 */
const CreateAffirmations = ({ initShowForm = true, withAffirmationsByTopics = true }) => {
  // hooks
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const { affirmationsReducer: { newAffirmation, lastAffirmations } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false)
  const [title, setTitle] = useState(newAffirmation.title)
  const [topics, setTopics] = useState(newAffirmation.topics)
  const [listAffirmations, setListAffirmations] = useState([])
  const [showErrorTitle, setShowErrorTitle] = useState(false)
  const [showErrorTopics, setShowErrorTopics] = useState(false)
  const [showNewForm, setShowNewForm] = useState(initShowForm)

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
                  <Icon name="trash-2-outline" color={actionColor4} size="md" />
                </button>
                <button>
                  <Icon name="minus-circle-outline" color={actionColor2} size="md" />
                </button>
              </div>
            : <h5>Select all</h5>
          }
        </div>

        <button disabled={showNewForm} onClick={() => setShowNewForm(true)} style={{ opacity: !showNewForm ? 1 : 0.5 }}>
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
  withAffirmationsByTopics: PropTypes.bool
}

export default CreateAffirmations
