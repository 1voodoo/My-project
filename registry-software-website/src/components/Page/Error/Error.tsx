import { FC } from "react"
import { useNavigate } from "react-router-dom";

const Error:FC = () => {
    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate('/')
    }
    return (
        <div onClick={handleOnclick}>Error</div>
    );
};

export default Error;