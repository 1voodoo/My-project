import { FC } from "react";
import Header from "../Header/Header";
import UnderHeader from "../UnderHeader/UnderHeader";
import './Home.scss';

const Home: FC = () => {
  return (
    <>
      <Header/>
      <UnderHeader/>
    </>
  );
};

export default Home;
