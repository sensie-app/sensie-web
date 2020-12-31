// react
import React, { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setNewAffirmationAction, setLastAffirmationsAction } from '../../../redux/actions/affirmations.actions'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// components
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
import MultipleSelectCheckbox from '../../components/MultipleSelectCheckbox'
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
 */
const CreateAffirmations = () => {
  // hooks
  const dispatch = useDispatch()
  const {
    topicsReducer: { topics },
    affirmationsReducer: { newAffirmation, lastAffirmations }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false)
  const [affirmation, setAffirmation] = useState(newAffirmation)
  const [test, setTest] = useState([])

  console.log('lastAffirmations', lastAffirmations)

  // ? handle functions
  /**
   * handle click topic menu
   * @param {DataAffirmation} value
   * @returns {undefined} selectTopics = value
   */
  const handleClickTopicMenu = value => {
    const _affirmation = affirmation
    _affirmation.topics = value
    setAffirmation(_affirmation)
    dispatch(setNewAffirmationAction(_affirmation)) // todo: revisar hook y quitar
  }

  /**
   * handle click close chip
   * @param {DataAffirmation} value
   * @returns {undefined} selectTopics = value(filtered)
   */
  const handleClickCloseChip = value => {
    const _affirmation = affirmation
    _affirmation.topics = _affirmation.topics.filter(item => item !== value)
    setAffirmation(_affirmation)
    dispatch(setNewAffirmationAction(_affirmation)) // todo: revisar hook y quitar
  }

  /**
   * handle input value
   * @param {undefined} event
   * @returns {Object} setAffirmation()
   */
  const handleInputValue = event => {
    const _affirmation = affirmation
    _affirmation.title = event.target.value
    setAffirmation(_affirmation)
    dispatch(setNewAffirmationAction(_affirmation)) // todo: revisar hook y quitar
  }

  /**
   * handle click btn done
   * @return {}
   */
  const handleClickBtnDone = () => {
    const _test = test
    _test.push(affirmation)
    setTest(_test)
    // console.log('lastAffirmations', lastAffirmations)
    // console.log('newAffirmation', newAffirmation)
    // console.log('affirmation', affirmation)
    // const test = lastAffirmations
    // console.log('test1', test)
    // test.push(newAffirmation)
    // console.log('test2', test)
    dispatch(setLastAffirmationsAction(test))
    // TODO: use Mutation
  }

  console.log('test', test)

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
            : <span className={styles.AffirmationsListMultipleSelectCheckboxItemCount}>
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
    return affirmation.topics.map(item => <Chip key={item.index} label={item} onClose={value => handleClickCloseChip(value)}/>)
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
                placeholder={t('dashboard.CreateAffirmations.writeNewAffirmation')}
                onChange={handleInputValue}
              />
            </div>
            <div className={styles.CreateAffirmationsFormD1Btns}>
              <button onClick={() => handleClickBtnDone()} className={styles.CreateAffirmationsFormButtonDone}>Done</button>
              {/* // TODO: adaptar componente a esta sección (redux) */}
              <MultipleSelectCheckbox
                data={topics}
                onClickValue={value => handleClickTopicMenu(value)}
                defValue={affirmation.topics}
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
          <NewAffirmation />
        </div>
      </div>
    </div>
  )
}

export default CreateAffirmations
