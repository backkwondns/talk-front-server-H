import React from 'react';
import { Box } from '@mui/material';
import { ButtonH, InputH, PrintH } from 'src/atoms';
import { loginInterface } from 'src/interfaces';

function Login(props: loginInterface.loginInterface): JSX.Element {
  const { onClick, onPressEnter } = props;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '90vw', sm: '30%' } }}>
      <PrintH text="Clone" variant="h4" textAlign="center" color="#103641" />
      <InputH sx={{ py: 2 }} variant="standard" label="ID" />
      <InputH sx={{ py: 2 }} variant="standard" label="Password" onKeyPress={onPressEnter} />
      <ButtonH
        sx={{ py: 2, bgcolor: '#d5c9c7', color: '#103641' }}
        content="Login"
        variant="contained"
        onClick={onClick}
      />
    </Box>
  );
}

export default Login;
