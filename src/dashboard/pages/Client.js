// react
import React from 'react'
// containers
import Header from '../containers/Header'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { testAction } from '../../redux/actions/test.actions'

import LineChart from '../components/LineChart'

const Client = () => {
  // hooks
  const dispatch = useDispatch()
  const { testReducer } = useSelector(state => state)

  // handle functions
  const handleClickTestRedux = () => dispatch(testAction(!testReducer.value))

  return (
    <div>
      <Header withBack withPeople={false} />
      <h1>Client</h1>
      <LineChart />
      <button onClick={() => handleClickTestRedux()}>TestRedux - {testReducer.value.toString()}</button>
    </div>
  )
}

export default Client
