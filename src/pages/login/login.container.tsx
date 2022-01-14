import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { MobXProviderContext } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import Login from './login';

function LoginContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const isLogin = rootStore.loginStore.getIsLogin;
  const navigator = useNavigate();
  const onClick = () => {
    console.log('login Button!');
  };
  const onPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') onClick();
  };

  if (isLogin) navigator('/test');
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Login onClick={onClick} onPressEnter={onPressEnter} />
    </Box>
  );
}

export default LoginContainer;
