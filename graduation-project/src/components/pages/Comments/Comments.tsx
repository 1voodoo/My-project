import { Button, TextField } from "@mui/material";
import React, { useState } from "react"
import { FC } from "react";
import style from './Comments.module.scss';
import validateCreateSafeCommentForm from "./validateCreateSafeCommentForm";

const Comments: FC<{onAdd(tittle: string, nameUser: string): void}> = props => {
  const [text, setText] = useState<string>('')
  const [user, setUser] = useState<string>('')
  console.log(text);
  console.log(user);
  const errors = validateCreateSafeCommentForm({text, user});
  const isDisabled = Object.keys(errors).length > 0;
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  const handleOnChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value)
  }

  const keyPressHandler = () => {
      props.onAdd(text, user)
      setText('');
      setUser('');
     
  } 
  
  return (
    <div className={style.container}>
      <p className={style.textHeader}>Comments</p>
      <TextField
        error={!!errors.user}
        helperText={errors.user} 
        placeholder='Your name'
        value={user}
        onChange={handleOnChangeUser} 
      />
      <textarea 
      className={style.textarea}
      value={text} 
      onChange={handleOnChange} 
      placeholder="Your Comment" 
      >
      </textarea>
      <div className={style.contanerBtn}>
        <Button
          disabled={isDisabled}
          className={style.btn} 
          onClick={keyPressHandler}
          variant="contained">
          Add
        </Button>
      </div>
    </div>
  )
 
} 

export default Comments;
 


