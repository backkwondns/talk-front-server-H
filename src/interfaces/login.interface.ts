import React from 'react';
import * as Yup from 'yup';

export interface loginInterface {
  onRegister: () => void;
  onPressEnter: (event: React.KeyboardEvent) => void;
  formik: any;
}

export interface registerInterface {
  onBack: () => void;
  onPressEnter: (event: React.KeyboardEvent) => void;
  formik: any;
}

export const loginSchema = Yup.object().shape({
  userName: Yup.string().required('REQUIRED ID!'),
  password: Yup.string().min(6, 'TOO SHORT!').required('REQUIRED PASSWORD!'),
});

export const registerSchema = Yup.object().shape({
  userName: Yup.string().required('REQUIRED USERNAME!'),
  password: Yup.string().min(6, 'TOO SHORT!').required('REQUIRE PASSWORD!'),
  passwordConfirm: Yup.string()
    .when('password', {
      is: (val: string) => val && val.length > 0,
      then: Yup.string().oneOf([Yup.ref('password')], 'Different PASSWORD!'),
    })
    .required('REQUIRE PASSWORD!'),
  email: Yup.string().email('ENTER VALID EMAIL!').required('REQUIRE EMAIL!'),
  phoneNumber: Yup.string().min(8, 'TOO SHORT!').required('REQUIRE PHONENUMBER'),
});
