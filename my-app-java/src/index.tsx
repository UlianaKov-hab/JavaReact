import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store';
import { Provider } from "react-redux";
import { setAuthUserByToken } from "./components/auth/login/actions";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const token = localStorage.token;
if(token){
  setAuthUserByToken(token, store.dispatch);
}

root.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  
    
  
);


reportWebVitals();
