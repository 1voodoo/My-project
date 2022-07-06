import { FC } from 'react';
import style from './Document.module.scss';
import list from '../../icons/list.png';
import downLoade from '../../icons/douwnload.png';

const Document:FC = () => {
    return (
        <div className={style.page}>
            <div className={style.wrapper}>
                <h2 className={style.Tittle}>Документы</h2>
                <p>Всего документов: <span>5</span></p>
            <div className={style.table}>
                <p className={style.line}></p>
                <div className={style.tableContainer}>
                    <div className={style.lineOne}>
                        <p className={style.textHeader}>Категория</p>
                        <p>Общие документы</p>
                        <p>Общие документы</p>
                        <p>Общие документы</p>
                        <p>Общие документы</p>
                        <p>Общие документы</p>
                    </div>
                    <div className={style.lineTwo}>
                        <p className={style.textHeader}>Наименование</p>
                        <p>Постановление Правительства Российской 
                            Федерации от 20.07.2021 "О внесении 
                            изменений в постановление Правительства 
                            Российской Федерации от 16 ноября 2015 г. 
                            № 1236"
                        </p>
                        <p>Приказ №486 от 22.09.2020 Об утверждении 
                            классификатора программ для электронных 
                            вычислительных машин и баз данных
                        </p>
                        <p>Административный регламент ПРИКАЗ 
                            от 21 февраля 2019 года N62
                        </p>
                        <p>Постановление Правительства РФ 
                            от 20.12.2017 № 1594 "О внесении изменений 
                            в постановление Правительства Российской 
                            Федерации от 16 ноября 2015 г. № 1236"
                        </p>
                        <p>Об утверждении правил применения 
                            классификатора программ для электронных 
                            вычислительных машин и баз данных
                        </p>
                    </div>
                    <div className={style.lineThree}>
                        <p className={style.textHeader}>Дата</p>
                        <p>20.07.2021</p>
                        <p>22.09.2020</p>
                        <p>21.02.2019</p>
                        <p>20.12.2017</p>
                        <p>31.12.2015</p>
                    </div>
                    <div className={style.lineFour}>
                        <p className={style.textHeader}>Номер</p>
                        <p>1226</p>
                        <p>468</p>
                        <p>62</p>
                        <p>1594</p>
                        <p>622</p>
                    </div>
                    <div className={style.lineFive}>
                        <p className={style.textHeader}>
                            <img src={list} alt="foto" />
                            Содержание
                        </p>
                        <p>
                            <img src={downLoade} alt="foto" />
                            Скачать
                            (469 Кб)
                        </p>
                        <p>
                            <img src={downLoade} alt="foto" />
                            Скачать
                            (10.81 Мб)
                        </p>
                        <p>
                            <img src={downLoade} alt="foto" />
                            Скачать
                            (2.25 Мб)
                        </p>
                        <p>
                            <img src={downLoade} alt="foto" />
                            Скачать
                            (2.07 Мб)
                        </p>
                        <p>
                            <img src={downLoade} alt="foto" />
                            Скачать
                            (4.69 Мб)
                        </p>
                        </div>
                    </div>
                    <p className={style.line2}></p>
                    <p className={style.line3}></p>
                    <p className={style.line4}></p>
                    <p className={style.line5}></p>
                    <p className={style.line6}></p>
                    <p className={style.line}></p>
                </div>
            </div>
        </div>
    );
};

export default Document;
