import { Button } from '@mui/material';
import React, { FC, useState } from 'react';
import style from './Title.module.scss';


const  Title:FC = () => {

  // interface IRepo {
  //   description: string;
  //   tag: string;
  // };
  // interface IUser {
  //   all: IRepo[];
  // }
  // const allNotes = [
  //   {
  //   }
  // ]

  const [inputValue, setInputValue] = useState<string>('');
  const [dis, setDis] = useState(false);
  const [obj, setObj] = useState({});
  const [arr, setArr] = useState([]);
  const [arrSecond, setArrSecond] = useState<any[]>([]);
  // const [arr5, setArr5] = useState<[]>([]);
  const [error, setError] = useState(false);
  const [tagValue, setTagValue] = useState('');
 console.log(obj);
 
  
  

  // arr!.push(obj);

  // let copy = Object.assign(arr5);
  // const add = {prop: inputValue, propTag: tagValue};

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if(event.target.value.length < 20) {
      setError(false);
    } else {
      setError(true);
    }
  };
  
  const handleOnAdd = () => {
    if(inputValue.length != 0 && inputValue.length < 20 && !inputValue.includes("#")) {
      setObj({name: inputValue, second: tagValue});
      // arr.push(...arr, obj);
      // setArr([obj, ...arr]);
      // setArr(arr);
      // setArr(obj);
      // copy.push(add);
      // setArr5(arr5);
      setError(false);
      setInputValue('');
    }

    else if(inputValue.length != 0 && inputValue.length < 20 && inputValue.includes("#")) {
      const tag = inputValue.indexOf('#');
      const newTag = inputValue.slice(tag);
      let result = inputValue.slice(0, tag);
      setTagValue(newTag);
      setInputValue(result);
      setObj({name: result, second: newTag});
      // arr.push(...arr, obj);
      // setArr([obj, ...arr]);
      // arr.push(...arr, obj);
      // setArr(arr);
      // setArr(obj);
      // arr.push(obj);
      // setArr(arr);
      // setArr([...arr!, result]);
      // copy.push(add);
      // setArr5(arr5);
      setError(false);
      setTagValue('');
      setInputValue('');
      
    }

    else {
      setError(true);
    };
    
  };

  // const handleOnDelet = (value: string) => {
  //     setArr(previous => previous!.filter(current => current !== value));
  // };
  
  // const handleOnChanges = (value: string, index: number) => {
  //   setDis(false);
  //   setInputValue(value);
  //   setArr([...arr!.slice(0, index), inputValue, ...arr!.slice(index + 1)]);
  //   if(inputValue.length === 0) {
  //     setDis(true);
  //   };
    
  // };  

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
                {/* {arr.map((value, index)=> (
                  <div className={style.container} key={index}>
                    {value}
                    <div className={style.btnContainer}>
                      <button className={style.btnDelet} onClick={() => handleOnDelet(value)}>x</button>
                      <button onClick={() => handleOnChanges(value, index)}>{dis ? 'add changes': 'change' }</button>
                    </div>
                  </div>
                ))} */}
              </div>
            )}
      </div>      
    </div>
  );
}

export default Title;