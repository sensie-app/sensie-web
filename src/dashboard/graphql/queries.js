
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

export const listUsersQuery = () => `
  query MyQuery {
    listUsers {
      items {
        sensies {
          items {
            createdAt
            id
            result
          }
        }
        lastName
        picture
        firstName
        email
        id
      }
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

export const listUsersWithSensiesByUserId = (userId, dates) => `
  query MyQuery {
    listUsers(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}, id: {eq: "${userId}"}}) {
      items {
        sensies(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}}) {
          items {
            id
            result
            createdAt
          }
        }
        firstName
        gender
        lastName
        id
        picture
      }
    }
  }
`

export const listUsersWithSensiesByUserIdQuery = (id, dates) => `
  query MyQuery {
    listUsers(filter: {id: {eq: "${id}"}, createdAt: {between: ["${dates[0]}", "${dates[1]}"]}}) {
      items {
        email
        firstName
        gender
        lastName
        id
        affirmations(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}}) {
          items {
            sensies(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}}) {
              items {
                id
                result
              }
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
    listUsers(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}, userOrganizationId: {eq: "${id}"}}) {
      items {
        id
        firstName
        lastName
        gender
        sensies(sortDirection: ASC, filter: {timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
          items {
            id
            result
          }
        }
      }
    }
  }
`

export const listUsersByOrganizationIdClientSnapshot = (id, dates, dates2) => `
  query MyQuery {
    listUsers(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}, userOrganizationId: {eq: "${id}"}}) {
      items {
        id
        firstName
        lastName
        gender
        sensies(sortDirection: ASC, filter: {createdAt: {between: ["${dates2[0]}", "${dates2[1]}"]}}) {
          items {
            id
            result
            createdAt
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
      affirmations(sortDirection: ASC) {
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

export const listAffirmationsByTopicIdQuery = (topicId) => `
  query MyQuery {
    listAffirmations(filter: {topicId: {contains: "${topicId}"}}) {
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

// todo: add topics filter
export const listAffirmationsByUserIdAndTopicId = (userId, dates, limit) => `
  query MyQuery {
    listAffirmations(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}, userId: {eq: "${userId}"}}, limit: ${limit}) {
      items {
        description
        id
        name
        sensies(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}}) {
          items {
            id
            result
          }
        }
        topics {
          items {
            id
            topic {
              id
              name
              description
              picture
            }
          }
        }
      }
    }
  }
`

export const listAffirmationsByIdUserIdTopicId = (affirmationId, dates) => `
  query MyQuery {
    listAffirmations(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}, id: {eq: "${affirmationId}"}}) {
      items {
        user {
          firstName
          lastName
          id
          sensies(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}}) {
            items {
              id
              result
            }
          }
        }
      }
    }
  }
`

export const listSensiesByAffirmationId = id => `
  query MyQuery {
    listSensies(filter: {affirmationId: {eq: "A19"}}) {
      items {
        result
      }
    }
  }
`
