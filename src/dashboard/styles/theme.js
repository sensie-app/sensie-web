import { createTheme } from '@mui/material/styles'

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
  },
  spacing: 8,
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
