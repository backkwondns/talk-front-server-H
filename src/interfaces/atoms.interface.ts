import {
  AvatarProps,
  ButtonProps,
  InputAdornmentProps,
  ListProps,
  TextFieldProps,
  TypographyProps,
} from '@mui/material';

export interface buttonInterface extends ButtonProps {
  content: string | JSX.Element;
  text?: string;
  isSelected?: boolean;
  direction?: 'vertical' | 'horizontal';
}

export type inputInterface = TextFieldProps;
export type inputAdornmentInterface = InputAdornmentProps;
export interface printInterface extends TypographyProps {
  text: string;
}

export type listInterface = ListProps;

export interface avatarInterface extends AvatarProps {
  content?: string;
}
