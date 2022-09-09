import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components';
import { Route, Routes } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUser';
import { HomeLayout } from './components/containers/homeLayout';

function App() {
  return (
    <>   
    <Routes >   
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="create" element={<CreateUserPage/>}/>
      </Route>
      </Routes>
    </>
  );
}

export default App;
// <HomePage/>