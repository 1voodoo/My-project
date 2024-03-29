import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/Page/Catalog/Catalog';
import Error from './components/Page/Error/Error';
import Home from './components/Page/Home/Home';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/catalog' element={<Catalog/>} />
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
};

export default App;
