// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import User from '../../components/User'
import Icon from '../../components/Icon'
import Title from '../../components/Title'
// constants
import { COLORS } from '../../constants/theme'
import { UserListBtns } from '../../constants/globals'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setUserListInfo } from '../../../redux/actions/show.actions'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS
const { summary, details } = UserListBtns

// * container
/**
 * UserList container
 * @component
 */
const UsersList = () => {
  // hooks
  const [t] = useTranslation('global')
  const dispatch = useDispatch()
  const { showReducer: { userList: showInfo } } = useSelector(state => state)

  // ? handle functions
  /**
   * handle click
   * @param {Object} clickBtn
   * @returns {Object} dispatch REDUX
   */
  const handleClick = clickBtn => dispatch(setUserListInfo(clickBtn))

  return (
    <section className={styles.UserListContainer}>
      {/* header */}
      <div className={styles.UsersListHeaderContainer}>
        <div className={styles.UsersListHeaderTitle}>
          <Title text="Window" />
        </div>
        <div className={styles.UsersListHeaderAction}>
          <div>
            <button onClick={() => handleClick(summary)}>{t(`dashboard.UserList.${summary}`)}</button>
            <button onClick={() => handleClick(details)}>{t(`dashboard.UserList.${details}`)}</button>
          </div>
          <Icon name="search-outline" color={fontColor1} size="md" />
        </div>
      </div>
      {/* body */}
      <User show={showInfo} />
      <User show={showInfo} />
      <User show={showInfo} />
      <User show={showInfo} />
      <User show={showInfo} />
    </section>
  )
}

export default UsersList
