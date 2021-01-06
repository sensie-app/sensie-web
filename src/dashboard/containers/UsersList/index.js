// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// components
import User from '../../components/User'
import Icon from '../../components/Icon'
import Title from '../../components/Title'
import Pagination from '../../components/Pagination'
// constants
import { COLORS } from '../../constants/theme'
import { UserListBtns } from '../../constants/globals'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setUserListInfo } from '../../../redux/actions/show.actions'
import { setPaginationUserListAction } from '../../../redux/actions/pagination.actions'
// styles
import styles from './styles.module.scss'
// test data
import { data } from '../ClientSnapshot/data'

// const
const { fontColor1 } = COLORS
const { summary, details } = UserListBtns

// * container
/**
 * UserList container
 * @component
 * @param {Array:User} users (default: null)
 */
const UsersList = ({ users = null }) => {
  // hooks
  const [t] = useTranslation('global')
  const dispatch = useDispatch()
  const [usersList] = useState(users === null ? data : users)
  const {
    showReducer: { userList },
    paginationReducer: { pagination: { pagUsersList } }
  } = useSelector(state => state)

  // ? handle functions
  /**
   * handle click
   * @param {Object} clickBtn
   * @returns {Object} dispatch REDUX
   */
  const handleClick = clickBtn => dispatch(setUserListInfo(clickBtn))

  /**
   * handle active
   * @param {string} btn
   * @returns {string} userList.showInfo = btn
   */
  const handleActive = btn => userList.showInfo === btn

  /**
   * handle paginaion change
   * @param {*} event
   * @param {number} value
   * @returns {undefined} redux action
   */
  const handlePaginationChange = (event, value) => dispatch(setPaginationUserListAction(value))

  // ? render functions
  const renderUsers = () => {
    return usersList.map((user, index) => {
      return <User user={user} key={index} show={userList.showInfo} />
    })
  }

  return (
    <section className={styles.UserListContainer}>
      {/* header */}
      <div className={styles.UsersListHeaderContainer}>
        <div className={styles.UsersListHeaderTitle}>
          <Title text={t('dashboard.UserList.clients')} />
        </div>
        <div className={styles.UsersListHeaderAction}>
          <div>
            <button className={handleActive('summary') && styles.UsersListHeaderActionActiveBtn} onClick={() => handleClick(summary)}>{t(`dashboard.UserList.${summary}`)}</button>
            <button className={handleActive('details') && styles.UsersListHeaderActionActiveBtn} onClick={() => handleClick(details)}>{t(`dashboard.UserList.${details}`)}</button>
          </div>
          <Icon name="search-outline" color={fontColor1} size="md" />
        </div>
      </div>
      {/* body */}
      {renderUsers()}
      <div className={styles.UserListPagination}>
        <Pagination count={10} onChange={() => handlePaginationChange()} defaultPage={pagUsersList} />
      </div>
    </section>
  )
}

// prop-types
UsersList.propTypes = {
  /** users */
  users: PropTypes.array.isRequired
}

export default UsersList
