import { FC } from "react";
import { useNavigate } from "react-router-dom";
import style from './Error.module.scss';
import Button from '@mui/material/Button';

const Error: FC = () => {
    const navigate = useNavigate();
    const backHome = () => {
        navigate('/')
    };
    
    return (
        <div className={style.error}>
           <h1 className={style.er}>Error 404</h1>
           <Button onClick={backHome} >HOME</Button> 
        </div>
    );
};
export default Error;