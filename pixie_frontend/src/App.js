/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Login } from './components';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let userInfo = localStorage.getItem('user') !== 'undefined';

    if (userInfo) {
      userInfo = JSON.parse(localStorage.getItem('user'));
    } else {
      userInfo = localStorage.clear();
    }

    if (!userInfo) navigate('/login');
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
