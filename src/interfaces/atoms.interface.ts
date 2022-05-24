import {
  AvatarProps,
  BoxProps,
  ButtonProps,
  IconButtonProps,
  InputAdornmentProps,
  ListProps,
  TextFieldProps,
  TypographyProps,
} from '@mui/material';

export interface buttonInterface extends ButtonProps {
  content: string | JSX.Element | JSX.Element[];
  text?: string;
  isSelected?: boolean;
  direction?: 'vertical' | 'horizontal';
}

export type inputInterface = TextFieldProps;
export type inputAdornmentInterface = InputAdornmentProps;
export interface printInterface extends TypographyProps {
  text: string;
}
export interface iconButtonInterface extends IconButtonProps {
  icon?: JSX.Element;
}
export type listInterface = ListProps;

export interface avatarInterface extends AvatarProps {
  content?: string;
  isLetter?: boolean;
  id?: string;
}

export interface closeButtonInterface extends iconButtonInterface {
  onClose: () => void;
}

export interface speechBubbleInterface extends BoxProps {
  text: string;
  reverse?: boolean;
}
