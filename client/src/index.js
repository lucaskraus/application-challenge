import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import List from './components/List.js';
import User from './components/User.js';
import Repos from './components/Repos.js';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
  {
    path:'/api/users',
    element: <List />
  },
  {
    path:'/api/users/:username/details',
    element: <User />
  },
  {
    path: '/api/users/:username/repos',
    element: <Repos />
  } 
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
