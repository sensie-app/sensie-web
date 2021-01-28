import React from 'react'
import { makeStyles, Grid, Box } from '@material-ui/core'
import Title from '../components/Title/Title'
import Features from '../components/Features'
// import Idea from '../assets/img/idea.svg'
// import Innovation from '../assets/img/innovation.svg'
// import Microscope from '../assets/img/microscope.svg'
// import NeuroImaging from '../assets/img/neuroimaging.svg'
import Manifesto from '../components/Manifesto'
import Mike from '../assets/img/MikeDannheim.png'
import MikeySiegel from '../assets/img/MikeySiegel.jpg'
import ThomasGersten from '../assets/img/ThomasGersten.png'
import HinnerkBoriss from '../assets/img/HinnerkBoriss.png'
import KeithTribble from '../assets/img/KeithTribble.png'
import SatyenRaja from '../assets/img/SatyenRaja.png'
import AnneJensen from '../assets/img/AnneJensen.png'
import AnnmarieChereso from '../assets/img/AnnmarieChereso.jpg'
import SylviaBenito from '../assets/img/SylviaBenito.png'
import JeremyTabke from '../assets/img/JeremyTabke.png'
import GescheHaas from '../assets/img/GescheHaas.png'
import EvaSelhub from '../assets/img/EvaSelhub.png'
import EnitanMarcelle from '../assets/img/EnitanMarcelle.png'
import WilliamSoftky from '../assets/img/WilliamSoftky.jpg'
import RobertHanna from '../assets/img/RobertHanna.jpg'
import LuisGallardo from '../assets/img/LuisGallardo.jpg'
import JoinUs from '../components/JoinUs'
import FormFooter from '../components/FormFooter'
import Member from '../components/Member'
import VisionMision from '../components/VisionMision'

const useStyles = makeStyles({
  background: {
    backgroundColor: '#071215'
  },
  members: {
    textAlign: '-webkit-center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2.8rem',
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
          <Box className={classes.members}>
            <Grid item xs={12} data-aos="zoom-out-up">
              <Box mt={'12rem'} mb={4}>
                <Title title="About"></Title>
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid xs={10} data-aos="zoom-out-up">
              <Box mt={4}>
                <Manifesto
                  title="MANIFESTO"
                  text="Our manifesto is how we share our culture with the world. It’s evolving, ever-expanding and is intended to uplift, empower, and shift us into ways of being that help us and the world simultaneously thrive. Like attracts like, our values and manifesto are designed to attract likeminded teammates, partners and customers to help us fulfill our mission and vision. Internally, our manifesto and values are used as guiding principles to help us move in a rhythm that supports our teammates, customers, partners and investors."
                  feel="Like an instrument, I perform "
                  feel2="based on how I "
                />
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
          </Box>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={5}>
            <Box mt={6} data-aos="zoom-out-up">
              <Features text={'We move slowly and fix things.'} />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features
                text={'The greatest power I will ever experience is awareness.'}
              />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features text={'Awareness is the seat of intelligence.'} />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features
                text={
                  'A day is an act of creation, how I feel is what I create.'
                }
              />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features text={'I can choose how I feel.'} />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features
                text={
                  'Feelings of powerlessness are a reminder that I’m supported by a community of loving beings.'
                }
              />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features
                text={
                  'My ability to be vulnerable and authentically relate and connect are the medicine.'
                }
              />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features text={'All things in balance.'} />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features
                text={
                  'The act of observation is my center, no matter what is going on out there I can rest peacefully within here.'
                }
              />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features text={'Intention > goals'} />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features
                text={
                  'Goals create desire, desire creates desire and gets us nowhere Intention creates ways of being, ways of being create focused action, focused action creates effort and output in the direction of our intention.'
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box mt={6} data-aos="zoom-out-up">
              <Features
                text={
                  'At Sensie we start each day and every meeting authentically relating to our feelings and to each other as a reminder of our power.'
                }
              />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features
                text={
                  'Every Sensie teammate sets their long, mid and short term intentions (relative). We share our intentions with our team and our family to co-create and manifest that which we would like to see in the world.'
                }
              />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features
                text={
                  'We commit to supporting each other from a place of authentically supporting ourselves. The statement, “I am supported” and my feelings associated with it are a litmus test for my well being.'
                }
              />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features text={'We don’t take ourselves too seriously.'} />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features text={'We bring play to our work.'} />
            </Box>
            <Box mt={2} data-aos="zoom-out-up">
              <Features
                text={
                  'Deeply committed, but not attached to making the vision a reality everyday'
                }
              />
            </Box>
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={1} sm={3}></Grid>
          <Grid item xs={10} sm={6}>
            <Box
              style={{ textAlign: '-webkit-center' }}
              mt={10}
              data-aos="zoom-out-up"
            >
              <VisionMision
                title="VISION"
                text="A world of people connected to their feelings living happier, healthier lives."
              />
              <VisionMision
                title="MISSION"
                text="To reconnect the world to their hearts and intuitive wisdom."
              />
            </Box>
          </Grid>
          <Grid item xs={1} sm={3}></Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid container justify-content="space-evenly">
          <Grid item xs={1}></Grid>
          <Grid
            item
            xs={10}
            sm={12}
            container
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Box mt={14} className={classes.title} data-aos="zoom-out-up">
                <span className={classes.title}>Advisory Board</span>
              </Box>
            </Grid>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={EvaSelhub}
                name="Dr. Eva Selhub"
                role="MD"
                urlLinkedin="https://www.linkedin.com/in/theloveresponse/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={AnneJensen}
                name="Dr. Anne Jensen"
                role="MSc, DC, DPhil (PhD)"
                urlLinkedin="https://www.linkedin.com/in/anne-jensen-bb26a63/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={WilliamSoftky}
                name="Bill Softky"
                role="PhD"
                urlLinkedin="https://www.fairobserver.com/author/william-softky/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={EnitanMarcelle}
                name="Enitan Marcelle"
                role="PhD candidate"
                urlLinkedin="https://www.linkedin.com/in/enitanmarcelle/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={MikeySiegel}
                name="Mikey Siegel"
                role="MS"
                urlLinkedin="https://www.linkedin.com/in/mikeysiegel/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={AnnmarieChereso}
                name="Annmarie Cheereso"
                role="-"
                urlLinkedin="https://www.linkedin.com/in/annmarie-chereso-a3ab2311/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={GescheHaas}
                name="Gesche Haas"
                role="-"
                urlLinkedin="https://www.linkedin.com/in/gesche/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={LuisGallardo}
                name="Luis Gallardo"
                role="-"
                urlLinkedin="https://www.linkedin.com/in/luisgallardo/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={SylviaBenito}
                name="Sylvia Benito"
                role="-"
                urlLinkedin="https://www.linkedin.com/in/sylvia-benito-cfa-3191975/"
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
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Box mt={14} className={classes.title} data-aos="zoom-out-up">
                <span className={classes.title}>Our Team</span>
              </Box>
            </Grid>
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
                avatar={RobertHanna}
                name="ROBERT HANNAH"
                role="DATA ANALYST"
                urlLinkedin="https://www.linkedin.com/in/robert-hannah-55241a188/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={JeremyTabke}
                name="JEREMY TABKE"
                role="HEAD OF ENGINEERING"
                urlLinkedin="https://www.linkedin.com/in/jeremytabke/"
              />
            </Box>
            <Box mt={8} textAlign="center" data-aos="zoom-out-up">
              <Member
                avatar={Mike}
                name="MIKE DANNHEIM"
                role="CEO & FOUNDER"
                urlLinkedin="https://www.linkedin.com/in/michaeldannheim/"
              />
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10} data-aos="zoom-out-up">
          <Grid xs={12} sm={5}>
            <Box my={12}>
              <JoinUs
                title="Join us"
                text="We’re building tools to benefit the lives of billions and to create the conditions to help end suffering... and we need your help."
              />
            </Box>
          </Grid>
          <Grid xs={0} sm={1}></Grid>
          <Grid xs={12} sm={6}>
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
