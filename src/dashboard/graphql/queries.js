
export const getUserByIdQuery = id => `
  query MyQuery {
    getUser(id: "${id}") {
      email
      firstName
      gender
      lastName
      userOrganizationId
      userGroupId
      userTeamId
    }
  }
`

export const getUserWithSensiesByIdQuery = (id, dates) => `
  query MyQuery {
    getUser(id: "${id}") {
      email
      firstName
      gender
      lastName
      userOrganizationId
      userGroupId
      userTeamId
      sensies(sortDirection: ASC, filter: {timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
        items {
          id
          timestamp
          affirmation {
            id
            name
            description
            topics {
              items {
                topic {
                  id
                  name
                  picture
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`

export const getOrganizationByIdQuery = (id, dates) => `
  query MyQuery {
    getOrganization(id: "${id}") {
      users {
        items {
          id
          email
          firstName
          lastName
          sensies(sortDirection: ASC, filter: {timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
            items {
              id
            }
          }
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

export const listUsersByOrganizationId = (id, dates) => `
  query MyQuery {
    listUsers(filter: {userOrganizationId: {eq: "${id}"}}) {
      items {
        id
        email
        firstName
        lastName
        gender
        sensies(sortDirection: ASC, filter: {timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
          items {
            id
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
        name
        picture
        description     
      }
    }
  }
`

export const listTopicsWiyhAffirmationsIdsQuery = () => `
  query MyQuery {
    listTopics {
      items {
        description
        id
        name
        picture
        affirmations {
          items {
            id
          }
        }
      }
    }
  }
`

export const getTopicByIdQuery = id => `
  query MyQuery {
    getTopic(id: "${id}") {
      name
      id
      description
      affirmations {
        items {
          affirmation {
            name
            id
            topics {
              items {
                topic {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

export const listPacksWiyhAffirmationsIdsByIdQuery = id => `
  query MyQuery {
    listPacks(filter: {packUserId: {eq: "${id}"}}) {
      items {
        name
        id
        description
        affirmations {
          items {
            affirmationId
          }
        }
      }
    }
  }
`

export const getPackByIdQuery = id => `
  query MyQuery {
    getPack(id: "${id}") {
      description
      id
      name
      affirmations {
        items {
          affirmation {
            description
            id
            name
            topics {
              items {
                topic {
                  description
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

export const listAffirmationsByTopicIdQuery = (topicId, userId) => `
  query MyQuery {
    listAffirmations(filter: {topicId: {eq: "${topicId}"}, userId: {eq: "${userId}"}}) {
      items {
        description
        id
        name
        topics {
          items {
            topic {
              name
              picture
              id
            }
          }
        }
      }
    }
  }
`
