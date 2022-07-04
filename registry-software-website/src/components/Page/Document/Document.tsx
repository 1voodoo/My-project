import { FC } from 'react'
import style from './Document.module.scss'

const Document:FC = () => {
    return (
        <div className={style.page}>
            <div className={style.wrapper}>
                <h2>Документы</h2>
                <p>Всего документов: <span>5</span></p>
            </div>
        </div>
    );
};

export default Document;
