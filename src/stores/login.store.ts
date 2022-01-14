import { makeAutoObservable } from 'mobx';
import RootStore from './root.store';

export default class LoginStore {
  rootStore: RootStore;

  isLogin = false;

  userInfo: object = {};

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getIsLogin() {
    return this.isLogin;
  }

  toggleIsLogin() {
    this.isLogin = !this.isLogin;
  }

  get getUserInfo() {
    return this.userInfo;
  }

  setUserInfo(userInfo: object) {
    this.userInfo = userInfo;
  }
}
