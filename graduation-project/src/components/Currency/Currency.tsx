import { FC, useEffect, useState } from "react";
import getApiCurrency, { ICurrency } from "../../api/getApiCurrency";
import getApiCurrencyUsd, { ICurrencyUSD } from "../../api/getApiCurrencyUsd";
import style from './Currency.module.scss';

const Currency: FC =  () => {
    const [currency, setCurrency] = useState<ICurrency | null>(null);
    const [currencyUsd, setCurrencyUsd] = useState<ICurrencyUSD | null>(null);
    
    const getApi2 = async() => {
        const getUsd = await getApiCurrencyUsd();
        setCurrencyUsd(getUsd);
    }
    const getApi = async() => {
        const currency = await getApiCurrency();
        setCurrency(currency);
    };
    
    useEffect(() => {
        getApi();
        getApi2();
    },[]);

    return (<>
        {currency && (
            <div className={style.container}>
                <div className={style.currensy}>
                    <p className={style.data}>Курс на {currency?.date}</p>
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
                    <div className={style.ruletka}>
                        <p className={style.text}>{currencyUsd?.base}</p>
                        <div className={style.valyta}>
                            <div className={style.valyta1}>
                                <p className={style.spanee}> {currencyUsd?.rates.AUD.toFixed(1)} AUD</p>
                                <p className={style.spanee}>  {currencyUsd?.rates.JPY.toFixed(1)} JPY</p>
                                <p className={style.spanee}> {currencyUsd?.rates.PLN.toFixed(1)} PLN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )}
       </> 
    );
};

export default Currency;
