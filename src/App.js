import React from 'react';
import { Link, useRoutes } from "react-router-dom";

import routerConfig from './router';
import './App.css';

const App = () => {
  const router = useRoutes(routerConfig)
  return (
    <div >
      <div className="headerWarp">
        <h1 className="titleName">單頁應用程式測試</h1>
        <div>
          <Link to="about" className="linkStyle">About</Link>
          <Link to="post" className="linkStyle">Post</Link>
          <Link to="/" className="linkStyle">Index</Link>
        </div>
      </div>
      <hr />
      {router}

    </div>
  );
}

export default App;

