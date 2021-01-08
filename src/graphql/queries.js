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
      userOrganizationId
      organization {
        id
        name
        orgType
        location
        tier
        createdAt
        updatedAt
      }
      affirmations {
        nextToken
      }
      selfAwareness
      userGroupId
      group {
        id
        name
        description
        createdAt
        updatedAt
      }
      userTeamId
      team {
        id
        name
        description
        organizationId
        createdAt
        updatedAt
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
        userOrganizationId
        selfAwareness
        userGroupId
        userTeamId
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
      teams {
        nextToken
      }
      users {
        nextToken
      }
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      description
      organizationId
      organization {
        id
        name
        orgType
        location
        tier
        createdAt
        updatedAt
      }
      users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        organizationId
        createdAt
        updatedAt
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
        nextToken
      }
      createdAt
      updatedAt
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
        createdAt
        updatedAt
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
        userOrganizationId
        selfAwareness
        userGroupId
        userTeamId
        createdAt
        updatedAt
      }
      owner
      timestamp
      accelerometerData
      accelerometerResult
      gyroscopeData
      gyroscopeResult
      swipeData
      swipeResult
      voiceData
      voiceResult
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
        packId
        name
        description
        userId
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
        owner
        timestamp
        accelerometerData
        accelerometerResult
        gyroscopeData
        gyroscopeResult
        swipeData
        swipeResult
        voiceData
        voiceResult
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
  }
`;
export const getPack = /* GraphQL */ `
  query GetPack($id: ID!) {
    getPack(id: $id) {
      id
      name
      description
      affirmations {
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
  }
`;
export const listPacks = /* GraphQL */ `
  query ListPacks(
    $filter: ModelPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
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
      topics {
        nextToken
      }
      packId
      packs {
        nextToken
      }
      name
      description
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
        userOrganizationId
        selfAwareness
        userGroupId
        userTeamId
        createdAt
        updatedAt
      }
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
        packId
        name
        description
        userId
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlogPost = /* GraphQL */ `
  query GetBlogPost($id: ID!) {
    getBlogPost(id: $id) {
      id
      title
      content
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogPosts = /* GraphQL */ `
  query ListBlogPosts(
    $filter: ModelBlogPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      postId
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        postId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
