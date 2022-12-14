import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/home';
import { Route, Routes } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUser';
import { HomeLayout } from './components/containers/homeLayout';
import { RegisterPage } from './components/auth/register/register';
import { Login } from './components/auth/login/login';
import { UserProfilePage } from './components/profile/ProfileUser';
import { ProductCreatePage } from './components/products/create';


function App() {
  return (
    <>   
    <Routes >   
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="create" element={<CreateUserPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="logout" element={<HomePage/>}/>
        <Route path="pofile" element={<UserProfilePage/>}/>
        <Route path="products/create" element={<ProductCreatePage/>}/>
      </Route>
      </Routes>
    </>
  );
}

export default App;
// <HomePage/>