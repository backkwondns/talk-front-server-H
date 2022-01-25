import React from 'react';

export type currentLocationInterface = 'friend' | 'talk' | 'setting';
export type userInfoInterface = {
  userName: string;
  email: string;
  phoneNumber: string;
  setting: { avatar: string; statusMessage: string };
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
  };
}

export interface appFooterInterface {
  currentLocation: currentLocationInterface;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
