import { gql } from '@apollo/client';
import RootStore from './root.store';

export default class GraphQLStore {
  rootStore: RootStore;

  findFriend = gql`
    query FindFriend($userName: String!) {
      findFriend(userName: $userName) {
        userName
        email
        phoneNumber
        setting {
          avatar
          statusMessage
        }
      }
    }
  `;

  searchFriend = gql`
    mutation SearchFriend($method: String!, $value: String!, $userName: String!) {
      searchFriend(method: $method, value: $value, userName: $userName) {
        userName
        email
        phoneNumber
        setting {
          avatar
          statusMessage
        }
        friend
      }
    }
  `;

  addFriend = gql`
    mutation addFriend($userName: String!, $friend: String!) {
      addFriend(userName: $userName, friend: $friend)
    }
  `;

  register = gql`
    mutation register($userName: String!, $password: String!, $email: String!, $phoneNumber: String!) {
      register(userName: $userName, password: $password, email: $email, phoneNumber: $phoneNumber)
    }
  `;

  login = gql`
    mutation login($userName: String!, $password: String) {
      login(userName: $userName, password: $password) {
        userName
        email
        accessToken
        phoneNumber
        setting {
          avatar
          statusMessage
          mode
        }
      }
    }
  `;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  get getFindFriend() {
    return this.findFriend;
  }

  get getSearchFriend() {
    return this.searchFriend;
  }

  get getAddFriend() {
    return this.addFriend;
  }

  get getRegister() {
    return this.register;
  }

  get getLogin() {
    return this.login;
  }
}
