import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './components/page/Error/Error';
import Home from './components/page/Home/Home';
import NotFound from './components/page/NotFound/NotFound';
import UserInfo from './components/page/UserInfo/UserInfo';


const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:user' element={<UserInfo/>}/>
      <Route path='/notFound' element={<NotFound/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
};

export default App;
