import { FC } from "react"
import { useNavigate } from "react-router-dom";
import Ask from "../Ask/Ask";
import Document from "../Document/Document";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MainContent from "../MainContent/MainContent";
import News from "../News/News";

const Home:FC = () => {
    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate('*')
    }
    return (
        <>
            <Header/>
            <Main/>
            <MainContent/>
            <News/>
            <Document/>
            <Ask/>
        <div onClick={handleOnclick}>Home</div>
        </>
    );
};

export default Home;