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
  const { showReducer: { userList } } = useSelector(state => state)

  // ? handle functions
  /**
   * handle click
   * @param {Object} clickBtn
   * @returns {Object} dispatch REDUX
   */
  const handleClick = clickBtn => dispatch(setUserListInfo(clickBtn))

  const handleActive = btn => userList.showInfo === btn

  console.log('showInfo', userList.showInfo)
  console.log('handleActive', handleActive('summary'))

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
      <User show={userList.showInfo} />
      <User show={userList.showInfo} />
      <User show={userList.showInfo} />
      <User show={userList.showInfo} />
      <User show={userList.showInfo} />
    </section>
  )
}

export default UsersList
