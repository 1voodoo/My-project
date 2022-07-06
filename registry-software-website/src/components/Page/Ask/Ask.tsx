import { FC } from "react";
import style from './Ask.module.scss'

const Ask: FC = () => {
    return (
        <div className={style.page}>
            <div className={style.wrapper}>
                <h2>Вопрос-ответ</h2>
                <div>
                    <p className={style.text1}>Для подачи заявления необходимо подготовить</p>
                    <ol>
                        <li>Данные для авторизации в личном кабинете</li>
                        <li>Квалифицированный сертификат ключа проверки электронной подписи.</li>
                        <li>Сведения, документы и материалы в соответствии с Методическими рекомендациями.</li>
                        <li>Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</li>
                    </ol>
                    <p className={style.text}>Связь с оператором реестра</p>
                    <p className={style.text}>Как подать заявление на включение программного обеспечения в реестр</p>
                    <p className={style.text}>Где можно подать заявление</p>
                    <p className={style.text}>Как узнать мне причину отказа</p>
                    <p className={style.text}>Что делать, если Вам отказали</p>
                    <p className={style.text}>Изменение реестревой записи</p>
                </div>
            </div>
        </div>
    );
};

export default Ask;
