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

  getAllTalk = gql`
    query getAllTalk($userName: String) {
      getAllTalk(userName: $userName) {
        id
        userName
        lastContent
        updatedAt
        avatar
      }
    }
  `;

  detailTalk = gql`
    mutation detailTalk($talkID: String, $from: Int, $to: Int) {
      detailTalk(talkID: $talkID, from: $from, to: $to) {
        id
        talk {
          from
          content
          id: _id
          timeStamp
        }
        talkCount
      }
    }
  `;

  sendTalk = gql`
    mutation sendTalk($talkID: String, $userName: [String], $talk: talkInput!) {
      sendTalk(talkID: $talkID, userName: $userName, talk: $talk)
    }
  `;

  findFriendTalk = gql`
    query findFriendTalk($userName: [String]) {
      findFriendTalk(userName: $userName) {
        id
        userName
        talk {
          from
          content
          id: _id
          timeStamp
        }
        talkCount
      }
    }
  `;

  newTalk = gql`
    subscription newTalk($talkID: [String]) {
      newTalk(talkID: $talkID) {
        id
        userName
        talk {
          id: _id
          from
          content
          timeStamp
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

  get getAllTalks() {
    return this.getAllTalk;
  }

  get getDetailTalk() {
    return this.detailTalk;
  }

  get getSendTalk() {
    return this.sendTalk;
  }

  get getFindFriendTalk() {
    return this.findFriendTalk;
  }

  get getNewTalk() {
    return this.newTalk;
  }
}
