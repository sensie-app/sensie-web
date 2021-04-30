/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
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
import Epigraph from '../components/Epigraph'
import Lead from '../components/Lead'
import LearnMore from '../components/LearnMore'
import Whip from '../components/Whip'
import WisdomCard from '../components/WisdomCard'
import WebAndMobileTitle from '../components/WebAndMobileTitle'
import Hand from '../components/Hand'
import VerticalCarousel from '../components/verticalCarousel/VerticalCarousel'
// import CustomCard from '../components/CustomCard'

// Img and video
import MindfullBeginner from '../assets/img/MindfullBeginner.svg'
import Lock from '../assets/img/lock.svg'
import Lock2 from '../assets/img/lock2.svg'
import ComputerIphoneDashboard from '../assets/img/computerIphoneDashboard.png'
import WhipImg from '../assets/img/whip.png'
import MetatronStae from '../assets/img/MetatronStae.svg'
import MiamiHerald from '../assets/img/miamiheraldpng.png'
import AmericanPsychiatric from '../assets/img/americanpsychiatricpng.png'
import Wired from '../assets/img/wiredpng.png'
import Transtech from '../assets/img/transtechpng.png'
import BerkeleyWell from '../assets/img/berkeleywellpng.png'
import backgroundScience from '../assets/img/backgroundScience1.png'
import backgroundSelfAwareness from '../assets/img/backgroundSelfAwareness1.png'
import SquareHandG from '../assets/video/SquareHandG.mp4'
import videoWebAndMobile from '../assets/video/sensievideo2.mp4'

// Icons
import Measure from '../assets/img/Measure.svg'
import Blockages from '../assets/img/Blockages.svg'
import EcologyHuman from '../assets/img/EcologyHuman.svg'
import AppleStore from '../assets/img/app-store.svg'
import PlayStore from '../assets/img/google-play.svg'

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#000000'
  },
  bgImg: {
    width: '100vw'
  }
}))

const Home = () => {
  const classes = useStyles()

  const [showWhip, setShowWhip] = useState(true)
  const [showDashboard, setShowDashboard] = useState(true)
  const [playWhip, setPlayWhip] = useState(true)
  const [playDashboard, setPlayDashboard] = useState(true)

  useEffect(() => {
    window.onscroll = function () {
      const whipVideo = document.getElementById('videowhip')
      const dashboardVideo = document.getElementById('videosensie')
      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const scrollPercentRounded = Math.round(scrollPercent * 100)
      if (playWhip) {
        function playWhip () {
          setPlayWhip(false)
          whipVideo.play()
        }
        if (scrollPercentRounded > 38 && playWhip && whipVideo) {
          playWhip()
          setTimeout(() => {
            setShowWhip(false)
          }, 2500)
        }
      }
      if (playDashboard) {
        function playDashboard () {
          setPlayDashboard(false)
          dashboardVideo.play()
        }
        if (scrollPercentRounded > 73 && playDashboard && dashboardVideo) {
          playDashboard()
          setTimeout(() => {
            setShowDashboard(false)
          }, 3500)
        }
      }
    }
  }, [playDashboard, playWhip])
  return (
    <div id="hm" style={{ backgroundColor: '#071215' }}>
      {/* BLOQUE 1 Your Smarthphone Just Got Smarter */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box mt={'8rem'}></Box>
        </Grid>
        <Grid item xs={1} sm={1} md={5}>
          <Hidden smDown>
            <Box mt={-16}>
              <Trazado />
            </Box>
          </Hidden>
          <Hidden smDown>
            <Hand />
          </Hidden>
        </Grid>
        <Grid item xs={11} sm={10} md={6} data-aos="zoom-out-up">
          <Box mt={6}>
            <Title title="Trust Your Body" />
          </Box>
          <Box mr={1}>
            <Subtitle subtitle="Sensie is everyone's million dollar coach," />
            <Subtitle subtitle="available whenever, wherever." />
          </Box>
          <Box mt={3}>
            <BulletPoint IconItem={Measure} title={'Measure self-awareness'} />
          </Box>
          <Box mt={2}>
            <BulletPoint
              IconItem={Blockages}
              title={'Identify and clear inner conflict'}
            />
          </Box>
          <Box mt={2}>
            <BulletPoint
              IconItem={EcologyHuman}
              title={'Gain deep personal insights'}
            />
          </Box>
          <Box mt={3}>
            <Grid container direction="row">
              <DownloadImg
                ImgStore={AppleStore}
                link="https://apps.apple.com/us/app/sensie/id1551177612"
              />
              <DownloadImg
                ImgStore={PlayStore}
                link="https://play.google.com/store/apps/details?id=com.sensie"
              />
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={0} sm={1} md={1}></Grid>
      </Grid>

      {/* BLOQUE 2 Carousel & Sponsor */}

      <Grid direction="column">
        <Box mb={18}>
          <Grid container>
            <Grid item xs={0} sm={3}></Grid>
            <Grid item xs={12} sm={6} data-aos="zoom-out-up">
              <CarouselComponent />
            </Grid>
            <Grid item xs={0} sm={3}></Grid>
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
                <Sponsor
                  SponsorImg={MiamiHerald}
                  width="15rem"
                  height="5rem"
                  link="https://www.miamiherald.com/news/business/biz-monday/article232516282.html"
                />
              </Box>
              <Box mt={8} textAlign="center">
                <Sponsor
                  SponsorImg={AmericanPsychiatric}
                  width="15rem"
                  height="3.7rem"
                  link="https://www.youtube.com/watch?v=GUgC5q2VloI&ab_channel=CodyRallMDwithTechforpsych"
                />
              </Box>
              <Box mt={8} textAlign="center">
                <Sponsor
                  SponsorImg={Wired}
                  width="16rem"
                  height="2.8rem"
                  link="https://www.wired.co.uk/article/consciousness-hacking-silicon-valley-enlightenment-brain"
                />
              </Box>
              <Box mt={8} textAlign="center">
                <Sponsor
                  SponsorImg={Transtech}
                  width="15rem"
                  height="2.8rem"
                  link="http://transtech200.com/"
                />
              </Box>
              <Box mt={8}>
                <Sponsor
                  SponsorImg={BerkeleyWell}
                  width="13rem"
                  height="7.2rem"
                  link="https://www.berkeleywellbeing.com/the-top-50-wellness-products-2016.html"
                />
              </Box>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
          </Grid>
        </Box>
      </Grid>

      {/* BLOQUE 3 Citation */}
      <Grid container direction="column">
        <Box mt={2} mb={6}>
          <Grid item xs={12} data-aos="zoom-out-up">
            <Phrases
              textWithoutColor="Start measuring and expanding self-awareness."
              textWithColor="Feel your wisdom."
            />
          </Grid>
        </Box>
        <Box>
          <Grid item container>
            <Grid item xs={5} md={1}></Grid>
            <Grid item container xs={2} sm={12} md={10} justify="space-evenly">
              <Box mt={4} data-aos="fade-right">
                <WisdomCard
                  ImageW={MindfullBeginner}
                  level="Level 1"
                  text="Mindful Beginner"
                  width="9.5rem"
                  height="10.3rem"
                />
              </Box>
              <Box mt={4} data-aos="fade-right" data-aos-delay="200">
                <WisdomCard
                  ImageW={Lock}
                  level="Level 2"
                  text="The Intellectualizer"
                  width="10.3rem"
                  height="10.3rem"
                />
              </Box>
              <Box mt={4} data-aos="fade-right" data-aos-delay="400">
                <WisdomCard ImageW={Lock2} width="10.3rem" height="10.3rem" />
              </Box>
              <Box mt={4} data-aos="fade-right" data-aos-delay="600">
                <WisdomCard
                  ImageW={MetatronStae}
                  level="Level 7"
                  text="Metatron State"
                  width="10.3rem"
                  height="10.3rem"
                />
              </Box>
            </Grid>
            <Grid item xs={5} md={1}></Grid>
          </Grid>
        </Box>
      </Grid>
      {/* BLOQUE 4 How it works */}
      <div style={{ height: '61rem', mixBlendMode: 'lighten' }} id="howitworks">
        <Grid container className={classes.background}>
          <Grid item xs={1}></Grid>
          <Grid item container xs={10}>
            <Hidden smDown>
              <Grid item xs={12} sm={6}>
                <Box my={18}>
                  <Grid data-aos="zoom-out-up">
                    <Title title="How it works" />
                  </Grid>
                  <Box mt={1}>
                    <Grid data-aos="zoom-out-up">
                      <Epigraph epigraph="Sensie uses smartphone sensors to track movement and measure muscular tension associated with thought and spoken word." />
                    </Grid>
                  </Box>
                  {!showWhip ? (
                    <div data-aos="zoom-in">
                      <Box mt={6}>
                        <Grid>
                          <Lead lead="1. Sensie offers a topic to consider - think and feel about" />
                          <Lead lead="2. You then whip the phone 3x " />
                          <Lead lead="3. Sensie measures the recoil of the hand to assess if there is tension " />
                        </Grid>
                      </Box>

                      <Box mt={2}>
                        <Grid>
                          <Epigraph epigraph="After detection, Sensie helps release stress through automated personalized coaching procedures." />
                        </Grid>
                      </Box>
                      <Box my={4}>
                        <Grid container direction="row">
                          <DownloadImg
                            ImgStore={AppleStore}
                            link="https://apps.apple.com/us/app/sensie/id1092166597"
                          />
                          <DownloadImg
                            ImgStore={PlayStore}
                            link="https://play.google.com/store/apps/details?id=com.sensie"
                          />
                        </Grid>
                      </Box>
                    </div>
                  ) : (
                    <Grid data-aos="zoom-out-up">
                      <Box mt={14} mb={4}>
                        <Whip
                          textWithoutColor="Whip 3x"
                          textWithColor="to detect stress"
                        />
                      </Box>
                    </Grid>
                  )}
                </Box>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={12}>
                <Box mt={8}>
                  <Grid data-aos="zoom-out-up">
                    <Title title="How it works" />
                  </Grid>
                </Box>
                <Box mt={1}>
                  <Grid data-aos="zoom-out-up">
                    <Epigraph epigraph="Sensie uses smartphone sensors to track movement and measure muscular tension associated with thought and spoken word." />
                  </Grid>
                </Box>
                <Box mt={14} mb={4}>
                  <Whip
                    textWithoutColor="Whip 3x"
                    textWithColor="to detect stress"
                  />
                </Box>
                <Box>
                  <img src={WhipImg} style={{ width: '100%' }} />
                </Box>
                <Box mt={6}>
                  <Grid>
                    <Lead lead="1. Sensie offers a topic to consider - think and feel about" />
                    <Lead lead="2. You then whip the phone 3x " />
                    <Lead lead="3. Sensie measures the recoil of the hand to assess if there is tension " />
                  </Grid>
                </Box>

                <Box mt={2}>
                  <Grid>
                    <Epigraph epigraph="After detection, Sensie helps release stress through automated personalized coaching procedures." />
                  </Grid>
                </Box>
                <Box mt={4}>
                  <Grid container direction="row">
                    <DownloadImg
                      ImgStore={AppleStore}
                      link="https://apps.apple.com/us/app/sensie/id1092166597"
                    />
                    <DownloadImg
                      ImgStore={PlayStore}
                      link="https://play.google.com/store/apps/details?id=com.sensie"
                    />
                  </Grid>
                </Box>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid xs={12} sm={6} style={{ textAlign: 'right' }}>
                <video
                  id="videowhip"
                  width="auto"
                  height="auto"
                  loop
                  muted
                  src={SquareHandG}
                >
                  <source src={SquareHandG} type="video/mp4" />
                </video>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid xs={12} sm={6} style={{ textAlign: 'right' }}>
                <img src="" />
              </Grid>
            </Hidden>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
      {/* BLOQUE 5 The Science */}
      <div id="science"></div>
      <Hidden smDown>
        <Parallax strength={300}>
          <Background>
            <img
              src={backgroundScience}
              alt="background science"
              className={classes.bgImg}
            />
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
                      <Subtitle subtitle="Muscle tension is a reflex reaction to stress." />
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
      </Hidden>
      <Hidden mdUp>
        <Grid id="thescience" container>
          <Grid item xs={1}></Grid>
          <Grid item container xs={10}>
            <Grid item xs={12}>
              <Box mt={100} mb={10}>
                <Box>
                  <Grid data-aos="zoom-out-up">
                    <Title title="The Science" />
                  </Grid>
                </Box>
                <Box>
                  <Grid data-aos="zoom-out-up">
                    <Subtitle subtitle="Muscle tension is a reflex reaction to stress." />
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
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Hidden>

      {/* BLOQUE 6 Web and mobile solution */}
      <div style={{ mixBlendMode: 'lighten' }}>
        <Grid direction="column">
          <Box my={14}>
            <Grid item xs={12}>
              <WebAndMobileTitle
                textWithoutColor="At"
                textWithColor="Sensie"
                textWithoutColor2="we provide the best tools to help elevate human flourishing"
              />
            </Grid>
            <Grid item xs={12}>
              {showDashboard ? null : (
                <Box>
                  <Hidden smDown>
                    <Grid item xs={6}></Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ position: 'absolute', zIndex: '1000' }}
                    >
                      <Box data-aos="fade-right" ml={6} mt="50%">
                        <VerticalCarousel />
                      </Box>
                    </Grid>
                  </Hidden>
                </Box>
              )}
              <Grid
                container
                xs={12}
                direction="row"
                style={{ justifyContent: 'space-evenly' }}
              >
                <Hidden mdUp>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    <VerticalCarousel />
                    <Title
                      title="Web and Mobile Solution"
                      titleDashboard
                    ></Title>
                    <Box mt={35}>
                      <img
                        src={ComputerIphoneDashboard}
                        style={{ width: '100%' }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Hidden>
                <Hidden smDown>
                  <Box data-aos-delay="3000">
                    <video
                      id="videosensie"
                      width="100%"
                      height="100%"
                      muted
                      src={videoWebAndMobile}
                    >
                      <source src={videoWebAndMobile} type="video/mp4" />
                    </video>
                  </Box>
                </Hidden>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </div>
      {/* BLOQUE 7 Citation */}
      <Hidden smDown>
        <Parallax strength={300}>
          <Background>
            <img
              src={backgroundSelfAwareness}
              alt="self awareness"
              className={classes.bgImg}
            />
          </Background>
          <Grid container direction="column">
            <Box my={34}>
              <Grid item xs={12} data-aos="zoom-out-up">
                <Phrases
                  textWithoutColor="The world's 1st self-awareness assesment"
                  textWithColor="and coach is here for you and your team."
                />
              </Grid>
            </Box>
          </Grid>
        </Parallax>
      </Hidden>
      <Hidden mdUp>
        <Grid container direction="column">
          <Box mb={16}>
            <Grid item xs={12} data-aos="zoom-out-up">
              <Phrases
                textWithoutColor="The world's 1st self-awareness assesment"
                textWithColor="and coach is here for you and your team."
              />
            </Grid>
          </Box>
        </Grid>
      </Hidden>

      {/* BLOQUE 8 Membership */}
      {/* <div id="membership"></div>
      <Grid container direction="column">
        <Box my={8}>
          <Grid item xs={12} data-aos="zoom-out-up">
            <Box mb={5} mt={3}>
              <Grid item xs={12} data-aos="zoom-out-up" alignItems="center">
                <Title title="Membership" titleMembership={true} />
              </Grid>
            </Box>
            <Box px={12}>
              <Grid
                container
                xs={12}
                direction="row"
                style={{ alignItems: 'center' }}
              >
                <Grid item xs={12} md={4}>
                  <Box p={2} data-aos="zoom-out-up" textAlign="-webkit-center">
                    <CustomCard
                      title="BASIC"
                      price="Free"
                      detail1="Coach Dashboard"
                      detail2="Client Dashboard"
                      detail3="Basic affirmations authoring"
                      freeCard={true}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box p={2} data-aos="zoom-out-up" textAlign="-webkit-center">
                    {' '}
                    <CustomCard
                      title="GROUP"
                      price="$10 usd/month"
                      groupCard={true}
                      detail1="Coach Dashboard"
                      detail2="Client Dashboard"
                      detail3="Individual Client Dashboard"
                      detail4="Unlimited affirmations authoring"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box p={2} data-aos="zoom-out-up" textAlign="-webkit-center">
                    {' '}
                    <CustomCard
                      title="ENTERPRISE"
                      price="$20 usd/month"
                      detail1="Coach Dashboard"
                      detail2="Client Dashboard"
                      detail3="Individual Client Dashboard"
                      detail4="Unlimited affirmations authoring"
                      detail5="Personalized Support"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Grid> */}
    </div>
  )
}

export default Home
