import React, { useContext } from "react";
import { Routes, Route, Navigate, Redirect } from "react-router";
import { privateRoutes, publicRoutes } from "../router/index";
import Loader from "./UI/Loader/Loader";
import { AuthContext } from "../context";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  //   console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }

//   if (isAuth && (url !== "/post"||req.url !== "/about") ){
//         return res.redirect("/post");
//   }

  
  return isAuth ? (
    <>
      <Routes>
        <Route element={<About />} path="/about" />
        <Route element={<Posts />} path="/posts" />
        <Route element={<PostIdPage />} path="/posts/:id" />
        <Route path="/*" element={<Navigate replace to="/posts" />} />
      </Routes>
    </>
  ) : (
    <>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route path="/*" element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
