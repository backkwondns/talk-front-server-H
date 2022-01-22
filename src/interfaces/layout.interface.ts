import React from "react";

export type currentLocationInterface = 'friend' | 'talk' | 'setting';
export type userInfoInterface = {
  userName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
};

export interface appHeaderInterface {
  currentLocation: currentLocationInterface;
  userInfo: userInfoInterface;
  onAvatar: () => void;
}

export interface appFooterInterface {
  currentLocation: currentLocationInterface;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
