// amplify
import { generateClient } from 'aws-amplify/api'

export const gqlquery = async (query) => {
  const response = { loading: true, value: null }
  try {
    const client = generateClient()
    const value = await client.graphql({ query })
    response.value = value
    response.loading = false
  } catch (error) {
    console.log('error', error)
  }
  return response
}

export const gqlquery2 = async (query, input = null) => {
  const response = { loading: true, value: null }
  try {
    const client = generateClient()
    const value = await client.graphql({ query, variables: input })
    response.value = value
    response.loading = false
  } catch (error) {
    console.log('error', error)
  }
  return response
}
