import React from 'react';
import { Box } from '@mui/material';
import { ButtonH, InputH, PrintH } from 'src/atoms';
import { loginInterface } from 'src/interfaces';

function Login(props: loginInterface.loginInterface): JSX.Element {
  const { onRegister, onPressEnter, formik } = props;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '90vw', sm: '45%' } }}>
      <PrintH text="Clone" variant="h4" textAlign="center" color="#103641" />
      <InputH
        sx={{ my: 2 }}
        label="UserName"
        color="warning"
        fullWidth
        variant="standard"
        id="userName"
        name="userName"
        value={formik.values.userName}
        onChange={formik.handleChange}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
      />
      <InputH
        sx={{ my: 2 }}
        label="Password"
        type="password"
        fullWidth
        variant="standard"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        onKeyPress={onPressEnter}
      />
      <ButtonH
        sx={{ my: 2, bgcolor: '#d5c9c7', color: '#103641' }}
        content="Login"
        variant="contained"
        onClick={formik.handleSubmit}
      />
      <ButtonH content="Register" onClick={onRegister} />
    </Box>
  );
}

export default Login;
