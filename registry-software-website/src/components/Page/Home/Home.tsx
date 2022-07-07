import { FC } from "react"
import Ask from "../Ask/Ask";
import Document from "../Document/Document";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MainContent from "../MainContent/MainContent";
import News from "../News/News";

const Home: FC = () => {
    return (
        <>
            <Header/>
            <Main/>
            <MainContent/>
            <News/>
            <Document/>
            <Ask/>
            <Footer/>
            
        </>
    );
};

export default Home;