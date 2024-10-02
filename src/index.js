import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import BaseLayout from "./BaseLayout"
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import {MyContext, UserProvider} from "./Context/MyContext"
import Profile from './Pages/Profile';
import Dasboard from './Pages/Dasboard';
import Appointment from './Pages/Appointment';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<BaseLayout />} >
        <Route path='' element={<Home />} />
        <Route path='dashboard' element={<Dasboard />} />
        <Route path='appointment' element={<Appointment />} />
        <Route path='chat/:id' element={<Chat/>} />
        <Route path='login' element={<Login/>} />
        <Route path='profile' element={<Profile/>} />
      </Route>
    </Route>
  )
)
root.render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
