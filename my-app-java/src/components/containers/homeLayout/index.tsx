import * as React from 'react';
//import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Outlet } from "react-router-dom";
import Navbar from './navBar';

export const HomeLayout = () => {
    return(
        <>
        
        <Navbar/>
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
        
        
        </>
    )
        
       
}