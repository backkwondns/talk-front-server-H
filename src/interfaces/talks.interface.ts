export type talk = {
  from: string;
  content: string;
  id: string;
  timestamp: string;
};

export interface detailInterface {
  id: string;
  talk: talk[];
  talkCount: number;
  userName: string[];
  avatar: string[];
}

export interface talksListInterface {
  id: string;
  userName: string[];
  lastContent: string;
  updatedAt: string;
  avatar: string[];
}

export interface talksInterface {
  talksList: talksListInterface[];
  search: string;
  onEvent: {
    onTalk: any;
  };
}

export interface roomInterface {
  zIndex: number;
  selectedRoom: {
    userName: string[];
    avatar: string[];
    talk: talk[];
    talkCount: number;
  };
  typingText: string;
  refs: {
    inputRef: any;
    lastTalkRef: any;
  };
  onEvent: {
    onClose: () => void;
    onAvatar: (event: React.MouseEvent<HTMLImageElement>) => void;
    onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onSend: () => void;

    // onLoadMore: (page: number) => void;
  };
}

export type typingTextInterface = {
  id: string;
  text: string;
};
