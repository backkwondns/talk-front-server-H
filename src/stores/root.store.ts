import TalksStore from 'src/stores/talks.store';
import LoginStore from './login.store';
import LayoutStore from './layout.store';
import FriendStore from './friend.store';
import GraphQLStore from './graphql.store';

export default class RootStore {
  loginStore: LoginStore;

  layoutStore: LayoutStore;

  friendStore: FriendStore;

  talksStore: TalksStore;

  graphStore: GraphQLStore;

  isMobile = false;

  constructor() {
    this.loginStore = new LoginStore(this);
    this.layoutStore = new LayoutStore(this);
    this.friendStore = new FriendStore(this);
    this.graphStore = new GraphQLStore(this);
    this.talksStore = new TalksStore(this);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.isMobile = true;
    }
  }

  get getIsMobile() {
    return this.isMobile;
  }
}
