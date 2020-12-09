/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processSensie = /* GraphQL */ `
  mutation ProcessSensie($input: CreateSensieInput!) {
    processSensie(input: $input) {
      id
      userId
      user {
        id
        owner
        firstName
        lastName
        email
        dob
        gender
        domHand
        goal
        orgId
        organization {
          id
          name
          orgType
          location
          tier
          createdAt
          updatedAt
          owner
        }
        groupId
        group {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        sensies {
          nextToken
        }
        picture {
          id
          name
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      owner
      timestamp
      data
      dataType
      confidence
      calibration
      result
      userAgreement
      affirmationId
      affirmation {
        id
        topicId
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      owner
      firstName
      lastName
      email
      dob
      gender
      domHand
      goal
      orgId
      organization {
        id
        name
        orgType
        location
        tier
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      groupId
      group {
        id
        name
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      sensies {
        items {
          id
          userId
          owner
          timestamp
          data
          dataType
          confidence
          calibration
          result
          userAgreement
          affirmationId
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      owner
      firstName
      lastName
      email
      dob
      gender
      domHand
      goal
      orgId
      organization {
        id
        name
        orgType
        location
        tier
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      groupId
      group {
        id
        name
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      sensies {
        items {
          id
          userId
          owner
          timestamp
          data
          dataType
          confidence
          calibration
          result
          userAgreement
          affirmationId
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      owner
      firstName
      lastName
      email
      dob
      gender
      domHand
      goal
      orgId
      organization {
        id
        name
        orgType
        location
        tier
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      groupId
      group {
        id
        name
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      sensies {
        items {
          id
          userId
          owner
          timestamp
          data
          dataType
          confidence
          calibration
          result
          userAgreement
          affirmationId
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      name
      orgType
      location
      tier
      users {
        items {
          id
          owner
          firstName
          lastName
          email
          dob
          gender
          domHand
          goal
          orgId
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      name
      orgType
      location
      tier
      users {
        items {
          id
          owner
          firstName
          lastName
          email
          dob
          gender
          domHand
          goal
          orgId
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      name
      orgType
      location
      tier
      users {
        items {
          id
          owner
          firstName
          lastName
          email
          dob
          gender
          domHand
          goal
          orgId
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      description
      users {
        items {
          id
          owner
          firstName
          lastName
          email
          dob
          gender
          domHand
          goal
          orgId
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      description
      users {
        items {
          id
          owner
          firstName
          lastName
          email
          dob
          gender
          domHand
          goal
          orgId
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      description
      users {
        items {
          id
          owner
          firstName
          lastName
          email
          dob
          gender
          domHand
          goal
          orgId
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSensie = /* GraphQL */ `
  mutation CreateSensie(
    $input: CreateSensieInput!
    $condition: ModelSensieConditionInput
  ) {
    createSensie(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        owner
        firstName
        lastName
        email
        dob
        gender
        domHand
        goal
        orgId
        organization {
          id
          name
          orgType
          location
          tier
          createdAt
          updatedAt
          owner
        }
        groupId
        group {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        sensies {
          nextToken
        }
        picture {
          id
          name
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      owner
      timestamp
      data
      dataType
      confidence
      calibration
      result
      userAgreement
      affirmationId
      affirmation {
        id
        topicId
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSensie = /* GraphQL */ `
  mutation UpdateSensie(
    $input: UpdateSensieInput!
    $condition: ModelSensieConditionInput
  ) {
    updateSensie(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        owner
        firstName
        lastName
        email
        dob
        gender
        domHand
        goal
        orgId
        organization {
          id
          name
          orgType
          location
          tier
          createdAt
          updatedAt
          owner
        }
        groupId
        group {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        sensies {
          nextToken
        }
        picture {
          id
          name
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      owner
      timestamp
      data
      dataType
      confidence
      calibration
      result
      userAgreement
      affirmationId
      affirmation {
        id
        topicId
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSensie = /* GraphQL */ `
  mutation DeleteSensie(
    $input: DeleteSensieInput!
    $condition: ModelSensieConditionInput
  ) {
    deleteSensie(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        owner
        firstName
        lastName
        email
        dob
        gender
        domHand
        goal
        orgId
        organization {
          id
          name
          orgType
          location
          tier
          createdAt
          updatedAt
          owner
        }
        groupId
        group {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        sensies {
          nextToken
        }
        picture {
          id
          name
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      owner
      timestamp
      data
      dataType
      confidence
      calibration
      result
      userAgreement
      affirmationId
      affirmation {
        id
        topicId
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
      id
      name
      description
      affirmations {
        items {
          id
          topicId
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
      id
      name
      description
      affirmations {
        items {
          id
          topicId
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
      id
      name
      description
      affirmations {
        items {
          id
          topicId
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAffirmation = /* GraphQL */ `
  mutation CreateAffirmation(
    $input: CreateAffirmationInput!
    $condition: ModelAffirmationConditionInput
  ) {
    createAffirmation(input: $input, condition: $condition) {
      id
      topicId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateAffirmation = /* GraphQL */ `
  mutation UpdateAffirmation(
    $input: UpdateAffirmationInput!
    $condition: ModelAffirmationConditionInput
  ) {
    updateAffirmation(input: $input, condition: $condition) {
      id
      topicId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteAffirmation = /* GraphQL */ `
  mutation DeleteAffirmation(
    $input: DeleteAffirmationInput!
    $condition: ModelAffirmationConditionInput
  ) {
    deleteAffirmation(input: $input, condition: $condition) {
      id
      topicId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
