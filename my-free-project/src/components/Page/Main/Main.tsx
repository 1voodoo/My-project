import { FC } from "react";
import './Main.scss';
import icon from '../../../pageMain/images.jpg';

const Main:FC = () => {
  return (
    <div className="page-main">
      <div className="page-main-wrapper">
        <div className="page-main-header">
          <ul>
            <a className="page-main-header-href" href="">Моторные масла</a>
            <a className="page-main-header-href" href="">Автомобильные видеорегистраторы</a>
            <a className="page-main-header-href" href="">Автомобильные компрессоры</a>
            <a className="page-main-header-href" href="">Автохимия и автокосметика для кузова</a>
            <a className="page-main-header-href" href="">Мойки высокого давления</a>
            <a className="page-main-header-href" href="">Автомобильные аккумуляторы</a>
            <a className="page-main-header-href" href="">Аксессуары для салона автомобиля</a>
            <a className="page-main-header-href" href="">Автомобильные коврики</a>
            <a className="page-main-header-href" href="">Автомобильные сумки и органайзеры</a>
            <a className="page-main-header-href" href="">Автомобильные лампы</a>
          </ul>
        </div>
        <div className="page-main-main">
          <div className="page-main-main-firstContainer">
            <div className="page-main-container">
              <span className="page-main-container-span">Спецпроект</span>
              <h2 className="page-main-container-tittle">«Сумка была набита деньгами». Владелец магазинов о бизнесе</h2>
            </div>
            <div className="page-main-container home-back">
              <span className="page-main-container-span home-span">Недвижимость</span>
              <h2 className="page-main-container-tittle">Новые подробности в эпопее с ЖК Smart</h2>
            </div>
            <div className="page-main-container cinema-back">
              <span className="page-main-container-span home-span">Недвижимость</span>
              <h2 className="page-main-container-tittle">Протестировали новый кинотеатр с кроватями и баром</h2>
            </div>
            <div className="page-main-container car-back">
              <span className="page-main-container-span home-span">Авто</span>
              <h2 className="page-main-container-tittle">Дети сбросили ведро с краской с 20-го этажа. Продолжение</h2>
            </div>
            <div className="page-main-container phone-back">
              <span className="page-main-container-span home-span">Технологии</span>
              <h2 className="page-main-container-tittle">Белорус знатно потроллил мошенников. Запись разговора</h2>
            </div>
            <div className="page-main-container legend-back">
              <span className="page-main-container-span">Спецпроект</span>
              <h2 className="page-main-container-tittle">Ван Дамм или Чак Норрис? Пришло время разобраться</h2>
            </div>
            <div className="page-main-container rest-back">
              <span className="page-main-container-span">Спецпроект</span>
              <h2 className="page-main-container-tittle">Учимся правильно бездельничать и все успевать</h2>
            </div>
            <div className="page-main-container kettle-back">
              <span className="page-main-container-span home-span">Недвижимость</span>
              <h2 className="page-main-container-tittle">Рейтинг надежности электрочайников</h2>
            </div>
            <div className="page-main-container washing-back">
              <h2 className="page-main-container-tittle">Стиральные машины</h2>
            </div>
            <div className="page-main-container fish-back">
              <span className="page-main-container-span home-span">ЛайфСтайл</span>
              <h2 className="page-main-container-tittle">40 килограмм! На Припяти поймали гигантского сома</h2>
            </div>
            <div className="page-main-container car-back">
              <span className="page-main-container-span home-span">Авто</span>
              <h2 className="page-main-container-tittle">«Собаки истерзали наш автомобиль!» Происшествие в Минске</h2>
            </div>
            <div className="page-main-container fashan-back">
              <span className="page-main-container-span home-span">ЛайфСтайл</span>
              <h2 className="page-main-container-tittle">Так выглядит мода, которую никто не понимает</h2>
            </div>
          </div>
          <div className="page-main-main-secondContainer">
            <img className="page-main-last" src={icon} alt="logo" />
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Main;
