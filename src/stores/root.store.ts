import LoginStore from './login.store';
import LayoutStore from './layout.store';
import FriendStore from './friend.store';
import GraphQLStore from './graphql.store';

export default class RootStore {
  loginStore: LoginStore;

  layoutStore: LayoutStore;

  friendStore: FriendStore;

  graphStore: GraphQLStore;

  constructor() {
    this.loginStore = new LoginStore(this);
    this.layoutStore = new LayoutStore(this);
    this.friendStore = new FriendStore(this);
    this.graphStore = new GraphQLStore(this);
  }
}
