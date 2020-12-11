/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSensie = /* GraphQL */ `
  query GetSensie($id: ID!) {
    getSensie(id: $id) {
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
export const listSensies = /* GraphQL */ `
  query ListSensies(
    $filter: ModelSensieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSensies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          groupId
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
      nextToken
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
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
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        affirmations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAffirmation = /* GraphQL */ `
  query GetAffirmation($id: ID!) {
    getAffirmation(id: $id) {
      id
      topicId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listAffirmations = /* GraphQL */ `
  query ListAffirmations(
    $filter: ModelAffirmationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAffirmations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
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
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
