import { FC } from "react";
import IAllComments from "./interfeyce";
import style from './UserTodo.module.css'

 interface IUserTodo {
   userTodos: IAllComments[];
   onToggle(id: number): void;
   onRemove(id: number): void;
 }
const UserTodo: FC<IUserTodo> = ({ userTodos, onRemove, onToggle }) => {
  return (
    <div>
      <ul>
        {userTodos.map(user => {
          return (
            <li key={user.id}>
              <label>
                <input type="checkbox" checked={user.complited} />
                <span>{user.tittle}</span>
                <img onClick={() => onRemove(user.id)} src="https://cdn-icons-png.flaticon.com/512/1483/1483063.png" alt="icon" />
                <i onClick={() => onRemove(user.id)} className="material-icons">delete</i>
              </label>
            </li>
          )
        })}
        
      </ul>  
    </div>
  );
};

export default UserTodo;