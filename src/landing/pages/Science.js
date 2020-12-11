import React from 'react'
import { Grid, Box } from '@material-ui/core'
import Title from '../components/Title/Title'
import { Parallax, Background } from 'react-parallax'
import Epigraph from '../components/Epigraph'
import Subtitle from '../components/Subtitle'
import backgroundScienceMan1 from '../assets/img/backgroundScienceMan1.png'
import backgroundScienceMan2 from '../assets/img/backgroundScienceMan2.png'

const Science = () => {
  return (
    <div style={{ backgroundColor: '#071215' }}>
      {/* BLOQUE 1 */}
      <Parallax strength={400}>
      <Background className="backgroundImg">
            <img src={backgroundScienceMan1} alt="fill murray" />
        </Background>
      <Grid id="thescience" container>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10}>
          <Grid item xs={12} sm={7}>
          <Box mt={8} mb={26}>
          <Box>
          <Grid>

            <Title title="The Science" />
          </Grid>
          </Box>
          <Box>
          <Grid >
            <Subtitle subtitle='Muscle tension is a relax reaction to stress.' />

          </Grid>
          </Box>
          <Box mt={25}>
          <Grid >
            <Subtitle subtitle='Tendons' />

          </Grid>
          </Box>
          <Box mt={2} mr={12}>
          <Grid >
            <Epigraph epigraph='The body containing nerve tissue make them excellent sensory receptors to sense muscle tension.'/>

          </Grid>
          </Box>

          </Box>
          </Grid>
          <Grid xs={12} sm={5}>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      </Parallax>

      {/* BLOQUE 2 */}

      <Parallax strength={400}>
      <Background className="backgroundImg">
            <img src={backgroundScienceMan2} alt="fill murray" />
        </Background>
      <Grid id="thescience" container>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10}>
          <Grid xs={12} sm={5}>
          </Grid>
          <Grid item xs={12} sm={7}>
          <Box mt={48} mb={36} ml={8}>
          <Box mt={16}>
          <Grid data-aos="zoom-out-up">
            <Subtitle subtitle='Cerebellum' />

          </Grid>
          </Box>
          <Box mt={2}>
          <Grid data-aos="zoom-out-up">
            <Epigraph epigraph='The brain is the linking part that receives those signals from the body to regulate and coordinate movement.'/>

          </Grid>
          </Box>
          </Box>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      </Parallax>
      </div>
  )
}

export default Science
