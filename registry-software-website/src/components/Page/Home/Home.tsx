import { FC } from "react"
import { useNavigate } from "react-router-dom";

const Home:FC = () => {
    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate('*')
    }
    return (
        <div onClick={handleOnclick}>Home</div>
    );
};

export default Home;