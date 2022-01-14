import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { LoginPage } from 'src/pages';
import RootStore from './stores/root.store';

function App() {
  const rootStore = new RootStore();
  return (
    <BrowserRouter>
      <Provider {...rootStore}>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="test" element={<div>hello!</div>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
