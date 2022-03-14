import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
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
