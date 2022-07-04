import { FC } from "react";
import style from './News.module.scss';
import foto from '../../icons/Фото.png';
import fotoRed from '../../icons/Фото (1).png';
import belarus from '../../icons/belarus.png';
import doctor from '../../icons/doctor.png';
import lol from '../../icons/lol.png';
import notebook from '../../icons/серыйБлокнот.png';

const News:FC = () => {
    return (
        <div className={style.page}>
            <div className={style.wrapper}>
                <h2>Новости реестра</h2>
                <div className={style.containerNews}>
                    <div className={style.containerBlock}>
                        <div className={style.containerFoto}>
                            <img src={foto} alt="foto" />
                        </div>
                        <p className={style.tittle}>Технические работы 30.05.2022</p>
                        <div className={style.containerDate}>
                            <img className={style.imgNote} src={notebook} alt="foto" />
                            <p className={style.date}>25.05.2022</p>
                        </div>
                        <p className={style.duscription}>В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...</p>
                    </div>
                    <div className={style.containerBlock}>
                        <div className={style.containerFoto}>
                            <img src={fotoRed} alt="foto" />
                        </div>
                        <p className={style.tittle}>Изменение справочника</p>
                        <div className={style.containerDate}>
                            <img className={style.imgNote} src={notebook} alt="foto" />
                            <p className={style.date}>28.05.2022</p>
                        </div>
                        <p className={style.duscription}>Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Дей...</p>
                    </div>
                    <div className={style.containerBlock}>
                        <div className={style.containerFoto}>
                            <img src={foto} alt="foto" />
                        </div>
                        <p className={style.tittle}>Технические работы 26.05.2022</p>
                        <div className={style.containerDate}>
                            <img className={style.imgNote} src={notebook} alt="foto" />
                            <p className={style.date}>26.05.2022</p>
                        </div>
                        <p className={style.duscription}>В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...</p>
                    </div>
                    <div className={style.containerBlock}>
                        <div className={style.containerFoto}>
                            <img src={belarus} alt="foto" />
                        </div>
                        <p className={style.tittle}>Лицензирование в Беларуси</p>
                        <div className={style.containerDate}>
                            <img className={style.imgNote} src={notebook} alt="foto" />
                            <p className={style.date}>25.05.2022</p>
                        </div>
                        <p className={style.duscription}>Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...</p>
                    </div>
                    <div className={style.containerBlock}>
                        <div className={style.containerFoto}>
                            <img src={doctor} alt="foto" />
                        </div>
                        <p className={style.tittle}>Тестирование системы новостей Ед...</p>
                        <div className={style.containerDate}>
                            <img className={style.imgNote} src={notebook} alt="foto" />
                            <p className={style.date}>20.05.2022</p>
                        </div>
                        <p className={style.duscription}>Тестирование системы новостей ЕРЛ.</p>
                    </div>
                    <div className={style.containerBlock}>
                        <div className={style.containerFoto}>
                            <img src={lol} alt="foto" />
                        </div>
                        <p className={style.tittle}>Обновление версии реестра ПО</p>
                        <div className={style.containerDate}>
                            <img className={style.imgNote} src={notebook} alt="foto" />
                            <p className={style.date}>18.05.2022</p>
                        </div>
                        <p className={style.duscription}>В новой версии доступны новые функции, которые упрощают использование сервис...</p>
                    </div>
                    <div className={style.containerBtn}>
                        <button>Показать все</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default News;
