import LoginStore from './login.store';
import LayoutStore from './layout.store';

export default class RootStore {
  loginStore: LoginStore;

  layoutStore: LayoutStore;

  constructor() {
    this.loginStore = new LoginStore(this);
    this.layoutStore = new LayoutStore(this);
  }
}
