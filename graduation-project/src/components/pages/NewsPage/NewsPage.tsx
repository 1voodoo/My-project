import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store";
import { getNewsDescription } from "../../../store/NewsDescription/ActionCreator";

const NewsPage: FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const newsDescription = useSelector((state: RootState) => state.newsDescription);
    console.log(newsDescription);
    
    
    useEffect(() => {
        dispatch(getNewsDescription(Number(id!)));
    }, []);

    return (
            <div>
                <p>
                  lol{newsDescription[id!] && newsDescription[id!]?.title}
                </p>
            </div>
             
            
    );
};

export default NewsPage;