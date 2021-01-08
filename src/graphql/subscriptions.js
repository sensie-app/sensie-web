/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateSensie = /* GraphQL */ `
  subscription OnCreateSensie {
    onCreateSensie {
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
export const onUpdateSensie = /* GraphQL */ `
  subscription OnUpdateSensie {
    onUpdateSensie {
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
export const onDeleteSensie = /* GraphQL */ `
  subscription OnDeleteSensie {
    onDeleteSensie {
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
export const onCreatePack = /* GraphQL */ `
  subscription OnCreatePack {
    onCreatePack {
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
export const onUpdatePack = /* GraphQL */ `
  subscription OnUpdatePack {
    onUpdatePack {
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
export const onDeletePack = /* GraphQL */ `
  subscription OnDeletePack {
    onDeletePack {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
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
export const onCreateAffirmation = /* GraphQL */ `
  subscription OnCreateAffirmation {
    onCreateAffirmation {
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
export const onUpdateAffirmation = /* GraphQL */ `
  subscription OnUpdateAffirmation {
    onUpdateAffirmation {
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
export const onDeleteAffirmation = /* GraphQL */ `
  subscription OnDeleteAffirmation {
    onDeleteAffirmation {
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
export const onCreatePackAffirmationJoin = /* GraphQL */ `
  subscription OnCreatePackAffirmationJoin {
    onCreatePackAffirmationJoin {
      id
      packId
      affirmationId
      pack {
        id
        name
        description
        createdAt
        updatedAt
      }
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
export const onUpdatePackAffirmationJoin = /* GraphQL */ `
  subscription OnUpdatePackAffirmationJoin {
    onUpdatePackAffirmationJoin {
      id
      packId
      affirmationId
      pack {
        id
        name
        description
        createdAt
        updatedAt
      }
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
export const onDeletePackAffirmationJoin = /* GraphQL */ `
  subscription OnDeletePackAffirmationJoin {
    onDeletePackAffirmationJoin {
      id
      packId
      affirmationId
      pack {
        id
        name
        description
        createdAt
        updatedAt
      }
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
export const onCreateTopicAffirmationJoin = /* GraphQL */ `
  subscription OnCreateTopicAffirmationJoin {
    onCreateTopicAffirmationJoin {
      id
      topicId
      affirmationId
      topic {
        id
        name
        description
        createdAt
        updatedAt
      }
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
export const onUpdateTopicAffirmationJoin = /* GraphQL */ `
  subscription OnUpdateTopicAffirmationJoin {
    onUpdateTopicAffirmationJoin {
      id
      topicId
      affirmationId
      topic {
        id
        name
        description
        createdAt
        updatedAt
      }
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
export const onDeleteTopicAffirmationJoin = /* GraphQL */ `
  subscription OnDeleteTopicAffirmationJoin {
    onDeleteTopicAffirmationJoin {
      id
      topicId
      affirmationId
      topic {
        id
        name
        description
        createdAt
        updatedAt
      }
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String!) {
    onCreatePicture(owner: $owner) {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String!) {
    onUpdatePicture(owner: $owner) {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String!) {
    onDeletePicture(owner: $owner) {
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
export const onCreateBlogPost = /* GraphQL */ `
  subscription OnCreateBlogPost {
    onCreateBlogPost {
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
export const onUpdateBlogPost = /* GraphQL */ `
  subscription OnUpdateBlogPost {
    onUpdateBlogPost {
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
export const onDeleteBlogPost = /* GraphQL */ `
  subscription OnDeleteBlogPost {
    onDeleteBlogPost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      postId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      content
      postId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      content
      postId
      createdAt
      updatedAt
    }
  }
`;
