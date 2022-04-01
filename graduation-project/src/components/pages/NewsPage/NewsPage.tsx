import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store";
import { getNewsDescription } from "../../../store/NewsDescription/ActionCreator";
import Comments from "../Comments";
import PageLayout from "../PageLayout/PageLayout";

const NewsPage: FC = () => {
    const [comment, setComment] = useState([]);
    const addHandler = (tittle: string) => {
        console.log('hello', tittle);
        
    }
    const dispatch = useDispatch();
    const { id } = useParams();
    const newsDescription = useSelector((state: RootState) => state.newsDescription);
    console.log(newsDescription);
    
    
    useEffect(() => {
        dispatch(getNewsDescription(Number(id)));
    }, []);

    return (
        <PageLayout>
            <div>    
                <div>lol{newsDescription[id!] && newsDescription[id!]?.title}</div>
                <Comments onAdd={addHandler}/>
            </div>
        </PageLayout>
            
    );
};

export default NewsPage;