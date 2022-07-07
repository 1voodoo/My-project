import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Authorization.module.scss';
import arrowLeft from '../../icons/arrow-left.png';
import ok from '../../icons/okGreen.png';

const Authorization: FC = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorPas, setErrorPas] = useState(true);
    const [errorPasShow, setErrorPasShow] = useState(true);
    
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/')
    };

    const handleOnClickEnter = () => {
        navigate('/info')
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        setPassword(event.target.value)
        if(event.target.value === '3axaar') {
            setError(true)
        } else {
            setError(false)
        } 
        
    };
    const handleOnChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value) 
        if(event.target.value === '1234') {
            setErrorPasShow(false)
        } else {
            setErrorPasShow(true)
        }
        if(event.target.value !== '1234' && event.target.value.length > 1) {
            setErrorPas(false)
        } else {
            setErrorPas(true)
        } 
    };


    return (
        <div className={style.page}>
            <div className={style.wrapper}>
                <div onClick={handleOnClick} className={style.home}>
                    <img src={arrowLeft} alt="arrow" />
                    <p>Главная</p>
                </div>
                <div className={style.container}>
                    <div className={style.content}>
                        <h3 className={style.tittle}>Авторизация</h3>
                        <div className={style.cintainerInput}>
                            <span className={style.spanFirst}>Имя</span>
                            <input onChange={handleOnChange} className={error ? style.firstInputActive :  style.firstInput} type="text" placeholder="Введите имя"/>
                            <img className={error ? style.iconActiv : style.iconOK} src={ok} alt="icon" />
                        </div >
                        
                        <div className={style.cintainerInput}>
                            <span  className={errorPas ? style.span : style.errorSpan}>Пароль</span>
                            <input onChange={handleOnChangeTwo} className={errorPasShow ? style.secondInput : style.secondInputPlus} type="password" placeholder="Введите пароль"/>
                            <img className={errorPasShow ? style.iconOK  : style.iconActiv} src={ok} alt="icon" />
                            <p className={errorPas ? style.errorText : style.errorTextActive}>Неправильный пароль</p>
                        </div>
                        <div className={style.check}>
                            <input className={style.customCheckbox} type="checkbox" id="user" />
                            <label htmlFor='user'>Запомнить меня на этом компьютере</label>
                        </div>
                        <button onClick={handleOnClickEnter}>Вход</button>
                        <p className={style.textForget}>Забыли свой пароль?</p>
                        <p className={style.avtOne}>Авторизация с использованием ЕС ИФЮЛ</p>
                        <p className={style.avt}>Авторизация с использованием МСИ</p>
                        <div className={style.textFinish}>
                            <p>У вас нет аккаунта?</p>
                            <p>Нажмите сюда чтобы создать</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
