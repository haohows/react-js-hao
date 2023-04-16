import React from 'react';
import { Routes, Route, Link,Outlet,RouteObject,useRoutes } from "react-router-dom";
import Post from './pages/post';
import About from './pages/about';
import NoMatch from './pages/noMatch';
import './App.css';
const routerConfig = [
  {
    path: "/",
    element: <Outlet />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NoMatch />,
  }
]

const App = () => {
  const linkStyle = {
    margin: "5px"
  }
  const element = useRoutes(routerConfig)
  return (
    <div>
      <h1>Welcome to React Router!</h1>
      <Link to="about" style={linkStyle}>About</Link>
      <Link to="post" style={linkStyle}>Post</Link>
      <Link to="/" style={linkStyle}>Index</Link>
      {element}
    </div>
  );
}

export default App;

