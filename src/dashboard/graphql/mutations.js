export const createPackMutation = (name, description, packPictureId) => `
  mutation MyMutation {
    createPack(input: {description: "${description}", name: "${name}", packPictureId: "${packPictureId}"}) {
      id
    }
  }
`

export const createAffirmationMutation = (name, description, packId, topicId, userId) => {
  return `
    mutation MyMutation {
      createAffirmation(input: {description: "${description}", name: "${name}", packId: "${packId}", topicId: "${topicId}", userId: "${userId}"}) {
        id
      }
    }
  `
}
