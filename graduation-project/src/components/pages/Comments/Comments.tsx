import { Button } from "@mui/material";
import React, { useState } from "react"
import { FC } from "react";
import style from './Comments.module.scss';

const Comments: FC<{onAdd(tittle: string): void}> = props => {
  const [text, setText] = useState<string>('')
  console.log(text);
  
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const keyPressHandler = () => {
    if (text.length > 2 && text.length < 30 ) {
      props.onAdd(text)
      setText('');
    } else  {
      alert('length > 2 and length < 30')
    }
  } 
  
  return (
    <div className={style.container}>
      <p className={style.textHeader}>Comments</p>
      <textarea 
      className={style.textarea}
      value={text} 
      onChange={handleOnChange} 
      placeholder="Your Comment" 
      >
      </textarea>
      <Button 
      className={style.btn} 
      onClick={keyPressHandler}
      variant="contained">
      Add
      </Button>
    </div>
  )
 
} 

export default Comments;
 


