// amplify
import { API, graphqlOperation } from 'aws-amplify'

export const gqlquery = async query => {
  const response = { loading: true, value: null }
  try {
    const value = await API.graphql(graphqlOperation(query))
    response.value = value
    response.loading = false
  } catch (error) {
    console.log('error', error)
  }
  return response
}
