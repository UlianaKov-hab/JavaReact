import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import http from "../../../http_common";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isAuth, user } = useTypedSelector((store)=>store.login);
  const url = http.defaults.baseURL;
  const {ResetUser} = useActions();
  const dispatch = useDispatch();  

  useEffect(() => {
   
  }, []);  

 const logoutHandler = async () => {
    await ResetUser();
 }

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Головна
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/create">
                    Додати користувача
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products/create">
                    Додати продукт
                  </Link>
                </li>
            </ul>            
            {isAuth ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/pofile">
                      {/* <img src={user?.image} alt="фотка" width="32" style={{borderRadius: "50%"}}/> */}
                      <img src={url+"files/32_"+user?.image} style={{borderRadius: "50%"}}/>
                      {user?.email}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout" onClick={logoutHandler}>
                    Вихід
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Вхід
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Реєстрація
                  </Link>
                </li>
              </ul>
             )} 
          </div>
        </div>
      </nav>
    </header>
  );
};

const logout = () => {
  localStorage.removeItem("user");
};

export default Navbar;