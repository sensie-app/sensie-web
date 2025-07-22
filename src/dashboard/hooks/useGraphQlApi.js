// react
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// amplify
import { generateClient } from '@aws-amplify/api'

// * custom hook
/**
 * useGraphQlApi hook
 * @param {Object} query
 * @param {string} state
 * @returns {Object} response
 */
const useGraphQlApi = (query, ...state) => {
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sendQuery()
  }, [...state])

  const sendQuery = async () => {
    try {
      setLoading(true)
      const client = generateClient()
      const response = await client.graphql({ query })
      setLoading(false)
      setValue(response.data)
    } catch (err) {
      console.log('err', err)
    }
  }

  return { loading, value }
}

// prop-types
useGraphQlApi.propTypes = {
  /** query */
  query: PropTypes.object.isRequired,
  /** state */
  state: PropTypes.string
}

export default useGraphQlApi
