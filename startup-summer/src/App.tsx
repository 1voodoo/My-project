import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './components/page/Error/Error';
import Home from './components/page/Home/Home';


const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
};

export default App;
