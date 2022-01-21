import React from 'react';
import { ButtonH, InputH } from 'src/atoms';
import { Box } from '@mui/material';
import { loginInterface } from 'src/interfaces';

function Register(props: loginInterface.registerInterface): JSX.Element {
  const { onBack, onPressEnter, formik } = props;
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '330px' } }}
      onKeyPress={onPressEnter}
    >
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
        error={formik.touched.userName&& Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
      />
      <InputH
        sx={{ my: 2 }}
        label="Password"
        color="error"
        type="password"
        fullWidth
        variant="standard"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <InputH
        sx={{ my: 2 }}
        label="Confirm Password"
        color="error"
        type="password"
        fullWidth
        variant="standard"
        id="passwordConfirm"
        name="passwordConfirm"
        value={formik.values.passwordConfirm}
        onChange={formik.handleChange}
        error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
        helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
      />
      <InputH
        sx={{ my: 2 }}
        label="Email"
        color="secondary"
        fullWidth
        variant="standard"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <InputH
        sx={{ my: 2 }}
        label="PhoneNumber"
        color="secondary"
        fullWidth
        variant="standard"
        id="phoneNumber"
        name="phoneNumber"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />
      <Box sx={{ display: 'flex' }}>
        <ButtonH sx={{ mr: 1, flex: 1 }} content="Back" variant="outlined" color="error" onClick={onBack} />
        <ButtonH
          sx={{ ml: 1, flex: 1 }}
          content="Register"
          variant="outlined"
          color="secondary"
          onClick={formik.handleSubmit}
        />
      </Box>
    </Box>
  );
}

export default Register;
