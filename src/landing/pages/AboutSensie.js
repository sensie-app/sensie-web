import React from 'react'
import { makeStyles, Grid, Box } from '@material-ui/core'
import Title from '../components/Title/Title'
import Features from '../components/Features'
import Idea from '../assets/img/idea.svg'
import Innovation from '../assets/img/innovation.svg'
import Microscope from '../assets/img/microscope.svg'
import NeuroImaging from '../assets/img/neuroimaging.svg'
import Manifesto from '../components/Manifesto'
import Mike from '../assets/img/MikeDannheim.png'
import Photos from '../components/Photos'

const useStyles = makeStyles({
  background: {
    backgroundColor: '#071215'
  }
})

const AboutSensie = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.background}>
      <Grid item xs={1}></Grid>
      <Grid item container xs={10}>
        <Grid item xs={12}>
          <Box my={6}>
            <Title title="About sensie"></Title>
          </Box>
        </Grid>
        <Grid xs={5}>
        <Box mt={4}>
          <Manifesto title='MANIFESTO' text='To foster people and communities that are connected to themselves and their feelings; to empower the world in building lives driven by intention and purpose' />
          </Box>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={6}>
          <Box mt={4}>
          <Features icon={Idea} text={'We are a team of yogis, scientists, and engineers dedicated to empowering humanity to take well-being back into their own hands. That starts with a focus on emotional intelligence and providing a clear, objective signal for the body’s response to stress.'} />

          </Box>
          <Box mt={3}>
          <Features icon={Innovation} text={'Technology of all kinds can help us along the way, but our vision is one in which we advance our ability to adapt, effectively cope with stress and govern our own internal states. The future for well-being is tool-based and supported by helping us see what was previously unseen. Unlimited possibilities await.'} />

          </Box>
          <Box mt={3}>
          <Features icon={Microscope} text={'We’re building off of over one hundred years of cutting edge research, working closely with our community and in collaboration with private and public partners and scientists to get functional tools into the hands of people everywhere. We’re starting with a focus on stress reduction.'} />

          </Box>
          <Box mt={3}>
          <Features icon={NeuroImaging} text={'Recent breakthroughs in the fields of neuroscience and physiology have unlocked the mind/body connection. By applying sensing technology, we aim to empower humanity to take their health into their own hands.'} />

          </Box>
        </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid container xs={12}>
        <Box my={15}>
          <Photos photo={Mike} />
          <Photos photo={Mike} />
          <Photos photo={Mike} />
          <Photos photo={Mike} />
          <Photos photo={Mike} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default AboutSensie
