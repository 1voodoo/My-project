import { Router } from 'express';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import Error from './components/pages/Error/Error';
import Title from './components/pages/Title/Title';

const  App:FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Title/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
}

export default App;
