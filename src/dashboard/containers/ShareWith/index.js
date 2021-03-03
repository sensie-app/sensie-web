// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import ItemCheckbox from '../../components/ItemCheckbox'
// redux
import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
import { setCheckboxAllClientsAction, setCheckboxAllTeamsAction } from '../../../redux/actions/checkbox.actions'
// styles
import styles from './styles.module.scss'
// fake data
// import { _users, _teams } from './data'

import { API, graphqlOperation } from 'aws-amplify'
import { createPackSubscriptionMutation } from '../../graphql/mutations'
import PropTypes from 'prop-types'

// * component
/**
 * ShareWith component
 * @component
 */
const ShareWith = ({ pack }) => {
  console.log(pack)
  // ? hooks
  const dispatch = useDispatch()
  const {
    checkboxReducer: { all: { clients /*, teams */ } },
    usersReducer
  } = useSelector(state => state)
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

  const subPack = async (userId, packId) => {
    try {
      const response = await API.graphql(graphqlOperation(createPackSubscriptionMutation(userId, packId)))
      console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }
  }

  const checked = {}

  const handleShare = () => {
    console.log(checked)
    for (const k in checked) {
      if (k) {
        console.log('Sub this user to this pack!')
        subPack(k, pack.id)
      }
    }
  }

  const handleChange = (e) => {
    const id = e.target.value
    checked[id] = !checked[id]
    console.log(e)
  }

  // ? render functions
  /**
   * renderListClients
   * @returns {undefined} ItemCheckbox component
   */
  const renderListClients = () => {
    return usersReducer.users.map((user, index) => {
      console.log(user)
      console.log(user.id)
      return (
      <ItemCheckbox value={user.id} key={index} check={clients} defaultValue={false} onChange={handleChange} onClick={value => console.log(value)}>
        <span className={styles.ShareWithItemCheckboxTitle}>{user.firstName} {user.lastName}</span>
      </ItemCheckbox>)
    })
  }

  /**
   * renderListTeams
   * @returns {undefined} ItemCheckbox component
   */
  // const renderListTeams = () => {
  //   return _teams.map((team, index) => (
  //     <ItemCheckbox key={index} check={teams} defaultValue={false} onClick={value => console.log(value)}>
  //       <span className={styles.ShareWithItemCheckboxTitle}>{team}</span>
  //     </ItemCheckbox>)
  //   )
  // }

  return (
    <div>
      <div className={styles.ShareWithContainer}>
        {/* clients */}
        <div className={styles.ShareWithListContainer}>
          {/* header */}
          <div className={styles.ShareWithHeaderContainer}>
            <ItemCheckbox
              defaultValue={false}
              onClick={(value) => handleOnClickSelectAll(!value, 'clients')}
            >
              <span className={styles.ShareWithItemCheckboxTitle}>
                {t('dashboard.ShareWith.selectAllClients')}
              </span>
            </ItemCheckbox>
          </div>
          {usersReducer.users.length > 0 && renderListClients()}
        </div>
        {/* _teams
        <div className={styles.ShareWithListContainer}>
          <div className={styles.ShareWithHeaderContainer}>
            <ItemCheckbox
              defaultValue={false}
              onClick={(value) => handleOnClickSelectAll(!value, 'teams')}
            >
              <span className={styles.ShareWithItemCheckboxTitle}>
                {t('dashboard.ShareWith.selectAllTeams')}
              </span>
            </ItemCheckbox>
          </div>
          {renderListTeams()}
        </div> */}
      </div>
        {/* footer */}
      <div className={styles.ShareWithPublicAvailable}>
        <div className={styles.ShareWithFooterContainer}>
          {/* <ItemCheckbox
            defaultValue={false}
            onClick={(value) => console.log(!value)}
          >
            <span className={styles.ShareWithItemCheckboxTitle}>
              {t('dashboard.ShareWith.publicAvailable')}
            </span>
          </ItemCheckbox> */}
          <span>{ pack.name }</span>
          <button onClick={handleShare}>{t('dashboard.ShareWith.share')}</button>
        </div>
      </div>
    </div>
  )
}

ShareWith.propTypes = {
  pack: PropTypes.object
}

export default ShareWith
