import { Box } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginInterface } from 'src/interfaces';
import { gql } from '@apollo/client';
import { getAccessToken } from 'src/libs/accessToken';
import Register from './register';

function RegisterContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const isLogin = rootStore.loginStore.getIsLogin;
  const location: any = useLocation();
  const navigator = useNavigate();
  const from = location.state?.from?.pathname || '/test';

  useEffect(() => {
    if (getAccessToken()) navigator(from, { replace: true });
  }, []);
  const onBack = () => {
    navigator('/login');
  };
  const onPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: {
      id: '',
      password: '',
      passwordConfirm: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: loginInterface.registerSchema,
    onSubmit: () => {
      const register = gql`
        mutation register($userName: String!, $password: String!, $email: String!, $phoneNumber: String!) {
          register(userName: $userName, password: $password, email: $email, phoneNumber: $phoneNumber) {
            email
            token
            userName
          }
        }
      `;

      console.log('Register Button!');
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
      <Register onBack={onBack} onPressEnter={onPressEnter} formik={formik} />
    </Box>
  );
}

export default RegisterContainer;
