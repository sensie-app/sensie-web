// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setPaginationAffirmationAction } from '../../../redux/actions/pagination.actions'
// components
import Title from '../../components/Title'
import SpiderChart from '../../components/SpiderChart'
import PaginationMUI from '../../components/Pagination'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1, grayColor3 } = COLORS

// * container
/**
 * Affirmation container
 * @component
 */
const Affirmation = () => {
  // hooks
  const [t] = useTranslation('global')
  const dispatch = useDispatch()
  const {
    filtersReducer: { affirmations: { affirmation } },
    paginationReducer: { pagination: { pagAffirmation } }
  } = useSelector(state => state)

  /**
   * handle paginaion change
   * @param {*} event
   * @param {number} value
   * @returns {undefined} redux action
   */
  const handlePaginationChange = (event, value) => dispatch(setPaginationAffirmationAction(value))

  return (
    <div className={styles.AffirmationContainer}>
      {/* header */}
      <div className={styles.AffirmationSpiderHeaderContainer}>
        <div className={styles.AffirmationSpiderHeaderTitleContainer}>
          <Title text={`${t('dashboard.Affirmation.affirmation')}:`} color={fontColor1} margin="0px 10px 0px 0px" />
          <Title text={affirmation !== null ? `"${affirmation.title}"` : t('dashboard.Affirmation.selectAOption')} color={grayColor3} />
        </div>
      </div>
      <div style={{ height: '400px', width: '100%' }}>
        <SpiderChart />
      </div>
      <div className={styles.AffirmationPagination}>
        <PaginationMUI count={10} onChange={() => handlePaginationChange()} defaultPage={pagAffirmation} />
      </div>
    </div>
  )
}

export default Affirmation
