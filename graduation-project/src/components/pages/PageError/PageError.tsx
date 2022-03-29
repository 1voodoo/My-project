import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const PageError: FC = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/');
    }
    return (
        <div>
            NOT FOUND
            <Button onClick={handleOnClick}>HOME</Button>
        </div>
    );
};

export default PageError;