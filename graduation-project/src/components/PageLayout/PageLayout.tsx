import { AppBar, Button, Container } from "@mui/material";
import style from './PageLayout.module.scss'
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const PageLayout: FC = ({ children }) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/')
    }
    return (
        <div className={style.main}>
            <AppBar position="static" className={style.appBar}>
                <Container className={style.Container}>
                    <Button onClick={handleOnClick} className={style.btnHome} color="inherit">HOME</Button>
                </Container>
            </AppBar>
            {children}
        </div>
    );
};

export default PageLayout;
