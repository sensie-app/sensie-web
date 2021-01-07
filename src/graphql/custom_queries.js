export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      orgType
      location
      tier
      teams {
        nextToken
      }
      users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
