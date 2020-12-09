/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization($owner: String!, $users: String!) {
    onCreateOrganization(owner: $owner, users: $users) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization($owner: String!, $users: String!) {
    onUpdateOrganization(owner: $owner, users: $users) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization($owner: String!, $users: String!) {
    onDeleteOrganization(owner: $owner, users: $users) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($owner: String!, $users: String!) {
    onCreateGroup(owner: $owner, users: $users) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($owner: String!, $users: String!) {
    onUpdateGroup(owner: $owner, users: $users) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($owner: String!, $users: String!) {
    onDeleteGroup(owner: $owner, users: $users) {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
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
export const onCreateAffirmation = /* GraphQL */ `
  subscription OnCreateAffirmation {
    onCreateAffirmation {
      id
      topicId
      name
      description
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
      name
      description
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
      name
      description
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
