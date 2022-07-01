import { FC } from "react";
import style from './Header.module.scss';
import logo from '../../icons/logo.png';
import search from '../../icons/search.png';

const Header:FC = () => {
    return (
        <div className={style.backPage}>
            <div className={style.wrapper}>
                <img className={style.logo} src={logo} alt="logo"  />
                <div className={style.ContainerSearch}>
                    <img className={style.iconSearch} src={search} alt="search" />
                    <input className={style.inputSearch} type="text"  placeholder="Поиск"/>
                </div>
                <h1 className={style.pop}>POP</h1>
            </div>
        </div>
    );
};

export default Header;
