// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
// components
import BoxModel1 from '../../components/StatisticsBoxes/BoxModel1'
import BoxModel2 from '../../components/StatisticsBoxes/BoxModel2'
import BoxModel3 from '../../components/StatisticsBoxes/BoxModel3'
// constants
import { iconsConstants } from '../../constants/icons'
// styles
import styles from './styles.module.scss'

// const
const { sensieCircles } = iconsConstants

// * page
/**
 * SagaDashboard page component
 * @component
 */
const SageDashboard = () => {
  // ? hooks
  const [t] = useTranslation('global')

  return (
    <div className={styles.SageDashboardContainer}>
      <div className={styles.SageDashboardSectionContainer}>
        <Header withTitle={true} title={t('dashboard.SageDashboard.title')} withBack={false} withPeople={false} withDate={true} />
        <div className={styles.SageDashboardSectionInfoContainer}>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <BoxModel1 evaIcon="person-outline" value={2000} text={t('dashboard.SageDashboard.enjoyers')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <BoxModel1 evaIcon="person-add-outline" value={1500} text={t('dashboard.SageDashboard.newEnjoyers')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <BoxModel1 evaIcon="person-done-outline" value={3500} text={t('dashboard.SageDashboard.activeEnjoyers')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <BoxModel2 text={t('dashboard.SageDashboard.flow')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <BoxModel1 customIcon={sensieCircles} value={160} text={t('dashboard.SageDashboard.sensies')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <BoxModel1 customIcon={sensieCircles} value={160} text={t('dashboard.SageDashboard.sensiesActiveEnjoyers')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <BoxModel2 text={t('dashboard.SageDashboard.vDissScore')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <BoxModel1 evaIcon="smartphone-outline" value={4} text={t('dashboard.SageDashboard.virality')}/>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={styles.SageDashboardSectionContainer}>
        <Header withTitle={true} title={t('dashboard.SageDashboard.title2')} withBack={false} withPeople={false} withDate={false} />
        <div className={styles.SageDashboardSectionInfoContainer}>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6} md={3} xl={3}>
              <BoxModel3 value={1500} value2={980} title={t('dashboard.SageDashboard.enjoyers')} text={t('dashboard.SageDashboard.lastMonth')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={3} xl={3}>
              <BoxModel3 value={460} value2={590} title={t('dashboard.SageDashboard.newEnjoyers')} text={t('dashboard.SageDashboard.lastMonth')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={3} xl={3}>
              <BoxModel3 value={1230} value2={980} title={t('dashboard.SageDashboard.activeEnjoyers')} text={t('dashboard.SageDashboard.lastMonth')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={3} xl={3}>
              <BoxModel3 value={128} value2={89} title={t('dashboard.SageDashboard.activeEnjoyers')} text={t('dashboard.SageDashboard.lastMonth')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={3} xl={3}>
              <BoxModel3 value={120} value2={120} title={t('dashboard.SageDashboard.medianDailyStreak')} text={t('dashboard.SageDashboard.lastMonth')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={3} xl={3}>
              <BoxModel3 value={234} value2={123} title={t('dashboard.SageDashboard.top10AvgDailyStreak')} text={t('dashboard.SageDashboard.lastMonth')}/>
            </Grid>
            <Grid item xs={6} sm={6} md={3} xl={3}>
              <BoxModel3 value={680} value2={554} title={t('dashboard.SageDashboard.top40AvgDailyStreak')} text={t('dashboard.SageDashboard.lastMonth')}/>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default SageDashboard
