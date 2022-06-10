import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import style from './Error.module.scss';

const  Error:FC = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate('/');
  };

  return (
    <div className={style.pageError}>
        <h1 className={style.title}>Error 404</h1>
        <Button onClick={backHome} variant="contained">Back</Button>
    </div>
  );
};

export default Error;