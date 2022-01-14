import React from 'react';
import { TextField } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function InputH(props: atomsInterface.inputInterface): JSX.Element {
  return <TextField {...props} />;
}

export default InputH;
