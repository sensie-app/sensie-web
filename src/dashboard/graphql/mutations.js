export const createInvite = id => `
  mutation createInvite {
    createInvite(input: {id: "${id}", userId: "${id}"}) {
      id
    }
  }
`

export const updateUserWithCoach = (id, userCoachId) => `
  mutation updateUserWithCoach {
    updateUser(input: {id: "${id}", userCoachId: "${userCoachId}"}) {
      id
    }
  }
`

export const updateUserData = (id, picture, infoText) => `
  mutation updateUserWithCoach {
    updateUser(input: {id: "${id}", picture: "${picture}", infoText: "${infoText}"}) {
      id
      firstName
      lastName
      email
      picture
      gender
      infoText
    }
  }
`

export const createPackMutation = (name, description, author, packUserId, imgKey) => `
  mutation MyMutation {
    createPack(input: {description: "${description}", name: "${name}", author: "${author}", packUserId: "${packUserId}", picture: "${imgKey}"}) {
      id
    }
  }
`

export const createPackSubscriptionMutation = (userId, packId) => `
  mutation CreatePackSub {
    createPackSubscription(input: {userId: "${userId}", packId: "${packId}"}) {
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

export const joinAffirmationWithPackMutation = (affirmationId, packId) => `
  mutation MyMutation {
    createPackAffirmationJoin(input: {affirmationId: "${affirmationId}", packId: "${packId}"}) {
      id
    }
  }
`

export const joinAffirmationWithTopicMutation = (affirmationId, topicId) => `
  mutation MyMutation {
    createTopicAffirmationJoin(input: {affirmationId: "${affirmationId}", topicId: "${topicId}"}) {
      id
    }
  }
`

export const removeJoinAffirmationPackMutation = id => `
  mutation MyMutation {
    deletePackAffirmationJoin(input: {id: "${id}"}) {
      id
    }
  }
`

export const deleteAffirmationMutation = id => `
  mutation MyMutation {
    deleteAffirmation(input: {id: "${id}"}) {
      id
    }
  }
`

export const updateAffirmationTitle = (affirmationId, title) => `
  mutation updateUserWithCoach {
    updateUser(input: {id: "${affirmationId}", title: "${title}"}) {
      id
    }
  }
`
