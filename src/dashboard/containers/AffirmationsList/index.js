// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// material-ui
import Box from '@mui/material/Box'
// components
import AffirmationChart from '../../components/AffirmationChart'
import MenuListComposition from '../../components/MenuListComposition'
import MultipleSelectCheckbox from '../MultipleSelectCheckbox'
import Icon from '../../components/Icon'
import Chip from '../../components/Chip'
import Title from '../../components/Title'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setAffirmationsStateFilterAction, setAffirmationsTopicFilterAction, setAffirmationsPackFilterAction, setAffirmationAction } from '../../../redux/actions/filters.actions'
// constants
import { MenuFilterStateAffirmationsListComponent } from '../../constants/menus'
import { COLORS } from '../../constants/theme'
// utils
import { handleFlow } from '../../utils/functions'
// styles
import styles from './styles.module.scss'

const { fontColor1, grayColor5 } = COLORS

/**
 * AffirmationsList container
 * @component
 */
const AffirmationsList = ({ chipsUp = false, multiUser = true, user, limit, title = '', theme = 1, getSensies = () => {} }) => {
  // hooks
  const dispatch = useDispatch()
  const {
    affirmationsReducer,
    usersReducer,
    filtersReducer: { affirmations: { packFilter, topicFilter, stateFilter, affirmation } }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [selectValue, setSelectValue] = useState(topicFilter)
  const [selectPackValue, setSelectPackValue] = useState(packFilter)

  useEffect(() => {
    selectValue !== topicFilter && dispatch(setAffirmationsTopicFilterAction(selectValue))
    selectPackValue !== packFilter && dispatch(setAffirmationsPackFilterAction(selectPackValue))
  }, [selectValue, selectPackValue])

  // handle Functions
  const handleClickStateMenu = value => dispatch(setAffirmationsStateFilterAction(value))
  const handleTotalAffirmations = () => affirmationsReducer.affirmations.length
  const handleClickTopicMenu = value => setSelectValue(value)
  const handleClickPackMenu = value => setSelectPackValue(value)
  const handleClickCloseChip = value => setSelectValue(selectValue.filter(item => item !== value))
  const handleClickAffirmation = value => dispatch(setAffirmationAction(value))
  const handleTheme3Styles = () => {
    const styles = {}
    if (theme === 3) {
      styles.backgroundColor = 'transparent'
      styles.padding = '10px 0px'
    } else {
      styles.backgroundColor = grayColor5
      styles.padding = '10px 20px'
    }
    return styles
  }

  // render functions
  const renderMultipleSelectCheckboxChildren = () => (
    <>
      {selectValue.length === 0
        ? <Icon custom="topic" color={fontColor1} size="md" />
        : <span className={styles.AffirmationsListMultipleSelectCheckboxItemCount}>{selectValue.length}</span>
      }
      <span>{t('dashboard.MultipleSelectCheckbox.topics')}</span>
      <Icon name="arrow-ios-downward-outline" color={fontColor1} size="md" />
    </>
  )

  const renderMultipleSelectCheckboxPackChildren = () => (
    <>
      {selectPackValue.length === 0
        ? <Icon custom="topic" color={fontColor1} size="md" />
        : <span className={styles.AffirmationsListMultipleSelectCheckboxItemCount}>{selectPackValue.length}</span>
      }
      <span>{t('dashboard.MultipleSelectCheckbox.packs')}</span>
      <Icon name="arrow-ios-downward-outline" color={fontColor1} size="md" />
    </>
  )

  const renderMenuListCompositionChildren = () => (
    <Icon name="activity-outline" color={fontColor1} size="md" />
  )

  const renderChipsItems = () => (
    selectValue.map(item => <Chip key={item.index} label={item} onClose={value => handleClickCloseChip(value)}/>)
  )

  const renderAffirmationChart = (data, flow) => (
    <AffirmationChart key={data.id} data={data} value={flow} onClickValue={value => handleClickAffirmation(value)} isActive={affirmation === data} multiUser={multiUser} />
  )

  const renderAffirmationsAffirmationChart = () => {
    let _data = affirmationsReducer.affirmations
    const topicIds = selectValue.map(v => v.id)
    const userPacks = user ? user.subscribedPacks.items.map(p => p.pack ? p.pack.id : false) : []
    const packIds = selectPackValue.map(v => v.id)

    if (userPacks.length > 0) {
      _data = _data.filter(item => {
        const packMatches = item.packs.items.filter(t => {
          return t.pack ? userPacks.indexOf(t.pack.id) > -1 : false
        })
        return packMatches.length > 0
      })
    }
    if (packIds.length > 0) {
      _data = _data.filter(item => {
        const packMatches = item.packs.items.filter(t => {
          return t.pack ? packIds.indexOf(t.pack.id) > -1 : false
        })
        return packMatches.length > 0
      })
    }
    if (topicIds.length > 0) {
      _data = _data.filter(item => {
        const topicMatches = item.topics.items.filter(t => {
          return t.topic ? topicIds.indexOf(t.topic.id) > -1 : false
        })
        return topicMatches.length > 0
      })
    }
    const clientIds = multiUser ? usersReducer.users.map(client => client.id) : [user.id]
    _data = _data.map(item => {
      const users = new Set()
      const filtered = item.sensies.items.filter(s => clientIds.indexOf(s.userId) > -1)
      filtered.forEach(e => users.add(e.userId))
      item.sensies.items = filtered
      return Object.assign(item, {
        _flow: handleFlow(item.sensies.items),
        _userCount: users.size
      })
    })

    _data.sort((a, b) => {
      if (a._flow === 'NO_SENSIES') return 1
      return (parseInt(b._flow) === parseInt(a._flow)) ? (b._userCount - a._userCount) : (parseInt(b._flow) > parseInt(a._flow) ? 1 : -1)
    })
    if (_data.length < 1) return <span>{t('dashboard.IntentionsList.noData')}</span>
    return !affirmationsReducer.loading && _data.map(item => {
      switch (stateFilter.value) {
        case 'flowing': return item._flow >= 50 && renderAffirmationChart(item, item._flow)
        case 'blocked': return item._flow < 50 && renderAffirmationChart(item, item._flow)
        case 'all': return renderAffirmationChart(item, item._flow)
        case 'incomplete': return item._flow === 'NO_SENSIES' && renderAffirmationChart(item, item._flow)
        default: return renderAffirmationChart(item, item._flow)
      }
    })
  }

  return (
    <section className={styles.AffirmationsListContainer}>
      <Box className={styles.AffirmationsListFiltersContainer}>
        {theme === 2 && <Box className={styles.AffirmationsListFilterBtnMenuTitleContainer}>
          <Title text={title} />
        </Box>}
        <Box className={theme === 2 ? styles.AffirmationsListFilterBtnMenuContainerTheme2 : styles.AffirmationsListFilterBtnMenuContainerTheme1}>
          <Box className={styles.AffirmationsListFilterBtnMenu}>
            <Box className={styles.AffirmationsListFilterBtnMenuComponent}>
              <MenuListComposition
                data={MenuFilterStateAffirmationsListComponent}
                onClickValue={value => handleClickStateMenu(value)}
                theme={2}
                defaultValue={stateFilter}>
                {renderMenuListCompositionChildren()}
              </MenuListComposition>
            </Box>
          </Box>
          <Box className={styles.AffirmationsListFilterBtnMenu}>
            <Box className={styles.AffirmationsListFilterBtnMenuComponent}>
              <MultipleSelectCheckbox
                onClickValue={value => handleClickTopicMenu(value)}
                defValue={topicFilter}
              >
                {renderMultipleSelectCheckboxChildren()}
              </MultipleSelectCheckbox>
            </Box>
          </Box>
          <Box className={styles.AffirmationsListFilterBtnMenu}>
            <Box className={styles.AffirmationsListFilterBtnMenuComponent}>
              <MultipleSelectCheckbox
                isPacks={true}
                onClickValue={value => handleClickPackMenu(value)}
                defValue={packFilter}
              >
                {renderMultipleSelectCheckboxPackChildren()}
              </MultipleSelectCheckbox>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.AffirmationsListBodyContainer} style={handleTheme3Styles()}>
        {chipsUp && <Box className={`${styles.AffirmationsListChipsContainer} ${styles.AffirmationsListChipsUp}`}>
          {renderChipsItems()}
        </Box>}
        <Box className={styles.AffirmationsListAffirmationChartContainer}>
          {handleTotalAffirmations() > 0
            ? renderAffirmationsAffirmationChart()
            : <span>{t('dashboard.IntentionsList.noData')}</span>
          }
        </Box>
        {!chipsUp && <Box className={styles.AffirmationsListChipsContainer}>
          {renderChipsItems()}
        </Box>}
      </Box>
    </section>
  )
}

AffirmationsList.propTypes = {
  chipsUp: PropTypes.bool,
  multiUser: PropTypes.bool,
  user: PropTypes.object,
  limit: PropTypes.number,
  title: PropTypes.string,
  theme: PropTypes.number,
  getSensies: PropTypes.func
}

export default AffirmationsList
