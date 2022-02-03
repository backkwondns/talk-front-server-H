import { layoutInterface } from '.';

export interface friendsInterface {
  newFriend: layoutInterface.userInfoInterface[];
  userInfo: layoutInterface.userInfoInterface;
  friendList: layoutInterface.userInfoInterface[];
  search: string;
  loading: boolean;
  onFriend: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface profileInterface {
  userInfo: layoutInterface.userInfoInterface;
  selectedFriend: layoutInterface.userInfoInterface;
  onEvent: {
    onProfileClose: () => void;
    onTalk: () => void;
    onCall: () => void;
    onProfile: () => void;
  };
}
