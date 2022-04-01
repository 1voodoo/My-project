import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store";
import { getNewsDescription } from "../../../store/NewsDescription/ActionCreator";
import Comments from "../Comments";
import IAllComments from "../interfeyce";
import PageLayout from "../PageLayout/PageLayout";
import UserTodo from "../UserTodo";

const NewsPage: FC = () => {
    const [comment, setComment] = useState<IAllComments[]>([]);

    const addHandler = (tittle: string) => {
        const newComment: IAllComments = {
            tittle: tittle,
            id: Date.now(),
            complited: false
        }
        setComment(prev => [newComment, ...prev])
        
    }
    const togleHandler = (id: number) => {
       
    }

    const removeHandler = (id: number) => {
        setComment(prev => prev.filter(user => user.id !== id))
    }

    const dispatch = useDispatch();
    const { id } = useParams();
    const newsDescription = useSelector((state: RootState) => state.newsDescription);
    console.log(newsDescription);
    
    
    useEffect(() => {
        dispatch(getNewsDescription(Number(id)));
    }, [dispatch, id]);

    return (
        <PageLayout>
            <div>    
                <div>lol{newsDescription[id!] && newsDescription[id!]?.title}</div>
                <Comments onAdd={addHandler}/>
                <UserTodo userTodos={comment}
                 onToggle={togleHandler} 
                 onRemove={removeHandler}
                />
            </div>
        </PageLayout>
            
    );
};

export default NewsPage;