/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { Grid, Box, makeStyles, Hidden } from '@material-ui/core'
import { Parallax, Background } from 'react-parallax'

// Components
import Title from '../components/Title/Title'
import Subtitle from '../components/Subtitle'
import BulletPoint from '../components/BulletPoint'
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
import MindfullBeginner from '../assets/img/MindfullBeginner.svg'
import TheIntellectualizer from '../assets/img/TheIntellectualizer.svg'
import TheIntuitiveBull from '../assets/img/TheIntuitiveBull.svg'
import TheDoubter from '../assets/img/TheDoubter.svg'
import OnthePath from '../assets/img/OnthePath.svg'
import TheConnectedBeing from '../assets/img/TheConnectedBeing.svg'
import MetatronStae from '../assets/img/MetatronStae.svg'
// import membership from '../assets/img/membership.jpg'
import MiamiHerald from '../assets/img/miamiheraldpng.png'
import AmericanPsychiatric from '../assets/img/americanpsychiatricpng.png'
import Wired from '../assets/img/wiredpng.png'
import Transtech from '../assets/img/transtechpng.png'
import BerkeleyWell from '../assets/img/berkeleywellpng.png'
import StartUpFiu from '../assets/img/startupfiupng.png'
// import backgroundCarrousel from '../assets/img/backgroundCarrousel.png'
// import backgroundPhrases from '../assets/img/backgroundPhrases.jpg'
import backgroundScience from '../assets/img/backgroundScience.png'
import backgroundWisdom from '../assets/img/backgroundWisdom.png'
import backgroundSelfAwareness from '../assets/img/backgroundSelfAwareness.png'
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
import WisdomCard from '../components/WisdomCard'

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

  const [show, setShow] = useState(true)
  setTimeout(() => {
    setShow(!show)
  }, 6000)

  // function showScroll () {
  //   const scrollTop = document.documentElement.scrollTop
  //   console.log(scrollTop)
  //   if (scrollTop > 2128) {
  //     //   setTimeout(() => {
  //     //     setshow(!show)
  //     //   }, 6000)
  //     console.log('ahora')
  //   }
  // }

  // window.addEventListener('scroll', showScroll)

  return (
    <div id="hm" style={{ backgroundColor: '#071215' }}>
      {/* BLOQUE 1 Your Smarthphone Just Got Smarter */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box mt={12}></Box>
        </Grid>
        <Grid item xs={1} md={5}>
          <Hidden smDown>
            <Box mt={-16}>

            <Trazado />
            </Box>
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
            <BulletPoint
              IconItem={Blockages}
              title={'Identify perfomance blockages'}
            />
          </Box>
          <Box mt={2}>
            <BulletPoint
              IconItem={Awareness}
              title={'Gain deep personal insights'}
            />
          </Box>
          <Box mt={2}>
            <BulletPoint
              IconItem={EcologyHuman}
              title={'Feel amazing on demand'}
            />
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
        <Box mt={-20} mb={18}>
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
      <Grid container direction="column">
        <Box mt={2} mb={10}>
          <Grid item xs={12} data-aos="zoom-out-up">
            <Phrases
              textWithoutColor="Start measuring and expanding self-awareness."
              textWithColor="Feel your wisdom."
            />
          </Grid>
        </Box>
        <Grid item container>
          <Grid item xs={2}></Grid>
          <Grid item container xs={8} justify="space-evenly">
            <Grid item xs={12} sm={6} data-aos="zoom-out-up">
              <WisdomCard
                ImageW={MindfullBeginner}
                level="Level 1"
                text="Mindfull Beginner"
                width="120px"
                height="120px"
              />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6} data-aos="zoom-out-up">
              <WisdomCard
                ImageW={TheIntellectualizer}
                level="Level 2"
                text="The Intellectualizer"
                width="120px"
                height="120px"
              />
            </Grid>
            <Grid item xs={12} sm={6} data-aos="zoom-out-up">
              <WisdomCard
                ImageW={TheIntuitiveBull}
                level="Level 3"
                text="The Intuitive Bull"
                width="120px"
                height="120px"
              />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6} data-aos="zoom-out-up">
              <WisdomCard
                ImageW={TheDoubter}
                level="Level 4"
                text="The Doubter"
                width="120px"
                height="120px"
              />
            </Grid>
            <Grid item xs={12} sm={6} data-aos="zoom-out-up">
              <WisdomCard
                ImageW={OnthePath}
                level="Level 5"
                text="On The Path"
                width="120px"
                height="120px"
              />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6} data-aos="zoom-out-up">
              <WisdomCard
                ImageW={TheConnectedBeing}
                level="Level 6"
                text="The Connected Being"
                width="120px"
                height="120px"
              />
            </Grid>
            <Grid item xs={12} sm={6} data-aos="zoom-out-up">
              <WisdomCard
                ImageW={MetatronStae}
                level="Level 7"
                text="Metatron Stae"
                width="169px"
                height="169px"
              />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
      {/* BLOQUE 4 How it works */}
      <div style={{ height: 700 }} id="howitworks">
        <Grid container className={classes.background}>
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
                    <Box mt={22}>
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
      </div>
      {/* BLOQUE 5 The Science */}
      <div id="science"></div>
      <Parallax strength={300}>
        <Background className="backgroundImg">
          <img src={backgroundScience} />
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
      <Parallax strength={300}>
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
      <div id="membership"></div>
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
