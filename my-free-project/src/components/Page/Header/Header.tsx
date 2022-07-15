import { FC } from "react";
import './Header.scss';
import fire from '../../../iconHeader/icons8-огонь-48.png';
import search from '../../../iconHeader/icons8-search-64.png';
import bird from '../../../iconHeader/птичка.png';
import card from '../../../iconHeader/картa.png';

const Header: FC = () => {
  return (
    <div className="page">
      <div className="wrapper">
        <ul>
          <div className="container-yellow">
            <li className="li-foto good-price">
              <img src={fire} alt="icon" />
              Каталог
              <div className="red-text">
                <p>Все суперцены</p>
              </div>
            </li>
            <li className="li-foto-little">
              Новости
              <img src={bird} alt="icon" />
            </li>
            <li className="li-foto-little">
              Автобарахолка
              <img src={bird} alt="icon" />
            </li>
            <li className="li-foto-little">
              Дома и квартиры
              <img src={bird} alt="icon" />
            </li>
            <li className="li-foto find-master">
              <img src={search} alt="icon" />
              Услуги
              <div className="blue-text">
                <p>Найдите мастера</p>
              </div>
            </li>
            <li>Барахолка</li>
            <li>Форум</li>
          </div>
          <li className="li-foto-card">
            <img src={card} alt="icon" />
            Onliner Клевер</li>
          <li className="currency">курс валюта</li>
          <li>погода</li>
        </ul>
      </div>
     
    </div>
  );
};

export default Header;
