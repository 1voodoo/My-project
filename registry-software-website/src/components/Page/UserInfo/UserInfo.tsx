import { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UserInfoPage from "../UserInfoPage/UserInfoPage";

const UserInfo : FC = () => {
    return (
        <>
            <Header/>
            <UserInfoPage/>
            <Footer/>
        </>
    );
};

export default UserInfo;
