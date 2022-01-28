import { layoutInterface } from '.';

export interface friendsInterface {
  newFriend: layoutInterface.userInfoInterface[];
  userInfo: layoutInterface.userInfoInterface;
  friendList: layoutInterface.userInfoInterface[];
  search: string;
  loading: boolean;
}
