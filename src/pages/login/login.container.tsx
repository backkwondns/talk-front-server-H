import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { MobXProviderContext } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginInterface } from 'src/interfaces';
import Login from './login';

function LoginContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const isLogin = rootStore.loginStore.getIsLogin;
  const navigator = useNavigate();

  const onRegister = () => {
    navigator('/register');
  };
  const onPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: {
      id: '',
      password: '',
    },
    validationSchema: loginInterface.loginSchema,
    onSubmit: () => {
      console.log('login button!');
    },
  });

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
      <Login onRegister={onRegister} onPressEnter={onPressEnter} formik={formik} />
    </Box>
  );
}

export default LoginContainer;
