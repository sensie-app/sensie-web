// react
import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import reportWebVitals from './reportWebVitals'
// amplify
import { Analytics, Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'

import awsExports from './aws-exports'
// styles
import './styles/global.scss'
import './styles/dateRangePickerStyle/index.scss' // global styles for React-dateRangePicker
// translation
import { I18nextProvider } from 'react-i18next'
import i18next from './translations'
// redux
import { Provider } from 'react-redux'
import store from './redux/store'
import ReactGA from 'react-ga'

// mui
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './landing/themeConfig' // ⬅️ Importas el theme

Amplify.configure(awsExports)

Analytics.autoTrack('session', {
  enable: true,
  provider: 'AWSPinpoint'
})

Analytics.autoTrack('pageView', {
  enable: true,
  eventName: 'pageView',
  type: 'SPA',
  provider: 'AWSPinpoint',
  getUrl: () => {
    return window.location.origin + window.location.pathname
  }
})

ReactGA.initialize('G-PRY3HQYSH8')
ReactGA.pageview(window.location.pathname + window.location.search)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <Authenticator.Provider>
            <App />
          </Authenticator.Provider>
        </Provider>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app')
)

// Performance
reportWebVitals()
