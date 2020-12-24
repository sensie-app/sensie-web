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
import MikeySiegel from '../assets/img/MikeySiegel.jpg'
import ThomasGersten from '../assets/img/ThomasGersten.png'
import HinnerkBoriss from '../assets/img/HinnerkBoriss.png'
import KeithTribble from '../assets/img/KeithTribble.png'
import SatyenRaja from '../assets/img/SatyenRaja.png'
import AnneJensen from '../assets/img/AnneJensen.jpg'
import AnnmarieChereso from '../assets/img/AnnmarieChereso.png'
import EvaSelhub from '../assets/img/EvaSelhub.png'
import EnitanMarcelle from '../assets/img/EnitanMarcelle.jpg'
import WilliamSoftky from '../assets/img/WilliamSoftky.jpg'
import JoinUs from '../components/JoinUs'
import FormFooter from '../components/FormFooter'
import Member from '../components/Member'

const useStyles = makeStyles({
  background: {
    backgroundColor: '#071215'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: '-webkit-center',
    color: 'white'
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
              <Title title="About"></Title>
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
          <Grid item xs={1}></Grid>
          <Grid
            item
            xs={10}
            sm={12}
            container
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Box mt={14} className={classes.title} data-aos="zoom-out-up">
                <span>Scientific Advisory Board</span>
              </Box>
            </Grid>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={EvaSelhub}
                name="Dr. Eva Selhub"
                urlLinkedin="https://www.linkedin.com/in/theloveresponse/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={AnneJensen}
                name="Dr. Anne Jensen"
                urlLinkedin="https://www.linkedin.com/in/anne-jensen-bb26a63/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={WilliamSoftky}
                name="Bill Softsky"
                urlLinkedin="https://www.fairobserver.com/author/william-softky/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={EnitanMarcelle}
                name="Enitan Marcelle"
                urlLinkedin="https://www.linkedin.com/in/enitanmarcelle/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={MikeySiegel}
                name="Mikey Siegel"
                urlLinkedin="https://www.linkedin.com/in/mikeysiegel/"
              />
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid
            item
            xs={10}
            sm={12}
            container
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} >
                            <Box mt={14} className={classes.title} data-aos="zoom-out-up">

              <span
                className={classes.title}>
                  Our Team
              </span>
                </Box>
            </Grid>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={Mike}
                name="MIKE DANNHEIM"
                role="CEO & FOUNDER"
                urlLinkedin="https://www.linkedin.com/in/michaeldannheim/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={ThomasGersten}
                name="THOMAS GERSTEN"
                role="COFOUNDER"
                urlLinkedin="https://www.linkedin.com/in/thomas-gersten-2281371/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={HinnerkBoriss}
                name="DR. HINNERK BORISS"
                role="CFO"
                urlLinkedin="https://www.linkedin.com/in/hboriss/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={KeithTribble}
                name="KEITH TRIBBLE"
                role="BD"
                urlLinkedin="https://www.linkedin.com/in/keithtribble/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={SatyenRaja}
                name="SATYEN RAJA"
                role="CCO"
                urlLinkedin="https://www.linkedin.com/in/satyenraja/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={AnnmarieChereso}
                name="ANNMARIE CHEERESO"
                role="COACHING PARTNER"
                urlLinkedin="https://www.linkedin.com/in/annmarie-chereso-a3ab2311/"
              />
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
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
