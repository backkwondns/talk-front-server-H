import { makeAutoObservable } from 'mobx';
import { layoutInterface } from 'src/interfaces';
import RootStore from './root.store';

export default class LayoutStore {
  rootStore: RootStore;

  friendList: layoutInterface.userInfoInterface[] = [];

  newFriend: layoutInterface.userInfoInterface[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getNewFriend() {
    return this.newFriend;
  }

  setNewFriend(friend: layoutInterface.userInfoInterface) {
    this.friendList.push(friend);
  }

  get getFriendList() {
    return this.friendList;
  }

  setFriendList(friends: layoutInterface.userInfoInterface[]) {
    this.friendList = friends;
  }
}
