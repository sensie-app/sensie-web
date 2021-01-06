
export const getUsersQueryById = (id) => `
  query MyQuery {
    getUser(id: "${id}") {
      email
      firstName
      gender
      lastName
      picture {
        name
      }
      userOrganizationId
      userGroupId
      userTeamId
    }
  }
`

export const getOrganizationById = (id, dates) => `
  query MyQuery {
    getOrganization(id: "${id}") {
      users {
        items {
          sensies(sortDirection: ASC, filter: {timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
            items {
              id
            }
          }
          id
        }
      }
    }
  }
`

export const getUsersAllQuery = (id = '8e5a85d1-3f68-4fca-8db9-9f0e18e91082', dates = ['2020-04-10T08:04:00.334Z', '2020-04-10T08:04:00.334Z']) => `
  query MyQuery {
    getUser(id: "${id}") {
      organization {
        users(filter: {id: {ne: "${id}"}, dob: {between: ["${dates[0]}", "${dates[1]}"]}}, sortDirection: ASC) {
          items {
            id
            sensies(sortDirection: ASC, filter: {timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
              items {
                id
              }
            }
          }
        }
      }
    }
  }
`

export const listTopicsQuery = () => `
  query MyQuery {
    listTopics {
      items {
        id
        description
        name
      }
    }
  }
`
