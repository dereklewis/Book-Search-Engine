import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        bookCount
        savedBooks
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $authors: [String]!
    $description: String!
    $title: String!
    $bookId: String
    $link: String
  ) {
    saveBook(
      authors: $authors
      description: $description
      title: $title
      bookId: $bookId
      link: $link
    ) {
      token
      user {
        _id
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $authors: [String]!
    $description: String!
    $title: String!
    $bookId: String
    $link: String
  ) {
    removeBook(
      authors: $authors
      description: $description
      title: $title
      bookId: $bookId
      link: $link
    ) {
      removeBook {
        _id
        bookId
        authors
        description
        link
      }
    }
  }
`;
