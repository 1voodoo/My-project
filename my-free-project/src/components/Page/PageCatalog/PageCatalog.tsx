import { FC } from "react";
import './PageCatalog.scss';
import prime from '../../../iconHeader/icons8-мобильный-заказ-100.png';
import mobile from '../../../iconHeader/icons8-разбитый-телефон.gif';
import laptop from '../../../iconHeader/icons8-ноутбук-100.png';
import washMashin from '../../../iconHeader/icons8-стиральная-машина-80.png';
import roller from '../../../iconHeader/icons8-валик-50.png';
import home from '../../../iconHeader/home.png';
import car from '../../../iconHeader/icons8-car-64.png';
import bike from '../../../iconHeader/icons8-велосипед-50.png';
import stroller from '../../../iconHeader/icons8-stroller-64.png';
import chair from '../../../iconHeader/icons8-офисное-кресло-50.png';
import fire from '../../../iconHeader/icons8-огонь-16.png';
import summer from '../../../iconHeader/icons8-summer-64.png';
import cart from '../../../iconHeader/icons8-полная-корзина-100.png';
import cornflower from '../../../iconHeader/icons8-цветок-100.png';
import controller from '../../../iconHeader/icons8-controller-62.png';
import xiaomi from '../../../iconHeader/icons8-xiaomi-48.png';
import newIcon from '../../../iconHeader/icons8-новинка-48.png';
import petsFood from '../../../iconHeader/icons8-собачья-миска-48.png';
import diamond from '../../../iconHeader/icons8-diamond-64.png';
import apple from '../../../iconHeader/icons8-ос-mac-50.png';

const PageCatalog: FC = () => {
  return (
      <div className="page-catalog">
        <div className="wrapper-catalog">
          <div className="header">
            <h1>Каталог</h1>
            <a className="good-priсe" href="http://">Все супер цены!</a>
          </div>
          <div className="container-products">
            <div className="container-product">
              <img src={prime} alt="logo" />
              <p>Onliner Prime</p>
            </div>
            <div className="container-product">
              <img src={mobile} alt="logo" />
              <p>Электроника</p>
            </div>
            <div className="container-product">
              <img src={laptop} alt="logo" />
              <p>Компьютеры и сети</p>
            </div>
            <div className="container-product">
              <img src={washMashin} alt="logo" />
              <p>Бытовая техника</p>
            </div>
            <div className="container-product">
              <img src={roller} alt="logo" />
              <p>Стройка и ремонт</p>
            </div>
            <div className="container-product">
              <img src={home} alt="logo" />
              <p>Дом и сад</p>
            </div>
            <div className="container-product">
              <img src={car} alt="logo" />
              <p>Авто и мото</p>
            </div>
            <div className="container-product">
              <img src={bike} alt="logo" />
              <p>Красота и спорт</p>
            </div>
            <div className="container-product">
              <img src={stroller} alt="logo" />
              <p>Детям и мамам</p>
            </div>
            <div className="container-product">
              <img src={chair} alt="logo" />
              <p>Работа и офис</p>
            </div>
          </div>
          <ul className="container-item-products">
            <li>
              <img src={fire} alt="logo" />
              <span>Супер цены</span>
            </li>
            <li>
              <img src={summer} alt="logo" />
              <span>Лето</span>
            </li>
            <li>
              <img src={cart} alt="logo" />
              <span>На каждый день</span>
            </li>
            <li>
              <img src={cornflower} alt="logo" />
              <span>Зроблена у Беларуси</span>
            </li>
            <li>
              <img src={controller} alt="logo" />
              <span>Игровая зона</span>
            </li>
            <li>
              <img src={xiaomi} alt="logo" />
              <span>Xiaomi</span>
            </li>
            <li>
              <img src={apple} alt="logo" />
              <span>Apple</span>
            </li>
            <li>
              <img src={newIcon} alt="logo" />
              <span>Новые разделы</span>
            </li>
            <li>
              <img src={petsFood} alt="logo" />
              <span>Зоо Товары</span>
            </li>
            <li>
              <img src={diamond} alt="logo" />
              <span>PREMIUM</span>
            </li>
          </ul>
          <ul className="container-links">
            <a href="" className="link">Моторные масла</a>
            <a href="" className="link">Автомобильные видеорегистраторы</a>
            <a href="" className="link">Автомобильные компрессоры</a>
            <a href="" className="link">Автохимия и автокосметика для кузова</a>
            <a href="" className="link">Мойки высокого давления</a>
            <a href="" className="link">Автомобильные аккумуляторы</a>
            <a href="" className="link">Аксессуары для салона</a>
          </ul>
          <div className="container-advertisings">
            <div className="container-advertising">
              <div className="container-advertising-discription">
                <h1>До -50% на часы</h1>
                <p>Более 500 моделей по сниженным ценам</p>
              </div>
            </div>
            <div className="container-advertising laptop">
              <div className="container-advertising-discription">
                <h1>Ноутбуки от 700р.</h1>
                <p>Большой выбор для работы и учебы</p>
              </div>
            </div>
            <div className="container-advertising coffe">
              <div className="container-advertising-discription">
                <h1>Капсулы от 6 р.</h1>
                <p>Для кофеварок Nespresso со скидкой до 46%</p>
              </div>
            </div>
            <div className="container-advertising chair">
              <div className="container-advertising-discription">
                <h1>Кресла от 140 р.</h1>
                <p>500 моделей для работы и учебы</p>
              </div>
            </div>
            <div className="container-advertising washingM">
              <div className="container-advertising-discription">
                <h1>До –43% на стиральные машины</h1>
                <p>Bosch, Samsung и Candy</p>
              </div>
            </div>
            <div className="container-advertising bags">
              <div className="container-advertising-discription">
                <h1>Чемоданы от 175 р.</h1>
                <p>Более 1300 моделей от 35 магазинов</p>
              </div>
            </div>
            <div className="container-advertising card">
              <div className="container-advertising-discription">
                <h1>Видеокарты</h1>
                <p>Удобный выбор 500 моделей, сравнение цен от 50 магазинов</p>
              </div>
            </div>
            <div className="container-advertising table">
              <div className="container-advertising-discription">
                <h1>Парты, столы, стулья</h1>
                <p>1000 моделей с удобный подбором</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PageCatalog;
