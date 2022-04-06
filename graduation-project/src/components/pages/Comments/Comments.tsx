import { Button, TextField } from "@mui/material";
import React, { useState } from "react"
import { FC } from "react";
import style from './Comments.module.scss';
import validateCreateSafeCommentForm, { IValidateCreateSafeCommentFormResult } from "./validateCreateSafeCommentForm";


const Comments: FC<{onAdd(nameUser: string, tittle: string): void}> = props => {
  const [user, setUser] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [errors, setErrors] = useState<IValidateCreateSafeCommentFormResult>({})
  console.log(user);
  console.log(text);
  console.log(errors);

  const isCreateDisbled = () => {
    const errors = validateCreateSafeCommentForm({user, text});
    return Object.keys(errors).length > 0;
  }
  const handleOnChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
    setErrors({ ...errors, user: undefined })
  }

  const handleOnChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  

  const handleOnUserBlur = () => {
    const newErrors = validateCreateSafeCommentForm({user, text});
    setErrors(newErrors);
  }

  const keyPressHandler = () => {
      props.onAdd(user, text)
      setUser('');
      setText('');       
  } 
  
  return (
    <div className={style.container}>
      <p className={style.textHeader}>Comments</p>
        <TextField className={style.lol}
          error={!!errors.user}
          helperText={errors.user} 
          placeholder='Your name'
          value={user}
          onChange={handleOnChangeUser}
          onBlur={handleOnUserBlur} 
        />
      <textarea
      required
      maxLength={40} 
      className={style.textarea}
      value={text} 
      onChange={handleOnChangeText} 
      placeholder="Your Comment" 
      >
      </textarea>
      <div className={style.contanerBtn}>
        <Button
          disabled={isCreateDisbled()}
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
 


