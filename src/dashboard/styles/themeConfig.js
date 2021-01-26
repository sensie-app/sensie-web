import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 900,
      lg: 1500,
      xl: 1920
    }
  }
})

export default theme
