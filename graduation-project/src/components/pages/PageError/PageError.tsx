import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import style from './PageError.module.scss';

const PageError: FC = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/');
    }
    return (
        <div className={style.Page404}>
            <img className={style.fotoPage404} src="https://icdn.lenta.ru/images/2016/02/17/18/20160217183556199/detail_5d86e3d7db3a7317031e97f7b2e82347.jpg" alt="foto"/>
            <div className={style.btn}>
            <Button  onClick={handleOnClick} variant="outlined" size="medium">HOME</Button>
            </div>
        </div>
    );
};

export default PageError;
