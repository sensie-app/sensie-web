// react
import React, { useState, useReducer, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// components
import ItemCheckbox from '../../components/ItemCheckbox'
import { toast } from 'react-toastify'
// redux
import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { setCheckboxAllClientsAction /*, setCheckboxAllTeamsAction */ } from '../../../redux/actions/checkbox.actions'
import { listUsersByOrganizationIdAction } from '../../../redux/actions/users.actions'
import { listPacksAction } from '../../../redux/actions/packs.actions'

// styles
import styles from './styles.module.scss'
// fake data
// import { _users, _teams } from './data'

import Loading from '../../components/Loading'

import { generateClient } from '@aws-amplify/api'
import { createPackSubscriptionMutation } from '../../graphql/mutations'
import PropTypes from 'prop-types'

// * component
/**
 * ShareWith component
 * @component
 */
const ShareWith = ({ pack }) => {
  // ? hooks
  const dispatch = useDispatch()
  const {
    /* checkboxReducer: {  all: { clients, teams } }, */
    userReducer: { user },
    usersReducer
  } = useSelector(state => state)
  const [t] = useTranslation('global')

  const [checked, setChecked] = useState({})
  const [allChecked, setAllChecked] = useState(false)
  const [, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
    dispatch(listUsersByOrganizationIdAction(user.id, []))
  }, [dispatch, user.id])
  // useEffect(() => dispatch(listPacksAction(user.id, [])), [])

  // ? handle functions
  /**
   * handleOnClickSelectAll
   * @param {boolean} value
   * @param {string} tag
   * @returns {boolean} redux state
   */
  const handleOnClickSelectAll = (value, tag) => { //   tag === 'clients' && dispatch(setCheckboxAllClientsAction(value))
    // tag === 'teams' && dispatch(setCheckboxAllTeamsAction(value))
    // dispatch(setCheckboxAllClientsAction(value))
    for (const k in checked) {
      checked[k] = !!value
    }
    setChecked(checked)
    setAllChecked(value)
    forceUpdate()
  }

  const subPack = async (userId, packId) => {
    try {
      const client = generateClient()
      await client.graphql({ query: createPackSubscriptionMutation(userId, packId) })
    } catch (error) {
      console.log('error', error)
      toast.success(`Pack ${pack.name} failed to share to user ${userId}!`)
    }
  }

  // useEffect(() => {
  //   usersReducer.users.forEach(user => {
  //     const userPacks = user.subscribedPacks.items.map(p => p.packId)
  //     const disabled = userPacks.indexOf(pack.id) > -1
  //     checked[user.id] = disabled
  //   })
  //   setChecked(checked)
  // }, [usersReducer.users])

  const handleShare = async () => {
    let i = 0
    const promises = []
    for (const k in checked) {
      if (checked[k]) {
        console.log('Sub this user to this pack!')
        promises.push(subPack(k, pack.id))
        i++
      }
    }
    try {
      await Promise.all(promises)
      dispatch(listUsersByOrganizationIdAction(user.id, []))
      dispatch(listPacksAction(user.id))
      toast.success(`Shared Pack to ${i} users Succesfully!`)
    } catch (error) {
      console.error('Failed to share pack to all users:', error)
    }
  }

  const handleChange = (e) => {
    const id = e.target.value
    checked[id] = !checked[id]
    setChecked(checked)
    // forceUpdate()
  }

  // ? render functions
  /**
   * renderListClients
   * @returns {undefined} ItemCheckbox component
   */
  const renderListClients = () => {
    return usersReducer.users.map((user, index) => {
      const userPacks = user.subscribedPacks.items.map(p => p.packId)
      const disabled = userPacks.indexOf(pack.id) > -1
      checked[user.id] = disabled || allChecked
      if (disabled) delete checked[user.id]

      return (
        <ItemCheckbox value={user.id} key={index} check={disabled || allChecked} defaultValue={false} onChange={handleChange} onClick={value => console.log(value)} disabled={disabled}>
          <span
            className={styles.ShareWithItemCheckboxTitle}>
            {user.firstName} {user.lastName}
          </span>
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
          {usersReducer.loading ? <Loading /> : renderListClients()}
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
            defaultValue={pack.isCommunityPack}
            onClick={value => handleCommunityPackChange(!value)}>
            <span className={styles.ShareWithItemCheckboxTitle}>
              {t('dashboard.ShareWith.publicAvailable')}
            </span>
          </ItemCheckbox> */}
          <span>{pack.name}</span>
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
