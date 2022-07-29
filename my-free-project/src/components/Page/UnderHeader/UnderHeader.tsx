import { FC } from "react";
import './UnderHeader.scss';
import logo from '../../../iconHeader/onliner_logo.png';
import question from '../../../iconHeader/icons8-задать-вопрос-50.png';
import user from '../../../iconHeader/icons8-пользователь-мужчина-в-кружке-64.png';
import bell from '../../../iconHeader/icons8-колокол-100.png';
import star from '../../../iconHeader/icons8-звезда-50.png';
import cart from '../../../iconHeader/icons8-корзина-64.png';
import search from '../../../iconHeader/icon-input.png';
import bird from '../../../iconHeader/icons8-next.png';

const UnderHeader: FC = () => {
  return (
    <div className="page-UnderHeader">
      <div className="wrapper">
        <img className="logo" src={logo} alt="logo" />
        <div className="form-input">
          <input type="text" placeholder="Поиск в Каталоге. Например, 'холодильник атлант' " />
          <img className="search" src={search} alt="foto" />
        </div>
        <div className="user-info">
          <div className="container-user">
            <img className="user" src={user} alt="foto" />
            <img src={bird} alt='logo'/>
          </div>
          <img className="icon" src={question} alt="logo" />
          <img className="icon" src={bell} alt="logo" />
          <img className="icon"src={star} alt="logo" />
          <img className="icon"src={cart} alt="logo" />
      </div>
      </div>
    </div>
  );
};

export default UnderHeader;
