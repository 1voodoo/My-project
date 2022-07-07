import { FC } from "react";
import style from './UserInfoPage.module.scss';
import user from '../../icons/Man.png';
import bell from '../../icons/belGrey.png';
import bag from '../../icons/bag.png';
import Metadany from '../../icons/Metadany.png';
import close from '../../icons/close.png';
import douwnLoadGrey from '../../icons/douwnLoadGrey.png';
import exit from '../../icons/Exit.png';
import userFoto from '../../icons/Юзер.png';
import vector from '../../icons/VectorDown.png';
import iea from '../../icons/iea.png';
import { useNavigate } from "react-router-dom";

const UserInfoPage : FC = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/user')
    }


    return (
        <div className={style.page}>
            <div className={style.wrapper}>
                <h2>Личный кабинет</h2>
                <div className={style.container}>
                    <div className={style.containerOne}>
                        <div className={style.containerInfoPush}>
                            <img className={style.firsTittleIcon} src={user} alt="icon" />
                            <p className={style.firsTittle}>Мои данные</p>
                        </div>
                        <div className={style.containerInfo}>
                            <img  className={style.secondTittleIcon} src={bell} alt="icon" />
                            <p className={style.secondTittle}>Уведомления</p>
                        </div >
                        <div className={style.containerInfo}>
                            <img className={style.threeTittleIcon} src={bag} alt="icon" />
                            <p className={style.threeTittle}>Реестры</p>
                        </div>
                        <div className={style.containerInfo}>
                            <img className={style.fourTittleIcon} src={Metadany} alt="icon" />
                            <p>Метаданные</p>
                        </div>
                        <div className={style.containerInfo}>
                            <img className={style.fiveTittleIcon} src={close} alt="icon" />
                            <p>Безопасность</p>
                        </div>
                        <div className={style.containerInfo}>
                            <img className={style.sixTittleIcon} src={douwnLoadGrey} alt="icon" />
                            <p>Мои загрузки</p>
                        </div>
                        <div onClick={handleOnClick} className={style.containerInfo}>
                            <img className={style.sevenTittleIcon} src={exit} alt="icon" />
                            <p className={style.sevenTittle}>Выход</p>
                        </div>
                    </div>
                    <div className={style.containerTwo}>
                        <div className={style.containerUser}>
                            <img src={userFoto} alt="foto" />
                            <p>Здравствуй, Захар!</p>
                        </div>
                        <p className={style.line}></p>
                        <div>
                            <p className={style.tittleInputHeader}>Основные данные</p>
                            <div className={style.containeAllInputs}>
                                <div className={style.containerInputsOne}>
                                    <div className={style.inputContainer}>
                                        <span>Имя</span>
                                        <input type="text" placeholder="Захар" />
                                    </div>
                                    <div className={style.inputContainer}>
                                        <span>Отчество</span>
                                        <input type="text" placeholder="Геннадьевич"/>
                                    </div>
                                    <div className={style.inputContainer}>
                                        <span>Город</span>
                                        <input type="text" placeholder="Минск"/>
                                        <img src={vector} alt="icon" />
                                    </div>
                                </div>
                                <div className={style.containerInputsTwo}>
                                    <div className={style.inputContainer}>
                                        <span>Фамилия</span>
                                        <input placeholder="Палазник" type="text" />
                                    </div>
                                    <div className={style.inputContainer}>
                                        <span>Страна</span>
                                        <input placeholder="Беларусь" type="text" />
                                        <img src={vector} alt="icon" />
                                    </div>
                                    <div className={style.inputContainer}>
                                        <span>Мобильный телефон</span>
                                        <input placeholder="+375 22 111 33 44" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className={style.lineTwo}></p>
                    <div className={style.containerInputsFinall}>
                    <p className={style.tittleInputHeader}>Пароль</p>
                    <div className={style.containeInputsFinall}>
                        <div className={style.inputContainerOne}>
                            <span>Новый пароль</span>
                            <input type="text" placeholder="**********" />
                            <img src={iea} alt="icon" />
                        </div>
                        <div className={style.inputContainerTwo}>
                            <span>Подтверждение пароля</span>
                            <input type="text" placeholder="**********"/>
                            <img src={iea} alt="icon" />
                        </div>
                    </div>
                    </div>
                    <p className={style.lineTwo}></p>
                    <button className={style.btn}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfoPage;