/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
        nextToken
      }
      createdAt
      updatedAt
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
        nextToken
      }
      createdAt
      updatedAt
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
        nextToken
      }
      createdAt
      updatedAt
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
export const createPack = /* GraphQL */ `
  mutation CreatePack(
    $input: CreatePackInput!
    $condition: ModelPackConditionInput
  ) {
    createPack(input: $input, condition: $condition) {
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
export const updatePack = /* GraphQL */ `
  mutation UpdatePack(
    $input: UpdatePackInput!
    $condition: ModelPackConditionInput
  ) {
    updatePack(input: $input, condition: $condition) {
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
export const deletePack = /* GraphQL */ `
  mutation DeletePack(
    $input: DeletePackInput!
    $condition: ModelPackConditionInput
  ) {
    deletePack(input: $input, condition: $condition) {
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
export const createAffirmation = /* GraphQL */ `
  mutation CreateAffirmation(
    $input: CreateAffirmationInput!
    $condition: ModelAffirmationConditionInput
  ) {
    createAffirmation(input: $input, condition: $condition) {
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
export const updateAffirmation = /* GraphQL */ `
  mutation UpdateAffirmation(
    $input: UpdateAffirmationInput!
    $condition: ModelAffirmationConditionInput
  ) {
    updateAffirmation(input: $input, condition: $condition) {
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
export const deleteAffirmation = /* GraphQL */ `
  mutation DeleteAffirmation(
    $input: DeleteAffirmationInput!
    $condition: ModelAffirmationConditionInput
  ) {
    deleteAffirmation(input: $input, condition: $condition) {
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
export const createPackAffirmationJoin = /* GraphQL */ `
  mutation CreatePackAffirmationJoin(
    $input: CreatePackAffirmationJoinInput!
    $condition: ModelPackAffirmationJoinConditionInput
  ) {
    createPackAffirmationJoin(input: $input, condition: $condition) {
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
export const updatePackAffirmationJoin = /* GraphQL */ `
  mutation UpdatePackAffirmationJoin(
    $input: UpdatePackAffirmationJoinInput!
    $condition: ModelPackAffirmationJoinConditionInput
  ) {
    updatePackAffirmationJoin(input: $input, condition: $condition) {
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
export const deletePackAffirmationJoin = /* GraphQL */ `
  mutation DeletePackAffirmationJoin(
    $input: DeletePackAffirmationJoinInput!
    $condition: ModelPackAffirmationJoinConditionInput
  ) {
    deletePackAffirmationJoin(input: $input, condition: $condition) {
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
export const createTopicAffirmationJoin = /* GraphQL */ `
  mutation CreateTopicAffirmationJoin(
    $input: CreateTopicAffirmationJoinInput!
    $condition: ModelTopicAffirmationJoinConditionInput
  ) {
    createTopicAffirmationJoin(input: $input, condition: $condition) {
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
export const updateTopicAffirmationJoin = /* GraphQL */ `
  mutation UpdateTopicAffirmationJoin(
    $input: UpdateTopicAffirmationJoinInput!
    $condition: ModelTopicAffirmationJoinConditionInput
  ) {
    updateTopicAffirmationJoin(input: $input, condition: $condition) {
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
export const deleteTopicAffirmationJoin = /* GraphQL */ `
  mutation DeleteTopicAffirmationJoin(
    $input: DeleteTopicAffirmationJoinInput!
    $condition: ModelTopicAffirmationJoinConditionInput
  ) {
    deleteTopicAffirmationJoin(input: $input, condition: $condition) {
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
export const createBlogPost = /* GraphQL */ `
  mutation CreateBlogPost(
    $input: CreateBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    createBlogPost(input: $input, condition: $condition) {
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
export const updateBlogPost = /* GraphQL */ `
  mutation UpdateBlogPost(
    $input: UpdateBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    updateBlogPost(input: $input, condition: $condition) {
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
export const deleteBlogPost = /* GraphQL */ `
  mutation DeleteBlogPost(
    $input: DeleteBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    deleteBlogPost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      postId
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      postId
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      postId
      createdAt
      updatedAt
    }
  }
`;
