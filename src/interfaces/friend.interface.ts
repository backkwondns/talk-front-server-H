import { bool } from 'yup';
import { layoutInterface } from '.';

export interface friendsInterface {
  userInfo: layoutInterface.userInfoInterface;
  friendList: layoutInterface.userInfoInterface[];
  search: string;
  loading: boolean;
}
