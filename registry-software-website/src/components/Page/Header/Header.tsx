import { FC } from "react";
import style from './Header.module.scss';
import logo from '../../icons/logo.png';
import search from '../../icons/search.png';
import notebook from '../../icons/блокнот.png';
import bell from '../../icons/bell.png';
import user from '../../icons/Юзер.png';
import VectorDown from '../../icons/VectorDown.png';


const Header:FC = () => {
    return (
        <div className={style.backPage}>
            <div className={style.wrapper}>
                <div className={style.containerOne}>
                    <img className={style.logo} src={logo} alt="logo"  />
                    <div className={style.ContainerSearch}>
                        <img className={style.iconSearch} src={search} alt="search" />
                        <input className={style.inputSearch} type="text"  placeholder="Поиск"/>
                    </div>
                </div>
                <div className={style.containerOne}>    
                    <div className={style.notebookIcon}>
                        <img src={notebook} alt="logo" />
                    </div>
                    <div className={style.bellIcon}>
                        <i>4</i>
                        <img src={bell} alt="logo" />
                    </div>
                    <div className={style.userContainer}>
                        <img className={style.userIcon} src={user} alt="foto" />
                        <p>Захар Палазник</p>
                        <img src={VectorDown} alt="foto" />
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Header;
