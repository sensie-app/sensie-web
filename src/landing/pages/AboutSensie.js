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
import RedTshirt from '../assets/img/RedTshirt.png'
import HinnerkBoriss from '../assets/img/HinnerkBoriss.png'
import KeithTribble from '../assets/img/KeithTribble.png'
import SatyenRaja from '../assets/img/SatyenRaja.png'
import JoinUs from '../components/JoinUs'
import FormFooter from '../components/FormFooter'
import Member from '../components/Member'
import AboutUs from '../components/AboutUs'

const useStyles = makeStyles({
  background: {
    backgroundColor: '#071215'
  }
})

const AboutSensie = () => {
  const classes = useStyles()
  return (
    <div id="abs">
      <Grid container className={classes.background}>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10}>
          <Grid item xs={12} data-aos="zoom-out-up">
            <Box mt={16} mb={4}>
              <Title title="About sensie"></Title>
            </Box>
          </Grid>
          <Grid xs={5} data-aos="zoom-out-up">
            <Box mt={4}>
              <Manifesto
                title="MANIFESTO"
                text="To foster people and communities that are connected to themselves and their feelings; to empower the world in building lives driven by intention and purpose"
              />
            </Box>
          </Grid>
          <Grid xs={1}></Grid>
          <Grid xs={6} data-aos="zoom-out-up">
            <Box mt={4}>
              <Features
                icon={Idea}
                text={
                  'We are a team of yogis, scientists, and engineers dedicated to empowering humanity to take well-being back into their own hands. That starts with a focus on emotional intelligence and providing a clear, objective signal for the body’s response to stress.'
                }
              />
            </Box>
            <Box mt={4}>
              <Features
                icon={Innovation}
                text={
                  'Technology of all kinds can help us along the way, but our vision is one in which we advance our ability to adapt, effectively cope with stress and govern our own internal states. The future for well-being is tool-based and supported by helping us see what was previously unseen. Unlimited possibilities await.'
                }
              />
            </Box>
            <Box mt={4}>
              <Features
                icon={Microscope}
                text={
                  'We’re building off of over one hundred years of cutting edge research, working closely with our community and in collaboration with private and public partners and scientists to get functional tools into the hands of people everywhere. We’re starting with a focus on stress reduction.'
                }
              />
            </Box>
            <Box mt={4}>
              <Features
                icon={NeuroImaging}
                text={
                  'Recent breakthroughs in the fields of neuroscience and physiology have unlocked the mind/body connection. By applying sensing technology, we aim to empower humanity to take their health into their own hands.'
                }
              />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid container justify-content="space-evenly">
          <Grid item xs={1} sm={2}></Grid>
          <Grid
            item
            xs={10}
            sm={8}
            container
            justify="space-evenly"
            alignItems="center"
            data-aos="zoom-out-up"
          >
            <Grid item xs={12}>

            <AboutUs
              title="Our Team"
              textWithoutColor="We are a team of yogis, scientists, and engineers dedicated to"
              textWithColor="empowering humanity"
              textWithoutColor2="to take well-being back into their own hands."
            />
            </Grid>
            <Box mt={8} textAlign="center">
              <Member avatar={Mike} name="MIKE DANNHEIM" role="CEO & FOUNDER" />
            </Box>
            <Box mt={8} textAlign="center">
              <Member
                avatar={RedTshirt}
                name="THOMAS GERSTEN"
                role="COFOUNDER"
              />
            </Box>
            <Box mt={8} textAlign="center">
              <Member
                avatar={HinnerkBoriss}
                name="DR. HINNERK BORISS"
                role="CFO"
              />
            </Box>
            <Box mt={8} textAlign="center">
              <Member avatar={KeithTribble} name="KEITH TRIBBLE" role="BD" />
            </Box>
            <Box mt={8} textAlign="center">
              <Member avatar={SatyenRaja} name="SATYEN RAJA" role="CCO" />
            </Box>
          </Grid>
          <Grid item xs={1} sm={2}></Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10} data-aos="zoom-out-up">
          <Grid xs={5}>
            <Box mt={12}>
              <JoinUs
                title="Join us"
                text="We’re building tools to benefit the lives of billions and to create the conditions to help end suffering... and we need your help."
              />
            </Box>
          </Grid>
          <Grid xs={1}></Grid>
          <Grid xs={6}>
            <Box my={15}>
              <FormFooter />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  )
}

export default AboutSensie
