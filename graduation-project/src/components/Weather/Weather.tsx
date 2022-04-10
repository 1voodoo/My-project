
import React, { FC, useEffect, useState } from 'react';
import getApiWeather, { IWeather } from '../../api/getWeather';
import style from './Weather.module.scss';

const Weather: FC =  () => {
    const [weather, setWeather] = useState<IWeather | null>(null);
    const [initialValue, setInitialValue] = useState('Минск');
    const [inputValue, setInputValue] = useState('');
    const [isDisabledBtn, setisDisabledBtn] = useState(true);
    
    const getWeather = async() => {
        const weather = await getApiWeather(initialValue);
        setWeather(weather);
    };
    const handleNextCountry = () => {
        setInitialValue(inputValue);
        setInputValue('');
        setisDisabledBtn(true);
      }
      const handleWeather = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        if (inputValue.length !== 0) {
            setisDisabledBtn(false);
        };
      };
    useEffect(() => {
        getWeather();
      },[initialValue]);

    return (<>
      {weather && 
        <div className={style.container}>
            <input
                className={style.headerInput}
                maxLength={10} 
                onChange={handleWeather}
                type="text"
                placeholder="введите город"
                value={inputValue}
            />
            <button
                className={style.btn}
                disabled={isDisabledBtn} 
                onClick={handleNextCountry}>info
            </button>
            <div className={style.data}>
              <p>{initialValue} <span>{weather?.temperature ? weather?.temperature : 'нет такого города'}</span></p>
              <p>wind <span>{weather?.wind ?  weather?.wind : 'ошибка'}</span></p>
              <p>{weather?.description}</p>
            </div>
        </div>
      }
      
      </>);
};

export default Weather;