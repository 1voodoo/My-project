import { Button } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import style from './Title.module.scss';


const  Title:FC = () => {
  
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValueTwo, setInputValueTwo] = useState<string>('');
  const [dis, setDis] = useState(false);
  const [error, setError] = useState(false);
  const [tagValue, setTagValue] = useState('');
  const [arr, setArr] = useState<any[]>([]);
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if(event.target.value.length < 20) {
      setError(false);
    } else {
      setError(true);
    }
  };
  const handleOnChangeSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueTwo(event.target.value);
    let newMap1 = arr.map(item => item);
    
      for (let i = 0; i < arr.length; i++) {
        if (event.target.value === arr[i].tag) {
          let newMap = arr.filter(item => item.tag === event.target.value);
          setArr(newMap)
        }
        else if(event.target.value !== arr[i].tag) {
          setArr(newMap1)
          console.log(arr);
        }
      }
     
      
  } 
  
  const handleOnAdd = () => {
    
    if(inputValue.length != 0 && inputValue.length < 20 && !inputValue.includes("#")) {
      const add = inputValue.slice(0,1).toUpperCase() + inputValue.slice(1)
      setArr([...arr, {discripton: add, tag: tagValue}]);
      setError(false);
      setInputValue('');
    }
    else if(inputValue.length != 0 && inputValue.length < 20 && inputValue.includes("#")) {
      const tag = inputValue.indexOf('#');
      const newTag = inputValue.slice(tag);
      let result = inputValue.slice(0, tag);
      const add = result.slice(0,1).toUpperCase() + result.slice(1)
      setTagValue(newTag);
      setInputValue(result);
      setArr([...arr, {discripton: add, tag: newTag}])
      setError(false);
      setTagValue('');
      setInputValue('');
    }
    else {
      setError(true);
    };
  };

  const handleOnDelet = (value: string) => {
      setArr(previous => previous!.filter(current => current !== value));
  };
  
  const handleOnChanges = (value: string, index: number) => {
    setDis(false);
    setInputValue(value);
    setArr([...arr.slice(0, index), inputValue, ...arr.slice(index + 1)]);
    if(inputValue.length === 0) {
      setDis(true);
    };
    
  };  

  useEffect(() => {
    localStorage.setItem('arr', JSON.stringify(arr));
  },[arr]);

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem('arr') || '[]');
    setArr(save)
  },[]);

  return (
    <div className={style.pageTitle}>
      <div className={style.myNotes}>
        <div className={style.error}>{error ? "error": ''}</div> 
        <div className={style.header}> 
          <input className={style.input} onChange={handleOnChange} value={inputValue} type="text" placeholder='text note'/>
          <Button disabled={dis} onClick={handleOnAdd} size="small" variant="contained">Add note</Button>
        </div>
        <input className={style.input} onChange={handleOnChangeSecond} value={inputValueTwo} type="text" placeholder='search'/>
            {arr && (
              <div className={style.content}>
                {arr.map((value, index)=> (
                  <div className={style.container} key={index}>
                    <p className={style.discripton}>{value.discripton}<span>{value.tag}</span></p>
                    <div className={style.btnContainer}>
                      <button className={style.btnDelet} onClick={() => handleOnDelet(value)}>x</button>
                      <button onClick={() => handleOnChanges(value, index)}>{dis ? 'add changes': 'change' }</button>
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