import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {AuthContext} from "../../../context";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate()

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    router(`/`);
  };

  return (
    <div className="navbar">
      <Button onClick={logout}>Выйти</Button>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
