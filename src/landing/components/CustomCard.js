import React, { useEffect } from 'react'
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Button,
  Box,
  Grid
} from '@material-ui/core'
import axios from 'axios'
import AOS from 'aos'
import StripeCheckout from 'react-stripe-checkout'
import WifiRoundedIcon from '@material-ui/icons/WifiRounded'

const useStyles = makeStyles((theme) => ({
  scard: {
    borderRadius: 16,
    textAlign: 'center',
    display: 'block',
    color: 'white',
    backgroundColor: '#0D1D21',
    height: '440px'
  },
  lcard: {
    borderRadius: 16,
    textAlign: 'center',
    display: 'block',
    color: 'white',
    backgroundColor: 'transparent',
    height: '481px'
  },
  header: {
    textAlign: 'center',
    spacing: 10
  },
  action: {
    display: 'inherit',
    justifyContent: 'space-around'
  },
  btnSuscribe: {
    borderRadius: 10,
    fontSize: '13px',
    fontWeight: 'bold'
  },
  btnLearnMore: {
    borderRadius: 10,
    fontSize: '13px',
    fontWeight: 'bold',
    marginTop: '6px',
    marginLeft: '0px !important',
    color: 'white'
  },
  button: {
    margin: theme.spacing(1)
  }
}))

const CustomCard = ({
  title,
  price,
  groupCard,
  freeCard,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5
}) => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const classes = useStyles()
  const [product] = React.useState({
    name: 'Tesla Roadster',
    price: 200,
    description: 'Cool car'
  })
  async function handleToken (token, addresses) {
    // console.log(token, addresses);
    const response = await axios.post(
      'https://rokf3.sse.codesandbox.io/checkout',
      {
        token,
        product
      }
    )
    console.log('response', response)
    const { status } = response.data
    if (status === 'success') {
      // aca hay que llamar una api del backend de sensie para que cree la instancia del nuevo cliente
      // mostrar un popup confirmando la subscripcion e informando que va a recibir un mail en los proximos minutos
      // enviar mail de confirmacion al cliente

      console.log('success')
    } else {
      console.log('error')
    }
  }

  if (groupCard) {
    return (
      <Box
        border={3}
        borderColor="primary.main"
        borderRadius={16}
        style={{ width: '270px' }}
      >
        <Card
          className={classes.lcard}
          backgroundcolor={groupCard && '#071215'}
        >
          <CardHeader title={title} className={classes.header} />
          <Divider variant="middle" />
          <CardContent>
            <Typography variant="h4" align="center">
              {price}
            </Typography>
            <Typography align="center">Lorem ipsum dolor</Typography>
            <Box my={1.5}>
              <WifiRoundedIcon />
            </Box>
            <Typography align="center">{detail1}</Typography>
            <Typography align="center">{detail2}</Typography>
            <Typography align="center">{detail3}</Typography>
            <Typography align="center">{detail4}</Typography>
          </CardContent>
          <Divider variant="middle" />
          <Box mt={7}></Box>
          <CardActions className={classes.action}>
            <StripeCheckout
              stripeKey="pk_test_51HorsiEx1EF8da2rRutkb30fv24rp8dzBRK31Rc85N3AjcFfu5CQMTHRnAlLeyJVDId4l8IFfuNngQmBt5qNQqkl00ADoUwRo2"
              token={handleToken}
              name="SENSIE"
              amount={product.price * 100}
              billingAddress
              shippingAddress
            >
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.btnSuscribe}
              >
                Suscribe
              </Button>
            </StripeCheckout>
            <Button fullWidth className={classes.btnLearnMore}>
              Learn more
            </Button>
          </CardActions>
        </Card>
      </Box>
    )
  } else if (freeCard) {
    return (
      <Box borderRadius={16} style={{ width: '270px' }}>
        <Card className={classes.scard}>
          <Grid container alignItems="flex-end">
            <Grid item xs={12}>
              <CardHeader title={title} className={classes.header} />
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12}>
              <CardContent>
                <Typography variant="h4" align="center">
                  {price}
                </Typography>
                <Typography align="center">Lorem ipsum dolor</Typography>
                <Box my={1.5}>
                  <WifiRoundedIcon />
                </Box>
                <Typography align="center">{detail1}</Typography>
                <Typography align="center">{detail2}</Typography>
                <Typography align="center">{detail3}</Typography>
              </CardContent>
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12}>
              <Box mt={7}></Box>
              <CardActions className={classes.action}>
                <StripeCheckout
                  stripeKey="pk_test_51HorsiEx1EF8da2rRutkb30fv24rp8dzBRK31Rc85N3AjcFfu5CQMTHRnAlLeyJVDId4l8IFfuNngQmBt5qNQqkl00ADoUwRo2"
                  token={handleToken}
                  name="SENSIE"
                  amount={product.price * 100}
                  billingAddress
                  shippingAddress
                >
                  <Button
                    fullWidth
                    color="primary"
                    variant="outlined"
                    className={classes.btnSuscribe}
                  >
                    Suscribe
                  </Button>
                </StripeCheckout>
                <Button fullWidth className={classes.btnLearnMore}>
                  Learn more
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Box>
    )
  } else {
    return (
      <Box borderRadius={16} style={{ width: '270px' }}>
        <Card className={classes.scard}>
          <Grid container alignItems="flex-end">
            <Grid item xs={12}>
              <CardHeader title={title} className={classes.header} />
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12}>
              <CardContent>
                <Typography variant="h4" align="center">
                  {price}
                </Typography>
                <Typography align="center">Lorem ipsum dolor</Typography>
                <Box my={1.5}>
                  <WifiRoundedIcon />
                </Box>
                <Typography align="center">{detail1}</Typography>
                <Typography align="center">{detail2}</Typography>
                <Typography align="center">{detail3}</Typography>
                <Typography align="center">{detail4}</Typography>
                <Typography align="center">{detail5}</Typography>
              </CardContent>
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12}>
              <Box mt={1}></Box>
              <CardActions className={classes.action}>
                <StripeCheckout
                  stripeKey="pk_test_51HorsiEx1EF8da2rRutkb30fv24rp8dzBRK31Rc85N3AjcFfu5CQMTHRnAlLeyJVDId4l8IFfuNngQmBt5qNQqkl00ADoUwRo2"
                  token={handleToken}
                  name="SENSIE"
                  amount={product.price * 100}
                  billingAddress
                  shippingAddress
                >
                  <Button
                    fullWidth
                    color="primary"
                    variant="outlined"
                    className={classes.btnSuscribe}
                  >
                    Suscribe
                  </Button>
                </StripeCheckout>
                <Button fullWidth className={classes.btnLearnMore}>
                  Learn more
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Box>
    )
  }
}

export default CustomCard
