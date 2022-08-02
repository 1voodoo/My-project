import { FC } from "react"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageCatalog from "../PageCatalog/PageCatalog";
import UnderHeader from "../UnderHeader/UnderHeader";

const Catalog: FC = () => {
    return (
    <>
        <Header/>
        <UnderHeader/>
        <PageCatalog/>
        <Footer/>
    </>

    );
};

export default Catalog;
