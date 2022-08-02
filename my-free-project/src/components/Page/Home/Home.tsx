import { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UnderHeader from "../UnderHeader/UnderHeader";
import './Home.scss';

const Home: FC = () => {
  return (
    <>
      <Header/>
      <UnderHeader/>
      
      <Footer/>
    </>
  );
};

export default Home;
