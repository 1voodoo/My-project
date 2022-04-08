import { FC } from "react";
import IAllComments from "./interface";
import style from './UserTodo.module.scss';

 interface IUserTodo {
   userTodos: IAllComments[];
   onRemove(id: number): void;
 };

const UserTodo: FC <IUserTodo> = ({ userTodos, onRemove}) => {
  return (<>
    <div className={style.containerMain}>
        {userTodos.map(user => {
          return (
            <div className={style.container} key={user.id}>
                <img className={style.foto} 
                src="https://chto-eto-takoe.ru/uryaimg/32574385521dd1847f7d1e5b940491ef.jpg"
                alt="foto"  
                />
                <div className={style.userContainer}>
                  <p className={style.user}>{user.tittle}</p>
                  <p className={style.tittle}>{user.nameUser}</p>
                  <img className={style.icon} 
                  onClick={() => onRemove(user.id)} 
                  src="https://cdn-icons-png.flaticon.com/512/1483/1483063.png"
                  alt="icon"
                  />
                </div>
            </div>
          )
        })} 
    </div>
    </>
  );
};

export default UserTodo;
