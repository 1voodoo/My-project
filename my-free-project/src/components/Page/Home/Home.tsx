import { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import UnderHeader from "../UnderHeader/UnderHeader";
import './Home.scss';

const Home: FC = () => {
  return (
    <>
      <Header/>
      <UnderHeader/>
      <Main/>
      <Footer/>
    </>
  );
};

export default Home;
