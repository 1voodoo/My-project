import { FC } from "react";
import './Footer.scss';
import logo from '../../../iconForPageCatalog/logoOnliner.jpg';
import vk from '../../../iconForPageCatalog/icons8-vk-24.png';
import facebook from '../../../iconForPageCatalog/icons8-facebook-f-50.png';
import twitter from '../../../iconForPageCatalog/icons8-твиттер-50.png';
import yuotube from '../../../iconForPageCatalog/icons8-youtube-play-100.png';

const Footer: FC = () => {
  return (
    <div className="page-footer">
      <div className="page-footer-content">
        <ul className="footer-link">
          <li>
            <a href="">О Компании</a>
          </li>
          <li>
            <a href="">Контакты редакции</a>
          </li>
          <li>
            <a className="link-yellow" href="">Реклама</a>
          </li>
          <li>
            <a className="link-yellow" href="">Тарифы</a>
          </li>
          <li>
            <a href="">Вакансии</a>
          </li>
          <li>
            <a href="">Манифест</a>
          </li>
          <li>
            <a href="">Пользовательское соглашение</a>
          </li>
          <li>
            <a href="">Публичные договоры</a>
          </li>
          <li>
            <a href="">Политика конфиденциальности</a>
          </li>
          <li>
            <a href="">Поддержка пользователей</a>
          </li>
          <li>
            <a href="">Правила возврата</a>
          </li>
        </ul>
        <div className="footer-container-logo">
          <img src={logo} alt="logo" />
          <p>© 2001—2022 Onlíner</p>
        </div> 
      </div>
      <div className="page-style-socials">
          <a className="social" href="https://vk.com/" target="_blank">
            <img src={vk} alt="vk" />
          </a>
          <a className="social" href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a className="social" href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
          <a className="social" href="https://www.youtube.com/" target="_blank">
            <img src={yuotube} alt="youtube" />
          </a>
      </div> 
    </div>
  );
};

export default Footer;
