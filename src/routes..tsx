import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage, RequireAuth } from 'src/pages';
import Test from 'src/pages/test';
import { ToastContainer } from 'react-toastify';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/" element={<RequireAuth />}>
          <Route path="test" element={<Test />} />
          <Route index element={<Test />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default Router;
