import { FC, useEffect, useState } from "react";
import './Header.scss';
import fire from '../../../iconHeader/icons8-огонь-48.png';
import search from '../../../iconHeader/icons8-search-64.png';
import bird from '../../../iconHeader/icons8-next.png';
import card from '../../../iconHeader/картa.png';
import cloud from '../../../iconForPageCatalog/icons8-частичная-облачность-100.png';
import { useNavigate } from "react-router-dom";
import ApiWeather, { IWeather } from "../ApiWeather/ApiWeather";
import ApiBYN, { IBYN } from "../ApiBYN/ApiBYN";


const Header: FC = () => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [byn, setByn] = useState<IBYN | null>(null);
  
  console.log(byn?.USDBYN.high);
  
  const getApiWeather = async() => {
    const respons = await ApiWeather();
    setWeather(respons);
  };

  const getApiCyrrensy = async() => {
    const respons = await ApiBYN();
    setByn(respons);
  };

  const handleOnClick = () => {
    if (window.location.href !== 'http://localhost:3000/catalog') {
      navigate('catalog')
    }
  };

  useEffect(() => {
    getApiWeather();
    getApiCyrrensy();
  }, []);

  return (
    <div className="page">
      <div className="wrapper">
        <ul>
          <div className="container-yellow">
            <li onClick={handleOnClick} className="li-foto good-price">
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
          <li className="currency">$ {byn?.USDBYN.high ? byn?.USDBYN.high : <div className="spinner"></div>}</li>
          <li className="weather"><span>{weather?.description === 'Partly cloudy' ? <img className="cloudImg" src={cloud} alt="cloud" /> : ''}</span>{weather?.temperature ? weather?.temperature: <div className="spinner"></div>}</li>
          
        </ul>
      </div>
     
    </div>
  );
};

export default Header;
