import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: [String]!, $description: String!, $title: String!, $bookId: ID!, $image: String!, $link: String!) {
    saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
      _id
      username
    }
  }
`;