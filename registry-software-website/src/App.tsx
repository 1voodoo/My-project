import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Page/Error/Error';
import Home from './components/Page/Home/Home';
import User from './components/Page/User/User';
import UserInfo from './components/Page/UserInfo/UserInfo';

const App:FC = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/info' element={<UserInfo/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
  );
};

export default App;
