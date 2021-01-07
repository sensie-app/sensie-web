// amplify
import { API, graphqlOperation } from 'aws-amplify'

export const gqlquery = async (query, input = null) => {
  const response = { loading: true, value: null }
  try {
    const value = await API.graphql(graphqlOperation(query, input))
    response.value = value
    response.loading = false
  } catch (error) {
    console.log('error', error)
  }
  return response
}

export const gqlmutation = async (query, input) => {
  const response = { loading: true, value: null }
  console.log('input', input)
  try {
    const value = await API.graphql(graphqlOperation(query, { input: input }))
    console.log('value', value)
    response.value = value
    response.loading = false
  } catch (error) {
    console.log('error', error)
  }
  return response
}
