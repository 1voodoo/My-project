import { FC } from "react";
import style from './Main.module.scss';
import search from '../../icons/search.png';
import Office from '../../icons/3d Office Work 1.png';

const Main:FC = () => {
    return (
        <div className={style.pageMain}>
            <div className={style.wrapper}>
                <div className={style.pageText}>
                    <h1>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
                    <p className={style.firstP}>Единый реестр программ для электронных вычислительных машин и баз данных</p>
                    <p>Включено ПО в реестр: <span>13 438</span></p>
                    <p>Правообладателей: <span>4 272</span></p>
                    <div className={style.ContainerSearch}>
                        <img className={style.iconSearch} src={search} alt="search" />
                        <input className={style.inputSearch} type="text"  placeholder="Искать реестр..."/>
                        <button>Искать</button>
                    </div>
                </div>
                <div className={style.bigFoto}>
                    <img src={Office} alt="foto" />
                </div>
                
            </div>
        </div>
    );
};
export default Main;
