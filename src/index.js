// react
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App'
import reportWebVitals from './reportWebVitals'
// amplify
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'

import amplifyconfig from './amplifyconfiguration.json'
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
import theme from './landing/themeConfig'

Amplify.configure(amplifyconfig)

// record('session', {
//   enable: true,
//   provider: 'AWSPinpoint'
// })

// record('pageView', {
//   enable: true,
//   eventName: 'pageView',
//   type: 'SPA',
//   provider: 'AWSPinpoint',
//   getUrl: () => {
//     return window.location.origin + window.location.pathname
//   }
// })

ReactGA.initialize('G-PRY3HQYSH8')
ReactGA.pageview(window.location.pathname + window.location.search)

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
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
)

// Performance
reportWebVitals()
