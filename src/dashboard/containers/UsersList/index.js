// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// constants
import User from '../../containers/User'
// components
// import Icon from '../../components/Icon'
import Title from '../../components/Title'
import Pagination from '../../components/Pagination'
// constants
import { COLORS } from '../../constants/theme'
// import { UserListBtns } from '../../constants/globals'
// redux
import { useSelector, useDispatch } from 'react-redux'
// import { setUserListInfo } from '../../../redux/actions/show.actions'
import { setPaginationUserListAction } from '../../../redux/actions/pagination.actions'
// styles
import styles from './styles.module.scss'

const { grayColor3 } = COLORS

// const { fontColor1 } = COLORS
// const { summary, details } = UserListBtns

// * container
/**
 * UserList container
 * @component
 */
const UsersList = () => {
  // ? hooks
  const [t] = useTranslation('global')
  const dispatch = useDispatch()
  const {
    usersReducer,
    showReducer: { userList },
    filtersReducer: { affirmations: { affirmation } },
    paginationReducer: { pagination: { pagUsersList } }
  } = useSelector(state => state)

  // ? handle functions
  /**
   * handle click
   * @param {Object} clickBtn
   * @returns {Object} dispatch REDUX
   */
  // const handleClick = clickBtn => dispatch(setUserListInfo(clickBtn))

  /**
   * handle active
   * @param {string} btn
   * @returns {string} userList.showInfo = btn
   */
  // const handleActive = btn => userList.showInfo === btn

  /**
   * handle paginaion change
   * @param {*} event
   * @param {number} value
   * @returns {undefined} redux action
   */
  const handlePaginationChange = (event, value) => dispatch(setPaginationUserListAction(value))

  // ? render functions
  const renderUsers = () => {
    return !usersReducer.loading && usersReducer.users.map((user, index) => {
      return <User user={user} key={index} show={userList.showInfo} affirmation={affirmation} />
    })
  }

  return (
    <section className={styles.UserListContainer}>
      {/* header */}
      <div className={styles.UsersListHeaderContainer}>
        <div className={styles.UsersListHeaderTitle}>
          <Title text={t('dashboard.UserList.clients')} />
          <span> - </span>
          <Title text={affirmation !== null ? `"${affirmation.name}"` : t('dashboard.Affirmation.selectAOption')} color={grayColor3} />
        </div>
        {/* <div className={styles.UsersListHeaderAction}>
          <div>
            <button className={handleActive('summary') ? styles.UsersListHeaderActionActiveBtn : undefined} onClick={() => handleClick(summary)}>{t(`dashboard.UserList.${summary}`)}</button>
            <button className={handleActive('details') ? styles.UsersListHeaderActionActiveBtn : undefined} onClick={() => handleClick(details)}>{t(`dashboard.UserList.${details}`)}</button>
          </div>
          <Icon name="search-outline" color={fontColor1} size="md" />
        </div> */}
      </div>
      {/* body */}
      {renderUsers()}
      <div className={styles.UserListPagination}>
        {usersReducer.users.length !== 0 && <Pagination count={10} onChange={() => handlePaginationChange()} defaultPage={pagUsersList} />}
      </div>
    </section>
  )
}

export default UsersList
