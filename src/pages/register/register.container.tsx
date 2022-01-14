import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginInterface } from 'src/interfaces';
import Register from './register';

function RegisterContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const isLogin = rootStore.loginStore.getIsLogin;
  const navigator = useNavigate();

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
