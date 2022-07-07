import { FC } from "react";
import Authorization from "../Authorization/Authorization";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const User: FC = () => {
     return (
        <>
            <Header/>
            <Authorization/>
            <Footer/>
        </>
     );
};

export default User; 
