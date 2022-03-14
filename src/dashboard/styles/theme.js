import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'test'],
    values: {
      xs: 0,
      sm: 800,
      md: 900,
      lg: 1200,
      xl: 1920,
      test: 1200
    }
  }
})

export default theme
