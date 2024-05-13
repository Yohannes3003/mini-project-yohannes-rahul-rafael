import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from '../pages/LandingPages';
import Login from '../pages/LoginPages';
import RegisterPage from '../pages/RegisterPages';
import Dashboard from '../pages/Dashboard';
import ChatAi from '../pages/ChatPages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SetUpRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<LandingPages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatbot" element={<ChatAi />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default SetUpRoutes;
