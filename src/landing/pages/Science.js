import React from 'react'
import { Grid, Box, Typography, makeStyles, Hidden } from '@material-ui/core'
import Title from '../components/Title/Title'
import { Parallax, Background } from 'react-parallax'
import Epigraph from '../components/Epigraph'
import Subtitle from '../components/Subtitle'
import backgroundScienceMan1 from '../assets/img/backgroundScienceMan1.png'
import backgroundScienceMan2 from '../assets/img/backgroundScienceMan2.png'
import Lead from '../components/Lead'
import { HashLink as Link } from 'react-router-hash-link'
import LANDING_ROUTES from '../constants/routes'

const { scienceanchor } = LANDING_ROUTES

const useStyles = makeStyles({
  bgImg: {
    width: '100vw'
  }
})

const Science = () => {
  const classes = useStyles()
  return (
    <div id="scc" style={{ backgroundColor: '#071215' }}>
      {/* BLOQUE 1 */}
      <Hidden smDown>
        <Parallax strength={400}>
          <Background className="backgroundImg">
            <img className={classes.bgImg} src={backgroundScienceMan1} />
          </Background>
          <Grid id="thescience" container>
            <Grid item xs={1}></Grid>
            <Grid item container xs={10}>
              <Grid item xs={12} sm={7} data-aos="zoom-out-up">
                <Box mt={'12rem'} mb={50}>
                  <Box>
                    <Grid>
                      <Link to={scienceanchor}>
                        <Typography>&lt; Back</Typography>
                      </Link>
                    </Grid>
                  </Box>
                  <Box>
                    <Grid>
                      <Title title="The Science" />
                    </Grid>
                  </Box>
                  <Box>
                    <Grid>
                      <Subtitle subtitle="Muscle tension is a reflex reaction to stress." />
                    </Grid>
                  </Box>
                  <Box mt={5}>
                    <Grid>
                      <Lead lead="Tendons" />
                    </Grid>
                  </Box>
                  <Box mt={2} mr={18}>
                    <Grid>
                      <Epigraph epigraph="Muscle fiber and tendons act as sensory receptors to help you gauge how much tension is in the body." />
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
            <Grid item xs={12} data-aos="zoom-out-up">
              <Box mt={18}>
                <Box>
                  <Grid>
                    <Link to={scienceanchor}>
                      <Typography>&lt; Back</Typography>
                    </Link>
                  </Grid>
                </Box>
                <Box>
                  <Grid>
                    <Title title="The Science" />
                  </Grid>
                </Box>
                <Box>
                  <Grid>
                    <Subtitle subtitle="Muscle tension is a reflex reaction to stress." />
                  </Grid>
                </Box>
                <Box mt={5}>
                  <Grid>
                    <Lead lead="Tendons" />
                  </Grid>
                </Box>
                <Box mt={2}>
                  <Grid>
                    <Epigraph epigraph="Muscle fiber and tendons act as sensory receptors to help you gauge how much tension is in the body." />
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Hidden>

      {/* BLOQUE 2 */}

      <Hidden smDown>
        <Parallax strength={400}>
          <Background className="backgroundImg">
            <img className={classes.bgImg} src={backgroundScienceMan2} />
          </Background>
          <Grid id="thescience" container>
            <Grid item xs={1}></Grid>
            <Grid item container xs={10}>
              <Grid xs={12} sm={5}></Grid>
              <Grid item xs={12} sm={7}>
                <Box mt={40} mb={45} ml={8}>
                  <Box mt={16}>
                    <Grid data-aos="zoom-out-up">
                      <Lead lead="Cerebellum" />
                    </Grid>
                  </Box>
                  <Box mt={2}>
                    <Grid data-aos="zoom-out-up">
                      <Epigraph epigraph="The brain is the linking part that receives signals from the body to regulate and coordinate movement, emotion and how we show up in the world." />
                    </Grid>
                  </Box>
                </Box>
              </Grid>
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
              <Box mb={8}>
                <Box mt={8}>
                  <Grid data-aos="zoom-out-up">
                    <Lead lead="Cerebellum" />
                  </Grid>
                </Box>
                <Box mt={2}>
                  <Grid data-aos="zoom-out-up">
                    <Epigraph epigraph="The brain is the linking part that receives signals from the body to regulate and coordinate movement, emotion and how we show up in the world." />
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Hidden>
    </div>
  )
}

export default Science
