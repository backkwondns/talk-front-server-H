import { makeAutoObservable } from 'mobx';
import { layoutInterface } from 'src/interfaces';
import RootStore from './root.store';

export default class LoginStore {
  rootStore: RootStore;

  isLogin = false;

  userInfo: layoutInterface.userInfoInterface | null = null;

  userName = '';

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

  setUserInfo(userInfo: layoutInterface.userInfoInterface) {
    this.userInfo = userInfo;
  }
}
