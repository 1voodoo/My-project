import React, { useState } from "react"
import { FC } from "react"


const  Comments: FC<{onAdd(tittle: string): void}> = props => {
  const [text, setText] = useState<string>('')
  console.log(text);
  
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(text)
      setText('');
      
    }
  } 
  
  return (
    <div>
      <p>Comments</p>
      <textarea value={text}
      onKeyPress={keyPressHandler} 
      onChange={handleOnChange} 
      name="lol" id="111" 
      placeholder="your comment" >
      </textarea>
    </div>
  )
 
} 

export default Comments;
 


