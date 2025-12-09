export const updateCognitoUserMutation = (username, attributes) => `
  mutation UpdateUser {
    updateCognitoUser(
      input: {
        username: "${username}"
        attributes: [
          ${attributes.map(attr => `{ Name: "${attr.Name}", Value: "${attr.Value}" }`).join('\n')}
        ]
      }
    ) {
      success
      username
      message
    }
  }
`

export const verifyCognitoUserAttributeMutation = (username, attributeName, attributeValue) => {
  // Convert string 'true'/'false' to boolean if needed
  const boolValue = typeof attributeValue === 'string'
    ? attributeValue.toLowerCase() === 'true'
    : attributeValue

  return `
  mutation VerifyUserAttribute {
    verifyCognitoUserAttribute(
      input: {
        username: "${username}"
        attributeName: "${attributeName}"
        attributeValue: ${boolValue}
      }
    ) {
      success
      username
      message
    }
  }
`
}

export const resetCognitoUserPasswordMutation = (username) => `
  mutation ResetPassword {
    resetCognitoUserPassword(input: { username: "${username}" }) {
      success
      username
      message
    }
  }
`

export const createInvite = id => `
  mutation createInvite {
    createInvite(input: {userId: "${id}"}) {
      id
    }
  }
`

export const updateInvite = (id, packsId) => `
  mutation updateInvite {
    updateInvite(input: {id: "${id}", packsId: ${packsId}}) {
      id
    }
  }
`

export const updateUserWithCoach = (id, userCoachId) => `
  mutation updateUserWithCoach {
    updateUser(input: {id: "${id}", userCoachId: ${userCoachId ? `"${userCoachId}"` : null}}) {
      id
    }
  }
`

export const updateUserData = (id, picture, infoText, firstName, lastName, shareData) => `
  mutation updateUserWithCoach {
    updateUser(input: {id: "${id}", picture: "${picture}", infoText: "${infoText}", firstName: "${firstName}", lastName: "${lastName}", shareData: ${shareData} }) {
      id
      firstName
      lastName
      email
      picture
      gender
      infoText
      shareData
    }
  }
`

export const createPackMutation = (name, description, author, packUserId, imgKey) => `
  mutation MyMutation {
    createPack(input: {description: "${description}", name: "${name}", author: "${author}", packUserId: "${packUserId}", picture: "${imgKey}", source: "web"}) {
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

export const deleteTopicAffirmationJoinMutation = id => `
  mutation MyMutation {
    deleteTopicAffirmationJoin(input: {id: "${id}"}) {
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
export const updatePackMutation = (id, name, description, author, imgKey) => `
  mutation MyMutation {
    updatePack(input: {id: "${id}", description: "${description}", name: "${name}", author: "${author}", picture: "${imgKey}"}) {
      id
      name
      author
      picture
    }
  }
`

export const updatePackCommunityMutation = (id, isCommunityPack) => `
  mutation MyMutation {
    updatePack(input: {id: "${id}", isCommunityPack: ${isCommunityPack} }) {
      id
      name
      author
      picture
      isCommunityPack
    }
  }
`

export const deletePackMutation = (id) => `
  mutation MyMutation {
    deletePack(input: {id: "${id}"}) {
      id
    }
  }
`
export const createTopicPrivate = (icon, name, picture) => `
  mutation MyMutation {
    createTopic(input: {icon: "${icon}", name: "${name}", picture: "${picture}", isPrivate: true}) {
      id
    }
  }
`
export const updateUserTopicId = (id, userTopicId) => `
  mutation MyMutation {
    updateUser(input: {id: "${id}", userTopicId: "${userTopicId}"}) {
      id
    }
  }
`
export const deletePackSubscription = (id) => `
  mutation deletePackSubscription {
    deletePackSubscription(input: {id: "${id}"}) {
      id
    }
  }
`
export const deletePackLike = (id) => `
  mutation deletePackLike {
    deletePackLike(input: {id: "${id}"}) {
      id
    }
  }
`
