import { FC, useEffect, useState } from "react";
import './Header.scss';
import fire from '../../../iconHeader/icons8-огонь-48.png';
import search from '../../../iconHeader/icons8-search-64.png';
import bird from '../../../iconHeader/icons8-next.png';
import card from '../../../iconHeader/картa.png';
import cloud from '../../../iconForPageCatalog/icons8-частичная-облачность-100.png';
import humans from '../../../iconForPageCatalog/Humans.webp';
import { useNavigate } from "react-router-dom";
import ApiWeather, { IWeather } from "../ApiWeather/ApiWeather";
import ApiBYN, { IBYN } from "../ApiBYN/ApiBYN";
import PopUpAuto from "../PopUpAuto/PopUpAuto";
import PopUpHomeAndAppartment from "../PopUpHomeAndAppartment/PopUpHomeAndAppartment";


const Header: FC = () => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [byn, setByn] = useState<IBYN | null>(null);
  const [popUp, setPopUp] = useState(false);
  const [popUpAuto, setPopUpAuto] = useState(false);
  const [popUpHome, setPopUpHome] = useState(false);

  const getApiWeather = async() => {
    const respons = await ApiWeather();
    setWeather(respons);
  };

  const getApiCyrrensy = async() => {
    const respons = await ApiBYN();
    setByn(respons);
  };
  const handleOnFocus = () => {
    setPopUp(true)
  }
  const handleOnLive = () => {
    setPopUp(false)
  }
  const handleOnFocusAuto = () => {
    setPopUpAuto(true)
  }
  const handleOnLiveAuto = () => {
    setPopUpAuto(false)
  }
  const handleOnFocusHome = () => {
    setPopUpHome(true)
  }
  const handleOnLiveHome = () => {
    setPopUpHome(false)
  }

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
        <ul className="News">
          <div className="container-yellow">
            <li onClick={handleOnClick} className="li-foto good-price">
              <img src={fire} alt="icon" />
              Каталог
              <div className="red-text">
                <p>Все суперцены</p>
              </div>
            </li>
            <li onMouseMove={handleOnFocus} onMouseLeave={handleOnLive} className="li-foto-little ">
              Новости
              {popUp && 
                  <div className="popUP-news">
                    <div className="wrapper-news">
                      <div className="order-list">
                        <li>Кошелек</li>
                        <div className="containerPopUp">
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>«Сумка была набита деньгами». Владелец магазинов о бизнесе</p>
                          </div>
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>Сколько может дешеветь доллар? Свежие курсы</p>
                          </div>
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>Пока молоко не убежало. Что происходит на полках магазинов</p>
                          </div>
                        </div>
                      </div>
                      <div className="order-list">
                        <li>Авто</li>
                        <div className="containerPopUp">
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>«Сумка была набита деньгами». Владелец магазинов о бизнесе</p>
                          </div>
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>Сколько может дешеветь доллар? Свежие курсы</p>
                          </div>
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>Пока молоко не убежало. Что происходит на полках магазинов</p>
                          </div>
                        </div>
                      </div>
                      <div className="order-list">
                        <li>Технологии</li>
                        <div className="containerPopUp">
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>«Сумка была набита деньгами». Владелец магазинов о бизнесе</p>
                          </div>
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>Сколько может дешеветь доллар? Свежие курсы</p>
                          </div>
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>Пока молоко не убежало. Что происходит на полках магазинов</p>
                          </div>
                        </div>
                      </div>
                      <div className="order-list">
                        <li>Недвижимость</li>
                        <div className="containerPopUp">
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>«Сумка была набита деньгами». Владелец магазинов о бизнесе</p>
                          </div>
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>Сколько может дешеветь доллар? Свежие курсы</p>
                          </div>
                          <div className="container-popUP-news">
                            <img className="foto-popUp" src={humans} alt="foto" />
                            <p>Пока молоко не убежало. Что происходит на полках магазинов</p>
                          </div>
                        </div>
                      </div>
                    </div>  
                  </div>
                }
              <img className="li-foto-little little" src={bird} alt="icon" />
            </li>
            <li onMouseMove={handleOnFocusAuto} onMouseLeave={handleOnLiveAuto} className="li-foto-little">
              Автобарахолка
              {popUpAuto && <PopUpAuto/>}
              <img className="li-foto-little little" src={bird} alt="icon" />
            </li>
            <li onMouseMove={handleOnFocusHome} onMouseLeave={handleOnLiveHome} className="li-foto-little">
              Дома и квартиры
              {popUpHome && <PopUpHomeAndAppartment/>}
              <img className=" li-foto-little little" src={bird} alt="icon" />
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
