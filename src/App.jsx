import { useState } from 'react';
import * as Prime from './config/Prime';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './config/Layout.jsx';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Users from './pages/Users.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'blogs', element: <Blogs /> },
      { path: 'users', element: <Users /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
