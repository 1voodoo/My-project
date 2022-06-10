import { Button } from '@mui/material';
import { prependListener } from 'process';
import React, { FC, useEffect, useState } from 'react';
import style from './Title.module.scss';
export interface IRepo {
  description: string;
  tag: string;
};

const  Title:FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [dis, setDis] = useState(false);
  const [arr, setArr] = useState<string[]>([]);
  const [arr1, setArr1] = useState<IRepo[]>([]);
  const [error, setError] = useState(false);
  const [tag, setTag] = useState('');
  console.log();
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if(event.target.value.length < 20) {
      setError(false);
    } else {
      setError(true);
    }
  };
  console.log(tag);
  
  const handleOnAdd = () => {
    const tag = inputValue.indexOf('#');
    const newTag = inputValue.slice(tag);
    setTag(newTag);

    if(inputValue.length != 0 && inputValue.length < 20) {
      setArr([...arr, inputValue]);
      setInputValue('');
      setError(false);
    } else {
      setError(true);
    };
    
  };

  const handleOnDelet = (item: string) => {
      setArr(previous => previous.filter(current => current !== item));
  };
  
  const handleOnChanges = (item: string, index: number) => {
    setDis(false);
    setInputValue(item);
    setArr([...arr.slice(0, index), inputValue, ...arr.slice(index + 1)]);
    if(inputValue.length === 0) {
      setDis(true);
    };
    
  };  

  // useEffect(() => {
  //   localStorage.setItem('arr', JSON.stringify(arr));
  // },[arr]);

  // useEffect(() => {
  //   const save = JSON.parse(localStorage.getItem('arr') || '[]');
  //   setArr(save)
  // },[]);

  return (
    <div className={style.pageTitle}>
      <div className={style.myNotes}>
        <div className={style.error}>{error ? "error": ''}</div> 
        <div className={style.header}> 
          <input className={style.input} onChange={handleOnChange} value={inputValue} type="text" placeholder='text note'/>
          <Button disabled={dis} onClick={handleOnAdd} size="small" variant="contained">Add note</Button>
        </div>
         
            {arr && (
              <div className={style.content}>
                {arr.map((item, index)=> (
                  <div className={style.container} key={index}>
                    {item}
                    <div className={style.btnContainer}>
                      <button className={style.btnDelet} onClick={() => handleOnDelet(item)}>x</button>
                      <button onClick={() => handleOnChanges(item, index)}>{dis ? 'add changes': 'change' }</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
      </div>      
    </div>
  );
}

export default Title;