const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: INT
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: GraphQLString
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    
    me: User
  }

  type Mutation {

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(authors: [String], description: String, title: String, bookId: String, image: GraphQLString, link: String): User
    
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;