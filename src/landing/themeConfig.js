import CreateMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = CreateMuiTheme({
  palette: {
    primary: {
      main: '#15E7BC'
    },
    secondary: {
      main: '#071215'
    }
  },
  overrides: {
    MuiInputBase: {
      input: {
        color: '#FFFFFF'
      }
    }
  }
})

export default theme
