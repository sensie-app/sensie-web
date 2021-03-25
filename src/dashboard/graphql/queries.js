export const getSensiesByAffId = (affId, dates, nextToken) => `
  query getSensiesByAffId {
    sensiesByAffirmationAndTimestamp(affirmationId: "${affId}", timestamp: {between: ["${dates[0]}", "${dates[1]}"]}, limit: 100000, nextToken: ${nextToken ? `"${nextToken}"` : null}, sortDirection: ASC, filter: {calibration: {eq: false} }) {
      items {
        id
        result
        createdAt
        timestamp
        userId
        affirmationId
      }
      nextToken
    }
  }
`
export const getSensiesByAffIdAndUser = (affId, dates, userId, nextToken) => `
  query getSensiesByAffId {
    sensiesByAffirmationAndTimestamp(affirmationId: "${affId}", timestamp: {between: ["${dates[0]}", "${dates[1]}"]}, limit: 100000, nextToken: ${nextToken ? `"${nextToken}"` : null}, sortDirection: ASC, filter: {userId: {eq: "${userId}"}, calibration: {eq: false} }) {
      items {
        id
        result
        createdAt
        timestamp
        userId
        affirmationId
      }
      nextToken
    }
  }
`

export const getSensiesByAffId2 = (affId, dates, nextToken) => `
  query getSensiesByAffId {
    getAffirmation(id:"${affId}") {
      id
      name
      description
      sensies(limit: 100000, nextToken: ${nextToken ? `"${nextToken}"` : null}, sortDirection: ASC, filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
        items {
          id
          result
          createdAt
          timestamp
          userId
          affirmationId
        }
        nextToken
      }
    }
  }
`

export const getSensiesByAffIdAndUser2 = (affId, dates, userId, nextToken) => `
  query getSensiesByAffId {
    getAffirmation(id:"${affId}") {
      id
      name
      description
      sensies(limit: 100000, nextToken: ${nextToken ? `"${nextToken}"` : null}, sortDirection: ASC, filter: {calibration: {eq: false}, userId: {eq:"${userId}"}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
        items {
          id
          result
          createdAt
          timestamp
          userId
          affirmationId
        }
        nextToken
      }
    }
  }
`

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
      picture
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
      sensies(limit: 100000, sortDirection: ASC, filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
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
                  icon
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
    getUser(id: "${userId}") {
        sensies(limit: 10000, filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
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
`

export const listUsersWithSensiesByUserIdQuery = (id, dates) => `
  query MyQuery {
    listUsers(filter: {id: {eq: "${id}"}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
      items {
        email
        firstName
        gender
        lastName
        id
        affirmations(limit: 10000, filter: {timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
          items {
            sensies(filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
              items {
                id
                result
                createdAt
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
            sensies(limit: 10000, sortDirection: ASC, filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
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

export const getClientsFromCoach = (id, dates) => `
  query getClientsFromCoach {
    getUser(id: "${id}") {
      clients {
        items {
          id
          firstName
          lastName
          gender 
          picture
          userCoachId
          selfAwareness
          sensies(limit: 10000, sortDirection: DESC, filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
            items {
              id
              result
              createdAt
              timestamp
              affirmationId
            }
            nextToken
          }
        }
      }
    }
  }
`

// listUsers(filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}, userOrganizationId: {eq: "${id}"}}) {
export const listUsersByOrganizationId = (id, dates) => `
  query MyQuery {
    listUsers(limit: 10000, filter: {userOrganizationId: {eq: "${id}"}}) {
      items {
        id
        firstName
        lastName
        gender 
        picture
        sensies(limit: 10000, sortDirection: DESC, filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
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

export const listUsersByOrganizationIdClientSnapshot = (id, dates, dates2) => `
  query MyQuery {
    listUsers(filter: {timestamp: {between: ["${dates[0]}", "${dates[1]}"]}, userOrganizationId: {eq: "${id}"}}) {
      items {
        id
        firstName
        lastName
        gender
        sensies(limit: 10000, sortDirection: DESC, filter: {calibration: {eq: false}, timestamp: {between: ["${dates2[0]}", "${dates2[1]}"]}}) {
          items {
            id
            result
            createdAt
            timestamp
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
        icon
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
          nextToken
        } 
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
        icon
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
      picture
      icon
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

export const getPacksFromUser = id => `
  query getPacksFromUser {
    getUser(id: "${id}") {
      subscribedPacks {
        items {
          pack {
            name
            id
            description
            picture
            author
            affirmations(limit:10000, sortDirection: DESC) {
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
      }
      packs {
        items {
          name
          id
          description
          picture
          author
          affirmations(sortDirection: DESC) {
            items {
              id
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
    }
  }
`

export const listPacksWiyhAffirmationsIdsByIdQuery = id => `
  query MyQuery {
    listPacks(limit: 10000, filter: {packUserId: {eq: "${id}"}}) {
      items {
        name
        id
        description
        author
        picture
        affirmations(limit: 10000, sortDirection: DESC) {
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
  }
`

export const getPackByIdQuery = id => `
  query MyQuery {
    getPack(id: "${id}") {
      description
      id
      name
      author
      affirmations(limit: 10000, sortDirection: ASC) {
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
    listAffirmations(limit: 10000, filter: {topicId: {contains: "${topicId}"}}) {
      items {
        description
        id
        name
        topics {
          items {
            topic {
              name
              picture
              icon
              id
            }
          }
        }
      }
    }
  }
`

export const getAffirmationsFromPacks = (coachId, dates, limit) => `
  query GetAffirmationsFromPacks {
    getUser(id: "${coachId}") {
      packs {
        items {
        affirmations(limit: 1000000) {
          items {
          affirmation {
            description
            id 
            name
            sensies(limit: 1000000, filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
              items {
                id
                result
                userId
                affirmationId
                createdAt
                timestamp
              }
              nextToken
            }
            topics {
              items {
                id
                topic {
                  id
                  name
                  description
                  picture
                  icon
                }
              }
            }
          }
          }
        }
        }
      }
    }
  }
`

export const getAffirmationsFromPacksByUser = (coachId, dates, limit, userId, nextToken) => `
  query GetAffirmationsFromPacks {
    getUser(id: "${coachId}") {
      packs {
        items {
        affirmations(limit: 1000000) {
          items {
          affirmation {
            description
            id 
            name
            sensies(limit: 1000000, filter: {calibration: {eq: false}, userId: {eq: "${userId}"},timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
              items {
                id
                result
                userId
                affirmationId
                createdAt
                timestamp
              }
              nextToken
            }
            topics {
              items {
                id
                topic {
                  id
                  name
                  description
                  picture
                  icon
                }
              }
            }
          }
          }
        }
      }
      }
    }
  }
`

// todo: add topics filter
// listAffirmations(limit: 10000, filter: {timestamp: {between: ["${dates[0]}", "${dates[1]}"]}, userId: {eq: "${userId}"}}) {
export const listAffirmationsByUserIdAndTopicId = (coachId, dates, limit) => `
  query MyQuery {
    listAffirmations(limit: 10000, filter: {userId: {eq: "${coachId}"}}) {
      items {
        description
        id
        name
        sensies(limit: 10000, filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
          items {
            id
            result
            userId
            affirmationId
            createdAt
            timestamp
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
              icon
            }
          }
        }
      }
    }
  }
`

export const listAffirmationsByUserIdAndTopicIdAndUser = (coachId, dates, limit, userId) => `
  query MyQuery {
    listAffirmations(limit: 10000, filter: {userId: {eq: "${coachId}"}}) {
      items {
        description
        id
        name
        sensies(limit: 10000, filter: {calibration: {eq: false}, userId: {eq: "${userId}"}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
          items {
            id
            result
            userId
            affirmationId
            createdAt
            timestamp
          }
          nextToken
        }
        topics {
          items {
            id
            topic {
              id
              name
              description
              picture
              icon
            }
          }
        }
      }
    }
  }
`

export const listAffirmationsByIdUserIdTopicId = (affirmationId, dates) => `
  query MyQuery {
    listAffirmations(limit: 10000, filter: {createdAt: {between: ["${dates[0]}", "${dates[1]}"]}, id: {eq: "${affirmationId}"}}) {
      items {
        user {
          firstName
          lastName
          id
          sensies(limit: 10000, filter: {calibration: {eq: false}, timestamp: {between: ["${dates[0]}", "${dates[1]}"]}}) {
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
    listSensies(limit: 10000, filter: {calibration: {eq: false}, affirmationId: {eq: "A19"}}) {
      items {
        result
      }
    }
  }
`
