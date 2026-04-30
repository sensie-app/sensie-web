// MUST be first — side-effect import that configures Amplify before any
// other module's code can run. Action files call generateClient() inside
// their thunks; those thunks fire from useEffect at mount time. If we
// configure Amplify after `import App`, those thunks see an unconfigured
// Amplify API client and throw "Amplify has not been configured."
import './setup-amplify'

// react
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App'
import reportWebVitals from './reportWebVitals'
// amplify
import { Authenticator } from '@aws-amplify/ui-react'
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

// mixpanel
import mixpanel from 'mixpanel-browser'

// Amplify is already configured by ./setup-amplify (side-effect import at top).

// Initialize Mixpanel — guarded so a missing/invalid token doesn't crash boot.
// If REACT_APP_MIXPANEL_TOKEN is unset, init silently no-ops AND a subsequent
// track() call throws on undefined config. We skip both when the token is empty.
const mixpanelToken = process.env.REACT_APP_MIXPANEL_TOKEN
if (mixpanelToken) {
  try {
    mixpanel.init(mixpanelToken, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: true,
      persistence: 'localStorage'
    })
    mixpanel.track('App Loaded')
  } catch (err) {
    console.warn('[mixpanel] init/track failed — analytics disabled for this session:', err)
  }
} else {
  console.warn('[mixpanel] REACT_APP_MIXPANEL_TOKEN not set — analytics disabled')
}

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
