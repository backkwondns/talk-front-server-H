import React from 'react';

export type friendAddMethodInterface = 'email' | 'phone' | 'name' | '';
export type currentLocationInterface = 'friend' | 'talk' | 'setting';
export type userInfoInterface = {
  userName: string;
  email: string;
  phoneNumber: string;
  setting: { avatar: string; statusMessage: string };
  friend?: boolean;
};

export interface appHeaderInterface {
  currentLocation: currentLocationInterface;
  userInfo: userInfoInterface;
  openSearch: null | Element;
  search: string;
  onEvent: {
    onAvatar: () => void;
    onSearch: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onReset: () => void;
    onFriendAddBar: () => void;
    onTalkAdd: () => void;
  };
}

export interface appFooterInterface {
  currentLocation: currentLocationInterface;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface friendAddInterface {
  openFriendAddBar: boolean;
  openFriendAdd: friendAddMethodInterface;
  friendSearchResult: userInfoInterface;
  onEvent: {
    onFriendAddBar: () => void;
    onFriendAdd: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFriendSearch: () => void;
    onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onClickFriendAdd: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
}

export interface zIndexInterface {
  zIndex: number;
}
