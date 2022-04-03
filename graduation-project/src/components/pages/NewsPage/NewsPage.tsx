import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store";
import { getNewsDescription } from "../../../store/NewsDescription/ActionCreator";
import PageLayout from "../PageLayout/PageLayout";
import UserTodo from "../Comments/UserTodo";
import Comments from "../Comments/Comments";
import IAllComments from "../Comments/interface";
import style from './NewsPage.module.scss';

const NewsPage: FC = () => {
    const [comment, setComment] = useState<IAllComments[]>([]);

    const addHandler = (tittle: string) => {
        const newComment: IAllComments = {
            tittle: tittle,
            id: Date.now(),
        }
        setComment(prev => [newComment, ...prev])
        
    }

    const removeHandler = (id: number) => {
        const question = window.confirm("Вы точно хотите удалить комментарий")
        if (question) {
            setComment(prev => prev.filter(user => user.id !== id))
        }
    }

    const dispatch = useDispatch();
    const { id } = useParams();
    const newsDescription = useSelector((state: RootState) => state.newsDescription);
    console.log(newsDescription);
    
    
    useEffect(() => {
        dispatch(getNewsDescription(Number(id)));
        const save = JSON.parse(localStorage.getItem('comment') || '[]') as IAllComments[]
        setComment(save)
    }, [dispatch, id]);

    useEffect(() => {
        localStorage.setItem('comment', JSON.stringify(comment))
    }, [comment]);

    return (
        <PageLayout>
            <div className={style.wrapper}>    
                <div>{newsDescription[id!] && newsDescription[id!]?.title}</div>
                <Comments onAdd={addHandler}/>
                <UserTodo userTodos={comment}
                onRemove={removeHandler}
                />
            </div>
        </PageLayout>
            
    );
};

export default NewsPage;