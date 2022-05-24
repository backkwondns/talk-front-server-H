import { SxProps } from '@mui/material';

export interface friendListItemsInterface {
  targetInfo: {
    userName: string;
    setting: {
      avatar: string;
      statusMessage: string;
    };
  };
  divider?: boolean;
  onFriend?: any;
}

export interface multiAvatarInterface {
  sx?: SxProps;
  avatars: string[];
  size?: {
    width: string;
    height: string;
  };
}

export interface roomChatInterface {
  userName?: string;
  avatar?: string;
  content: string;
  before?: string;
  onAvatar?: (event: React.MouseEvent<HTMLImageElement>) => void;
}
