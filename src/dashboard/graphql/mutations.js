export const createPackMutation = (name, description, packPictureId, packUserId) => `
  mutation MyMutation {
    createPack(input: {description: "${description}", name: "${name}", packPictureId: "${packPictureId}", packUserId: "${packUserId}"}) {
      id
    }
  }
`

export const createAffirmationMutation = (name, description, userId) => {
  return `
    mutation MyMutation {
      createAffirmation(input: {description: "${description}", name: "${name}", userId: "${userId}"}) {
        id
      }
    }
  `
}

export const joinAffirmationWithPack = (affirmationId, packId) => `
  mutation MyMutation {
    createPackAffirmationJoin(input: {affirmationId: "${affirmationId}", packId: "${packId}"}) {
      id
    }
  }
`

export const joinAffirmationWithTopic = (affirmationId, topicId) => `
  mutation MyMutation {
    createTopicAffirmationJoin(input: {affirmationId: "${affirmationId}", topicId: "${topicId}"}) {
      id
    }
  }
`
