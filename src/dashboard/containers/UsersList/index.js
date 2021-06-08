// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// constants
import User from '../../containers/User'
// components
// import Icon from '../../components/Icon'
import Title from '../../components/Title'
// import Pagination from '../../components/Pagination'
// constants
import { COLORS } from '../../constants/theme'
// import { UserListBtns } from '../../constants/globals'
// redux
import { useSelector /*, useDispatch */ } from 'react-redux'
// import { setUserListInfo } from '../../../redux/actions/show.actions'
// import { setPaginationUserListAction } from '../../../redux/actions/pagination.actions'
// styles
import styles from './styles.module.scss'
// utils
import { handleFlow, handleAwareness } from '../../utils/functions'

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
  // const dispatch = useDispatch()
  const {
    usersReducer,
    affirmationsReducer,
    showReducer: { userList },
    filtersReducer: { affirmations: { affirmation } }
    // paginationReducer: { pagination: { pagUsersList } }
  } = useSelector(state => state)

  const filterSensies = (data) => {
    if (!affirmation) return data
    return data.filter((sensie) => {
      return sensie.affirmationId === affirmation.id
    })
  }

  // ? handle functions
  /**
   * handleTotalSensies
   * @returns {number} total sensies
   */
  const handleTotalSensies = sensies => {
    return filterSensies(sensies).length
  }

  const flow = sensies => handleFlow(filterSensies(sensies))
  const awareness = user => handleAwareness(user.selfAwarenessScores.items)

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
  // const handlePaginationChange = (event, value) => dispatch(setPaginationUserListAction(value))

  // ? render functions
  const renderUsers = () => {
    const s = [].concat(...affirmationsReducer.affirmations.map(aff => aff.sensies.items))
    const list = !usersReducer.loading && usersReducer.users.map((client, index) => {
      const { id } = client
      const sensies = s.filter(s => s.userId === id)
      return {
        client: client,
        flow: flow(sensies),
        awareness: awareness(client),
        totalSensies: handleTotalSensies(sensies)
      }
      // return <User user={client} sensies={sensies} key={index} show={userList.showInfo} affirmation={affirmation} />
    })
    // Re-rank clients ascending according to #sensies and %flow
    return list.sort((a, b) => {
      if (a.totalSensies > b.totalSensies) {
        return -1
      } else if (a.totalSensies > b.totalSensies) {
        return 1
      } else {
        if (a.flow > b.flow) {
          return -1
        } else if (a.flow > b.flow) {
          return 1
        } else {
          return 0
        }
      }
    }).map(c => {
      return <User user={c.client} flow={c.flow} key={c.client.id} show={userList.showInfo} awareness={c.awareness} totalSensies={c.totalSensies} />
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
      {/* <div className={styles.UserListPagination}>
        {usersReducer.users.length !== 0 && <Pagination count={10} onChange={() => handlePaginationChange()} defaultPage={pagUsersList} />}
      </div> */}
    </section>
  )
}

export default UsersList
