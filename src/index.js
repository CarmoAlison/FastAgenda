import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Login';
import Medico from './Medico';
import Esporte from './Esporte';
import Auth from './components/Auth';
import Alimentacao from './Alimentacao';
import Admin from './Admin';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "Home",
    element: <App />
  },
  {
    path: "Setor_medico",
    element: <Medico />
  },
  {
    path: "Setor_esporte", 
    element: <Esporte />, 
  },
  {
    path: "Auth",
    element: <Auth />
  },
  {
    path: "Setor_alimenticio",
    element: <Alimentacao />
  },
  {
    path:"Admin",
    element: <Admin />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
