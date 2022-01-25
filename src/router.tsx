import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage, Layout, Friend, Talk, Setting } from 'src/pages';
import Test from 'src/pages/test';
import { ToastContainer } from 'react-toastify';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="friend" element={<Friend />} />
          <Route path="talk" element={<Talk />} />
          <Route path="setting" element={<Setting />} />
          <Route path="test" element={<Test />} />
          <Route index element={<Friend />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" style={{ zIndex: 100000 }} />
    </BrowserRouter>
  );
}
export default Router;
