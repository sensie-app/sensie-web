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
  Box
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
    maxWidth: '265px',
    height: '423px'
  },
  lcard: {
    borderRadius: 16,
    textAlign: 'center',
    display: 'block',
    color: 'white',
    backgroundColor: 'transparent',
    maxWidth: '265px',
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

const CustomCard = ({ title, price, largeCard }) => {
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

  if (largeCard) {
    return (
      <Box
        border={3}
        borderColor="primary.main"
        borderRadius={16}
        style={{ maxWidth: '270px' }}
      >
        <Card
          className={classes.lcard}
          backgroundcolor={largeCard && '#071215'}
        >
          <CardHeader title={title} className={classes.header} />
          <Divider variant="middle" />
          <CardContent>
            <Typography variant="h4" align="center">
              {price}
            </Typography>
            <Typography align="center">Lorem ipsum dolor</Typography>
            <Box my={2}>
              <WifiRoundedIcon />
            </Box>
            <Typography align="center">Manage tasks</Typography>
            <Typography align="center">Sync notes</Typography>
            <Typography align="center">Set deadline</Typography>
            <Box my="100px"></Box>
          </CardContent>
          <Divider variant="middle" />
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
  } else {
    return (
      <Box borderRadius={16} style={{ maxWidth: '270px' }}>
        <Card className={classes.scard}>
          <CardHeader title={title} className={classes.header} />
          <Divider variant="middle" />
          <CardContent>
            <Typography variant="h4" align="center">
              {price}
            </Typography>
            <Typography align="center">Lorem ipsum dolor</Typography>
            <Box my={2}>
              <WifiRoundedIcon />
            </Box>
            <Typography align="center">Manage tasks</Typography>
            <Typography align="center">Sync notes</Typography>
            <Typography align="center">Set deadline</Typography>
            <Box my="40px"></Box>
          </CardContent>
          <Divider variant="middle" />
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
        </Card>
      </Box>
    )
  }
}

export default CustomCard
