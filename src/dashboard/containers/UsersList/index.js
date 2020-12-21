// react
import React from 'react'
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
// styles
import styles from './styles.module.scss'
// test data
import { data } from '../../components/ClientSnapshot/data'

// const
const { fontColor1 } = COLORS
const { summary, details } = UserListBtns

// * container
/**
 * UserList container
 * @component
 * @param {Array:User} users
 */
const UsersList = ({ users = data }) => {
  // hooks
  const [t] = useTranslation('global')
  const dispatch = useDispatch()
  const { showReducer: { userList } } = useSelector(state => state)

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

  // ? render functions
  const renderUsers = () => {
    return users.map((user, index) => {
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
        <Pagination count={10} onClickValue={page => console.log(page)}/>
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
