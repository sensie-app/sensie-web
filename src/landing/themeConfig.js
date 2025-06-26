import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#15E7BC'
    },
    secondary: {
      main: '#071215'
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#FFFFFF'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#071215',
          color: '#FFFFFF'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#151e1f',
          borderRadius: 12
        },
        input: {
          padding: '18.5px 14px'
        }
      }
    }
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    }
  },
  mixins: {
    toolbar: {
      minHeight: 56, // altura base
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48
      },
      '@media (min-width:600px)': {
        minHeight: 64
      }
    }
  }
})

export default theme
