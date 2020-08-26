/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      firstName
      lasName
      email
      image
      createdAt
      updatedAt
    }
  }
`;
export const getUserByUserName = /* GraphQL */ `
  query GetUserByUserName($username: String!) {
    getUserByUserName(username: $username) {
      id
      userName
      firstName
      lasName
      email
      image
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
        userName
        firstName
        lasName
        email
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
