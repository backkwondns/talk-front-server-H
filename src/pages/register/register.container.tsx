import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginInterface } from 'src/interfaces';
import { gql, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { accessTokenFunction } from 'src/libs';
import Register from './register';

function RegisterContainer(): JSX.Element {
  const location: any = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/test';

  const register = gql`
    mutation register($userName: String!, $password: String!, $email: String!, $phoneNumber: String!) {
      register(userName: $userName, password: $password, email: $email, phoneNumber: $phoneNumber)
    }
  `;

  useEffect(() => {
    if (accessTokenFunction.getAccessToken()) navigate(from, { replace: true });
  }, []);
  const onBack = () => {
    navigate('/login');
  };
  const onPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') formik.handleSubmit();
  };

  const [registerMutation] = useMutation(register, {
    onError: (error) => toast.error(error.message),
    onCompleted: () => {
      toast.success('SignUp Success!');
      navigate('/login');
    },
  });
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      passwordConfirm: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: loginInterface.registerSchema,
    onSubmit: (values) => {
      registerMutation({
        variables: {
          userName: values.userName,
          password: values.password,
          email: values.email,
          phoneNumber: values.phoneNumber,
        },
      });
    },
  });

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
