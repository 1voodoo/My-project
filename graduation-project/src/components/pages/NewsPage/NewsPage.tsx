import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store";
import { getNewsDescription } from "../../../store/NewsDescription/ActionCreator";
import PageLayout from "../../PageLayout/PageLayout";
import Comments from "../../Comments/Comments";
import IAllComments from "../../Comments/interface";
import style from './NewsPage.module.scss';
import { CircularProgress } from "@mui/material";
import UserTodo from "../../Comments/UserTodo/UserTodo";


const NewsPage: FC = () => {
    const [comment, setComment] = useState<IAllComments[]>([]);
    

    const addHandler = (tittle: string, nameUser: string) => {
        const newComment: IAllComments = {
            id: Date.now(),
            tittle: tittle,
            nameUser: nameUser,
            
        };
        setComment(previous => [newComment, ...previous]);
        
    };

    const removeHandler = (id: number) => {
        const question = window.confirm("Вы точно хотите удалить комментарий?");
        if (question) {
            setComment(previous => previous.filter(user => user.id !== id));
        };
    };

    const dispatch = useDispatch();
    const { id } = useParams();
    const newsDescription = useSelector((state: RootState) => state.newsDescription);
    
    useEffect(() => {
        dispatch(getNewsDescription(Number(id)));
        const save = JSON.parse(localStorage.getItem('comment') || '[]') as IAllComments[];
        setComment(save);
    }, [dispatch, id]);

    useEffect(() => {
        localStorage.setItem('comment', JSON.stringify(comment))
    }, [comment]);

    return (
        <PageLayout>
            <div className={style.wrapper}>
                {!newsDescription[id!] && (<div className={style.circular}><CircularProgress/></div>)}
                {newsDescription[id!] && (
                    <>
                    <img className={style.foto} src={newsDescription[id!]?.imageUrl} alt="foto" />
                    <p className={style.summary}>{newsDescription[id!]?.summary}</p>
                    <Comments onAdd={addHandler} />
                    <UserTodo  userTodos={comment} onRemove={removeHandler} />
                    </>
                )} 
            </div>
        </PageLayout>  
    );
};

export default NewsPage;
