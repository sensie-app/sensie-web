/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { Grid, Box, makeStyles, Hidden } from '@material-ui/core'
import { Parallax, Background } from 'react-parallax'

// Components
import Title from '../components/Title/Title'
import Subtitle from '../components/Subtitle'
import Item from '../components/Item'
import Sponsor from '../components/Sponsor'
import DownloadImg from '../components/DownloadImg'
import CarouselComponent from '../components/carouselComponent/CarouselComponent'
import Phrases from '../components/Phrases'
import Trazado from '../components/Trazado'
import CustomCard from '../components/CustomCard'
// CSS
import '../assets/css/GradientBar.css'
import '../styles/index.scss'

// Img
// import membership from '../assets/img/membership.jpg'
import MiamiHerald from '../assets/img/miamiheraldpng.png'
import AmericanPsychiatric from '../assets/img/americanpsychiatricpng.png'
import Wired from '../assets/img/wiredpng.png'
import Transtech from '../assets/img/transtechpng.png'
import BerkeleyWell from '../assets/img/berkeleywellpng.png'
import StartUpFiu from '../assets/img/startupfiupng.png'
// import backgroundCarrousel from '../assets/img/backgroundCarrousel.png'
// import backgroundPhrases from '../assets/img/backgroundPhrases.jpg'
import backgroundScience from '../assets/img/backgroundScience2.png'
import backgroundWisdom from '../assets/img/backgroundWisdom.png'
import backgroundSelfAwareness from '../assets/img/backgroundSelf-awareness.png'
// import backgroundTrazado from '../assets/img/Trazado.svg'

// Icons
import Blockages from '../assets/img/Blockages.svg'
import Awareness from '../assets/img/Awareness.svg'
import EcologyHuman from '../assets/img/EcologyHuman.svg'
import AppleStore from '../assets/img/app-store.svg'
import PlayStore from '../assets/img/google-play.svg'
import Epigraph from '../components/Epigraph'
import Lead from '../components/Lead'
import LearnMore from '../components/LearnMore'
import Whip from '../components/Whip'

const useStyles = makeStyles((theme) => ({
  list: {
    padding: '20px'
  },

  background: {
    backgroundColor: '#071215'
  }
}))

const Home = () => {
  const classes = useStyles()

  const [show, setshow] = useState(false)
  setTimeout(() => {
    setshow(!show)
  }, 6000)

  return (
    <div style={{ backgroundColor: '#071215' }}>
      {/* BLOQUE 1 Your Smarthphone Just Got Smarter */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box mt={4}></Box>
        </Grid>
        <Grid item xs={1} md={5}>
          <Hidden smDown>
            <Trazado />
          </Hidden>
        </Grid>
        <Grid item xs={10} md={6} data-aos="zoom-out-up">
          <Box mt={8}>
            <Title title="Your Smarthphone Just Got Smarter" />
          </Box>
          <Box mt={1} mr={1}>
            <Subtitle subtitle="Sensie is a millon dolar coach, available whenever, wherever." />
          </Box>
          <Box mt={3}>
            <Item
              IconItem={Blockages}
              title={'Identify perfomance blockages'}
            />
          </Box>
          <Box mt={2}>
            <Item IconItem={Awareness} title={'Gain deep personal insights'} />
          </Box>
          <Box mt={2}>
            <Item IconItem={EcologyHuman} title={'Feel amazing on demand'} />
          </Box>
          <Box mt={3}>
            <Grid container direction="row">
              <DownloadImg ImgStore={AppleStore} />
              <DownloadImg ImgStore={PlayStore} />
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>

      {/* BLOQUE 2 Carousel & Sponsor */}

      <Grid direction="column">
        <Box mt={10} mb={30}>
          <Grid container>
            <Grid item xs={1} sm={3}></Grid>
            <Grid item xs={10} sm={6} data-aos="zoom-out-up">
              <CarouselComponent />
            </Grid>
            <Grid item xs={1} sm={3}></Grid>
          </Grid>
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
              <Box mt={8} textAlign="center">
                <Sponsor SponsorImg={MiamiHerald} width="136px" height="40px" />
              </Box>
              <Box mt={8} textAlign="center">
                <Sponsor
                  SponsorImg={AmericanPsychiatric}
                  width="132px"
                  height="28px"
                />
              </Box>
              <Box mt={8} textAlign="center">
                <Sponsor SponsorImg={Wired} width="146px" height="20px" />
              </Box>
              <Box mt={8} textAlign="center">
                <Sponsor SponsorImg={Transtech} width="135px" height="20px" />
              </Box>
              <Box mt={8} textAlign="center">
                <Sponsor SponsorImg={StartUpFiu} width="135px" height="15px" />
              </Box>
              <Box mt={8}>
                <Sponsor
                  SponsorImg={BerkeleyWell}
                  width="125px"
                  height="54px"
                />
              </Box>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
          </Grid>
        </Box>
      </Grid>

      {/* BLOQUE 3 Citation */}
      <Parallax strength={500}>
        <Background className="backgroundImg">
          <img src={backgroundWisdom} alt="fill murray" />
        </Background>
        <Grid container direction="column">
          <Box my={34}>
            <Grid item xs={12} data-aos="zoom-out-up">
              <Phrases
                textWithoutColor="Start measuring and expanding self-wareness."
                textWithColor="Feel your wisdom."
              />
            </Grid>
          </Box>
        </Grid>
      </Parallax>

      {/* BLOQUE 4 How it works */}
      <Grid id="howitworks" container className={classes.background}>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10}>
          <Grid item xs={12} sm={6}>
            <Box my={23}>
              <Grid data-aos="zoom-out-up">
                <Title title="How it works" />
              </Grid>
              <Box mt={1}>
                <Grid data-aos="zoom-out-up">
                  <Epigraph epigraph="Sensie use sensor technology existing in the smartphone." />
                </Grid>
              </Box>
              {show ? (
                <div>
                  <Box mt={8}>
                    <Grid data-aos="zoom-out-up">
                      <Lead lead="Sensie uses existing sensors in your phone to measure de movement in the gesture and detect stress." />
                    </Grid>
                  </Box>

                  <Box mt={2}>
                    <Grid data-aos="zoom-out-up">
                      <Epigraph epigraph="After detection, Sensie helps release stress through automated personalized coaching procedures." />
                    </Grid>
                  </Box>
                  <Box my={4}>
                    <Grid container direction="row" data-aos="zoom-out-up">
                      <DownloadImg ImgStore={AppleStore} />
                      <DownloadImg ImgStore={PlayStore} />
                    </Grid>
                  </Box>
                </div>
              ) : (
                <Grid data-aos="zoom-out-up">
                  <Box mt={22} mb={35}>
                    <Whip
                      textWithoutColor="Whip 3x"
                      textWithColor="to detect stress"
                    />
                  </Box>
                </Grid>
              )}
            </Box>
          </Grid>
          <Grid xs={12} sm={6}></Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      {/* BLOQUE 5 The Science */}
      <Parallax strength={500}>
        <Background className="backgroundImg">
          <img src={backgroundScience} alt="fill murray" />
        </Background>
        <Grid id="thescience" container>
          <Grid item xs={1}></Grid>
          <Grid item container xs={10}>
            <Grid item xs={12} sm={7}>
              <Box my={34}>
                <Box>
                  <Grid data-aos="zoom-out-up">
                    <Title title="The Science" />
                  </Grid>
                </Box>
                <Box>
                  <Grid data-aos="zoom-out-up">
                    <Subtitle subtitle="Muscle tension is a relax reaction to stress." />
                  </Grid>
                </Box>
                <Box>
                  <Grid data-aos="zoom-out-up">
                    <Epigraph epigraph="We store stress and emotions in our bodies." />
                  </Grid>
                </Box>
                <Box mt={6}>
                  <Grid data-aos="zoom-out-up">
                    <LearnMore />
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={5}></Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Parallax>

      {/* BLOQUE 6 Web and mobile solution */}
      <Grid container id="webandmobilesolution" direction="column">
        <Box my={14}>
          <Grid item xs={12} data-aos="zoom-out-up">
            <Grid
              item
              xs={12}
              data-aos="fade-up"
              data-aos-duration="3000"
              alignItems="center"
            >
              <Title title="Web and Mobile Solution" centerTitle={true} />
            </Grid>
            <Grid
              container
              xs={12}
              direction="row"
              style={{ alignItems: 'center' }}
            ></Grid>
          </Grid>
        </Box>
      </Grid>

      {/* BLOQUE 7 Citation */}
      <Parallax strength={500}>
        <Background className="backgroundSelfAwareness">
          <img src={backgroundSelfAwareness} />
        </Background>
        <Grid container direction="column">
          <Box my={34}>
            <Grid item xs={12} data-aos="zoom-out-up">
              <Phrases
                textWithoutColor="The world 1st self-awareness assesment"
                textWithColor="and coach is here for you and your team."
              />
            </Grid>
          </Box>
        </Grid>
      </Parallax>

      {/* BLOQUE 8 Membership */}

      <Grid container id="membership" direction="column">
        <Box my={14}>
          <Grid item xs={12} data-aos="zoom-out-up">
            <Grid item xs={12} data-aos="zoom-out-up" alignItems="center">
              <Title title="Membership" centerTitle={true} />
            </Grid>
            <Grid
              container
              xs={12}
              direction="row"
              style={{ alignItems: 'center' }}
            >
              <Grid item xs={12} sm={4}>
                <Box p={2} data-aos="zoom-out-up" textAlign="-webkit-center">
                  <CustomCard title="FREEMIUM" price="$0" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box p={2} data-aos="zoom-out-up" textAlign="-webkit-center">
                  {' '}
                  <CustomCard title="GROUP" price="$200" largeCard={true} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box p={2} data-aos="zoom-out-up" textAlign="-webkit-center">
                  {' '}
                  <CustomCard title="ENTERPRISE" price="$300" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  )
}

export default Home
