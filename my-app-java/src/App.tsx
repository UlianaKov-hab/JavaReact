import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/home';
import { Route, Routes } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUser';
import { HomeLayout } from './components/containers/homeLayout';
import { RegisterPage } from './components/auth/register/register';
import { LoginPage } from './components/auth/login/login';

function App() {
  return (
    <>   
    <Routes >   
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="create" element={<CreateUserPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Route>
      </Routes>
    </>
  );
}

export default App;
// <HomePage/>