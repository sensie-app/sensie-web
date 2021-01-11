// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// components
import ItemCheckbox from '../ItemCheckbox'
// styles
import styles from './styles.module.scss'
// fake data
import { users, teams } from './data'

// * component
/**
 * ShareWith component
 * @component
 */
const ShareWith = () => {
  // hooks
  const [t] = useTranslation('global')
  const [checkAllClients, setCheckAllClients] = useState(false)
  const [checkAllTeams, setCheckAllTeams] = useState(false)

  // ? render functions
  /**
   * renderListClients
   * @returns {undefined} ItemCheckbox component
   */
  const renderListClients = () => {
    return users.map((user, index) => (
      <ItemCheckbox key={index} check={checkAllClients} defaultValue={false} onClick={value => console.log(value)} title={user} />)
    )
  }

  /**
   * renderListTeams
   * @returns {undefined} ItemCheckbox component
   */
  const renderListTeams = () => {
    return teams.map((team, index) => (
      <ItemCheckbox key={index} check={checkAllTeams} defaultValue={false} onClick={value => console.log(value)} title={team} />)
    )
  }

  return (
    <div className={styles.ShareWithContainer}>
      {/* clients */}
      <div className={styles.ShareWithListContainer}>
        {/* header */}
        <div className={styles.ShareWithHeaderContainer}>
          <ItemCheckbox defaultValue={false} onClick={value => setCheckAllClients(!value)} title={t('dashboard.ShareWith.selectAllClients')} />
        </div>
        {renderListClients()}
      </div>
      {/* teams */}
      <div className={styles.ShareWithListContainer}>
        {/* header */}
        <div className={styles.ShareWithHeaderContainer}>
          <ItemCheckbox defaultValue={false} onClick={value => setCheckAllTeams(!value)} title={t('dashboard.ShareWith.selectAllTeams')} />
        </div>
        {renderListTeams()}
      </div>
      {/* footer */}
      <div className={styles.ShareWithFooterContainer}>
        <ItemCheckbox defaultValue={false} onClick={value => setCheckAllTeams(!value)} title={t('dashboard.ShareWith.publicAvailable')} />
        <button>{t('dashboard.ShareWith.share')}</button>
      </div>
    </div>
  )
}

export default ShareWith
