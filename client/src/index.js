import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import List from './components/List.js';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
  {
    path:'/api/users',
    element: <List />
  }
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
