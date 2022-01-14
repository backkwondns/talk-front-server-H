import LoginStore from './login.store';

export default class RootStore {
  loginStore: LoginStore;

  constructor() {
    this.loginStore = new LoginStore(this);
  }
}
