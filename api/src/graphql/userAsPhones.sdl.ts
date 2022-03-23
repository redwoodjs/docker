export const schema = gql`
  type UserAsPhone {
    id: String!
    phone: String!
    entry: String
    name: String
    refreshToken: String
    accessKey: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
  }

  type Query {
    userAsPhones: [UserAsPhone!]! @requireAuth
    userAsPhone(id: String!): UserAsPhone @requireAuth
  }

  input CreateUserAsPhoneInput {
    phone: String!
    entry: String
    name: String
    refreshToken: String
    accessKey: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
  }

  input UpdateUserAsPhoneInput {
    phone: String
    entry: String
    name: String
    refreshToken: String
    accessKey: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String
  }

  type Mutation {
    createUserAsPhone(input: CreateUserAsPhoneInput!): UserAsPhone! @requireAuth
    updateUserAsPhone(
      id: String!
      input: UpdateUserAsPhoneInput!
    ): UserAsPhone! @requireAuth
    deleteUserAsPhone(id: String!): UserAsPhone! @requireAuth
  }
`
