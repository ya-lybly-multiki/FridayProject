import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from "./components/Layout /Layout";
import Test from "./components/Test/Test";
import Login from "./components/Login/Login";
import NewPassword from "./components/NewPassword/NewPassword";
import RecoveryPassword from "./components/RecoveryPassword/RecoveryPassword";
import Profile from "./components/Profile/Profile";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import Page404 from "./components/Page404/Page404";


function App() {
  return (
      <div>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route index element={<Test/>}/>
                  <Route path={'login'} element={<Login/>}/>
                  <Route path={'new-password'} element={<NewPassword/>}/>
                  <Route path={'recovery-password'} element={<RecoveryPassword/>}/>
                  <Route path={'profile'} element={<Profile/>}/>
                  <Route path={'user-registration'} element={<UserRegistration/>}/>
                  <Route path={'*'} element={<Page404/>}/>
              </Route>
          </Routes>

      </div>
  );
}

export default App;
