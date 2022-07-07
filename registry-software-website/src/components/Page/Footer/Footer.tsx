import { FC } from "react";
import style from './Footer.module.scss';
import logo from '../../icons/logo.png';

const Footer: FC = () => {
    return (
        <div className={style.page}>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.first}>
                        <img src={logo} alt="logo" />
                        <p>Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта 2014 г</p>
                        <div className={style.develops}>
                            <p>Разработчик</p>
                            <p>ОАО «Агентство сервисизации и реинжиниринга»</p>
                            <p>Минск, улица Клары Цеткин, 24</p>
                        </div>
                    </div>
                    <div className={style.info}>
                        <p className={style.tittle}>Информация</p>
                        <p>Реестры</p>
                        <p>Новости</p>
                        <p>Документы</p>
                        <p>Вопросы</p>
                    </div>
                    <div className={style.support}>
                        <p className={style.tittle}>Техническая поддержка</p>
                        <p>Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.</p>
                        <p>+375 25 111 22 33</p>
                        <p>+375 29 222 44 55</p>
                        <p>ReestrPOsupport@mail.ru</p>
                    </div>
                    <div className={style.contacs}>
                        <p className={style.tittle}>Контакты</p>
                        <p>+375 33 112 22 45</p>
                        <p>+375 29 222 44 88</p>
                        <p>ReesrtPO@mail.ru</p>
                        <p>220004 г. Минск, ул. Карла Маркса, 38</p>
                        <p>Связаться с поддержкой</p>
                    </div>
                </div>
                <p className={style.finalText}>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</p>  
            </div>
        </div>
    );
};

export default Footer;
