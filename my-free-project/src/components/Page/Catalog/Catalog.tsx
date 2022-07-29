import { FC } from "react"
import Header from "../Header/Header";
import PageCatalog from "../PageCatalog/PageCatalog";
import UnderHeader from "../UnderHeader/UnderHeader";

const Catalog: FC = () => {
    return (
    <>
        <Header/>
        <UnderHeader/>
        <PageCatalog/>
    </>

    );
};

export default Catalog;
