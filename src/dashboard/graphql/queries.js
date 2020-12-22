
// list affirmations
export const listAffirmationsQuery = () => `
  query MyQuery {
    listAffirmations(filter: {topicId: {between: ["T1", "T2"]}}) {
      nextToken
      items {
        name
        id
        description
        topicId
        updatedAt
        createdAt
        user {
          id
        }
      }
    }
  }
`

// list topics
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
