import React from 'react';
import { atomsInterface } from 'src/interfaces';
import { Typography } from '@mui/material';

function PrintH(props: atomsInterface.printInterface): JSX.Element {
  const { text } = props;
  return <Typography {...props}>{text}</Typography>;
}

export default PrintH;
