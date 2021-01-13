// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import ItemCheckbox from '../../components/ItemCheckbox'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setCheckboxAllClientsAction, setCheckboxAllTeamsAction } from '../../../redux/actions/checkbox.actions'
// styles
import styles from './styles.module.scss'
// fake data
import { _users, _teams } from './data'

// * component
/**
 * ShareWith component
 * @component
 */
const ShareWith = () => {
  // ? hooks
  const dispatch = useDispatch()
  const { checkboxReducer: { all: { clients, teams } } } = useSelector(state => state)
  const [t] = useTranslation('global')

  // ? handle functions
  /**
   * handleOnClickSelectAll
   * @param {boolean} value
   * @param {string} tag
   * @returns {boolean} redux state
   */
  const handleOnClickSelectAll = (value, tag) => {
    tag === 'clients' && dispatch(setCheckboxAllClientsAction(value))
    tag === 'teams' && dispatch(setCheckboxAllTeamsAction(value))
  }

  // ? render functions
  /**
   * renderListClients
   * @returns {undefined} ItemCheckbox component
   */
  const renderListClients = () => {
    return _users.map((user, index) => (
      <ItemCheckbox key={index} check={clients} defaultValue={false} onClick={value => console.log(value)}>
        <span className={styles.ShareWithItemCheckboxTitle}>{user}</span>
      </ItemCheckbox>)
    )
  }

  /**
   * renderListTeams
   * @returns {undefined} ItemCheckbox component
   */
  const renderListTeams = () => {
    return _teams.map((team, index) => (
      <ItemCheckbox key={index} check={teams} defaultValue={false} onClick={value => console.log(value)}>
        <span className={styles.ShareWithItemCheckboxTitle}>{team}</span>
      </ItemCheckbox>)
    )
  }

  return (
    <div className={styles.ShareWithContainer}>
      {/* clients */}
      <div className={styles.ShareWithListContainer}>
        {/* header */}
        <div className={styles.ShareWithHeaderContainer}>
          <ItemCheckbox defaultValue={false} onClick={value => handleOnClickSelectAll(!value, 'clients')}>
            <span className={styles.ShareWithItemCheckboxTitle}>{t('dashboard.ShareWith.selectAllClients')}</span>
          </ItemCheckbox>
        </div>
        {renderListClients()}
      </div>
      {/* _teams */}
      <div className={styles.ShareWithListContainer}>
        {/* header */}
        <div className={styles.ShareWithHeaderContainer}>
          <ItemCheckbox defaultValue={false} onClick={value => handleOnClickSelectAll(!value, 'teams')} >
            <span className={styles.ShareWithItemCheckboxTitle}>{t('dashboard.ShareWith.selectAllTeams')}</span>
          </ItemCheckbox>
        </div>
        {renderListTeams()}
      </div>
      {/* footer */}
      <div className={styles.ShareWithFooterContainer}>
        <ItemCheckbox defaultValue={false} onClick={value => console.log(!value)}>
          <span className={styles.ShareWithItemCheckboxTitle}>{t('dashboard.ShareWith.publicAvailable')}</span>
        </ItemCheckbox>
        <button>{t('dashboard.ShareWith.share')}</button>
      </div>
    </div>
  )
}

export default ShareWith
