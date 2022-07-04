import { FC } from "react";
import style from './MainContent.module.scss';
import voronka from '../../icons/voronka.png';
import twoLines from '../../icons/twoLines.png';
import vector from '../../icons/VectorDown.png';
import VectorТусклый from '../../icons/VectorТусклый.png';

const MainContent:FC = () => {
    return (
        <div className={style.pageBack}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <h2>Реестры</h2>
                    <div className={style.containerIcon}>
                    <img src={voronka} alt="icon" />
                        <div className={style.spots}>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={style.HeaderTable}>
                    <div className={style.textPheader}>
                        <img src={twoLines} alt="icon" />
                        <p className={style.textOne}>Регистрационный номер</p>
                    </div>
                    <div className={style.textPheader}>
                        <img src={twoLines} alt="icon" />
                        <p className={style.textTwo}>Наименование программного обеспечения</p>
                    </div>
                    <div className={style.textPheader}>
                        <p className={style.textThree}>Код класса</p>
                    </div>
                    <div className={style.textPheader}>
                        <p className={style.textFour}>Класс программного обеспечения</p>
                    </div>
                    <div className={style.textPheader}>
                        <p className={style.textFive}>Дата регистрации</p>
                    </div>
                    <div className={style.textPheader}>
                        <p className={style.textSix}>Адрес сайта</p>
                    </div>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#1</span>
                    <div className={style.containerText}>
                        <p>Система управления базами данных
                            <p>«Ред База Данных»</p>
                        </p>
                    </div>
                    <span className={style.code}>02.09</span>
                    <div className={style.containerTextTwo}>
                        <p>Системы управления базами данных</p>
                    </div>
                    <span className={style.Date}>29.01.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#2</span>
                    <div className={style.containerText}>
                        <p>1С:Школа.
                            <p>Информатика,</p>
                            <p> 11 класс</p>
                        </p>
                    </div>
                    <span className={style.code}>04.11</span>
                    <div className={style.containerTextTwo}>
                        <p>Системы управления процессами организации</p>
                    </div>
                    <span className={style.Date}>29.01.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#3</span>
                    <div className={style.containerText}>
                        <p>1С:Школа.Русский язык, 5–6 класс. Лексикология
                        </p>
                    </div>
                    <span className={style.code}>04.11</span>
                    <div className={style.containerTextTwo}>
                        <p>Информационные системы для решения специфических отраслевых задач</p>
                    </div>
                    <span className={style.Date}>29.01.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#4</span>
                    <div className={style.containerText}>
                        <p>1С:Комплексная автоматизация 8</p>
                    </div>
                    <span className={style.code}>04.11</span>
                    <div className={style.containerTextTwo}>
                        <p>Системы управления процессами организации</p>
                    </div>
                    <span className={style.Date}>20.02.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#5</span>
                    <div className={style.containerText}>
                        <p>Электронный периодический справочник "Система ГАРАНТ"</p>
                    </div>
                    <span className={style.code}>04.15</span>
                    <div className={style.containerTextTwo}>
                        <p>Прикладное программноеобеспечение общего назначения</p>
                    </div>
                    <span className={style.Date}>20.02.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#6</span>
                    <div className={style.containerText}>
                        <p>Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»</p>
                    </div>
                    <span className={style.code}>04.13</span>
                    <div className={style.containerTextTwo}>
                        <p>Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных</p>
                    </div>
                    <span className={style.Date}>11.03.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#7</span>
                    <div className={style.containerText}>
                        <p>ABBYY Lingvo</p>
                    </div>
                    <span className={style.code}>04.07</span>
                    <div className={style.containerTextTwo}>
                        <p>Лингвистическое программное обеспечение</p>
                    </div>
                    <span className={style.Date}>11.03.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#8</span>
                    <div className={style.containerText}>
                        <p>1С-Битрикс24 (Компания)</p>
                    </div>
                    <span className={style.code}>04.03</span>
                    <div className={style.containerTextTwo}>
                        <p>Офисные приложения</p>
                    </div>
                    <span className={style.Date}>14.03.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#9</span>
                    <div className={style.containerText}>
                        <p>1С-Битрикс24 (Проект+)</p>
                    </div>
                    <span className={style.code}>04.03</span>
                    <div className={style.containerTextTwo}>
                        <p>Системы управленияпроектами, исследованиями, разработкой,проектированием и внедрением</p>
                    </div>
                    <span className={style.Date}>14.03.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.textMain}>
                    <span className={style.number} >#10</span>
                    <div className={style.containerText}>
                        <p>1С-Битрикс24 (Команда)</p>
                    </div>
                    <span className={style.code}>04.03</span>
                    <div className={style.containerTextTwo}>
                        <p>Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных</p>
                    </div>
                    <span className={style.Date}>14.03.2016</span>
                    <a href="http://">Ссылка</a>
                </div>
                <div className={style.paginayt}>
                    <div className={style.paginaytContainer}>
                        <img className={style.vectorAnotherOne} src={VectorТусклый} alt="icon"  />
                        <img className={style.vectorAnother} src={VectorТусклый} alt="icon"  />
                        <img className={style.vectorLeftSide} src={vector} alt="icon"  />
                        <p><span className={style.firstNumber}>1</span></p>
                        <p><span>2</span></p>
                        <p><span>3</span></p>
                        <p><span>4</span></p>
                        <p><span>5</span></p>
                        <span>...</span>
                        <span>112</span>
                        <span>113</span>
                        <img className={style.vectorRightAllone} src={vector} alt="icon"  />
                        <img className={style.vectorRightDouble} src={vector} alt="icon"  />
                        <img className={style.vectorRight} src={vector} alt="icon"  />
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default MainContent;
