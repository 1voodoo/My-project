import { FC, useEffect, useState } from "react";
import getApiCurrency, { ICurrency } from "../../api/getApiCurrency";
import style from './Currency.module.scss';

const Currency: FC =  () => {
    const [currency, setCurrency] = useState<ICurrency | null>(null);
    const getApi = async() => {
        const currency = await getApiCurrency();
        setCurrency(currency);
    };
    useEffect(() => {
        getApi();
    },[]);

    return (<>
        {currency && (
            <div className={style.currensy}>
                <p>Курс на {currency?.date}</p>
                <div className={style.ruletka}>
                    <p className={style.text}>EUR</p>
                    <div className={style.valyta}>
                        <div className={style.valyta1}>
                            <p className={style.spanee}> {currency?.eur.byn.toFixed(1)} BYN</p>
                            <p className={style.spanee}>  {currency?.eur.cny.toFixed(1)} CNY</p>
                            <p className={style.spanee}> {currency?.eur.rub.toFixed(1)} RUB</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
       </> 
    );
};

export default Currency;


