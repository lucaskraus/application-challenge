import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import List from './components/List.js';
import User from './components/User.js';
import Repos from './components/Repos.js';
import './index.css';
import { Routes, Route } from 'react-router-dom';

const routing = (
  <Routes>
    <Route path="/" element={<App />} >
      <Route path="api/users" element={<List />} />
      <Route path="api/users/:username/details" element={<User />} />
      <Route path="api/users/:username/repos" element={<Repos />} />
    </Route>
  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);
