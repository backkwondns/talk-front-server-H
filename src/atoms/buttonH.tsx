import React from 'react';
import { Button } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function ButtonH(props: atomsInterface.buttonInterface): JSX.Element {
  const { content, text, isSelected, ...rest } = props;
  const backgroundColor = '#e1ddda';
  const contentColor = '#806853';
  if (text) {
    return (
      <Button
        sx={{
          color: isSelected ? contentColor : '#989291',
          backgroundColor: isSelected ? backgroundColor : '#ffffff',
          flexDirection: 'column',
        }}
        {...rest}
      >
        {content} {isSelected ? <u>{text}</u> : text}
      </Button>
    );
  }
  return <Button {...props}>{content}</Button>;
}

export default ButtonH;
