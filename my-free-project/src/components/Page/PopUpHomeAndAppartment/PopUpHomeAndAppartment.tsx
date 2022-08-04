import { FC } from "react";
import './PopUpHomeAndAppartment.scss';

const PopUpHomeAndAppartment:FC = () => {
  return (
    <div className="PopUP-Home">
      <div className="PopUP-Home-twoContainer">
        <div className="PopUP-Home-first-container">
          <h1 className="tittle-popUp-home">Продажа</h1>
          <div className="tittle-popUp-home-list">
            <ul className="tittle-popUp-home-ul">
              <a className="tittle-popUp-home-link" href="">Минск</a>
              <a className="tittle-popUp-home-link" href="">Брест</a>
              <a className="tittle-popUp-home-link" href="">Витебск</a>
              <a className="tittle-popUp-home-link" href="">Гомель</a>
              <a className="tittle-popUp-home-link" href="">Гродно</a>
              <a className="tittle-popUp-home-link" href="">Могилев</a>
            </ul>
            <ul className="tittle-popUp-home-ul">
              <a className="tittle-popUp-home-link" href="">1-комнатные</a>
              <a className="tittle-popUp-home-link" href="">2-комнатные</a>
              <a className="tittle-popUp-home-link" href="">3-комнатные</a>
              <a className="tittle-popUp-home-link" href="">4+-комнатные</a>
            </ul>
            <ul className="tittle-popUp-home-ul">
              <a className="tittle-popUp-home-link" href="">До 30 000 $</a>
              <a className="tittle-popUp-home-link" href="">30 000–80 000 $</a>
              <a className="tittle-popUp-home-link" href="">От 80 000 $</a>
            </ul>
          </div>
        </div>
        <div className="PopUP-Home-second-container">
          <h1 className="tittle-popUp-home">Аренда</h1>
          <div className="tittle-popUp-home-list">
            <ul className="tittle-popUp-home-ul">
              <a className="tittle-popUp-home-link" href="">Минск</a>
              <a className="tittle-popUp-home-link" href="">Брест</a>
              <a className="tittle-popUp-home-link" href="">Витебск</a>
              <a className="tittle-popUp-home-link" href="">Гомель</a>
              <a className="tittle-popUp-home-link" href="">Гродно</a>
              <a className="tittle-popUp-home-link" href="">Могилев</a>
            </ul>
            <ul className="tittle-popUp-home-ul">
              <a className="tittle-popUp-home-link" href="">1-комнатные</a>
              <a className="tittle-popUp-home-link" href="">2-комнатные</a>
              <a className="tittle-popUp-home-link" href="">3-комнатные</a>
              <a className="tittle-popUp-home-link" href="">4+-комнатные</a>
              <a className="tittle-popUp-home-link" href="">Комнаты</a>
            </ul>
            <ul className="tittle-popUp-home-ul">
              <a className="tittle-popUp-home-link" href="">От собственника</a>
              <a className="tittle-popUp-home-link" href="">До 250 $</a>
              <a className="tittle-popUp-home-link" href="">250-500 $</a>
              <a className="tittle-popUp-home-link" href="">От 500 $</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpHomeAndAppartment;
