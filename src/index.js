// react
import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import reportWebVitals from './reportWebVitals'
// amplify
import Amplify from 'aws-amplify'
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

Amplify.configure(awsExports)

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
