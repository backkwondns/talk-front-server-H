import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage, Layout } from 'src/pages';
import Test from 'src/pages/test';
import { ToastContainer } from 'react-toastify';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="test" element={<Test />} />
          <Route index element={<Test />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}
export default Router;
