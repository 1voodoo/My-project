import { CircularProgress } from "@mui/material";
import { FC, useEffect, useState } from "react";
import getNews, { INews } from "../../../api/getNews";
import style from "./TitlePage.module.scss";


const TitlePage: FC = () => {
    const [news, setNews] = useState<INews[] | null>(null);
    console.log(news);
    
    
    const getNewsApi = async () => {
        const newNews = await getNews();
        setNews(newNews);
    }
    useEffect(() => {
        getNewsApi();
    },[])

    return (<>
            
                <div className={style.wrapper}>
                    <h1 className={style.one}>TitlePage</h1>
                    </div>
                    <div className={style.line}></div> 
                    <div className={style.wrapper}> 
                    {news && (
                        <div className={style.main} >{news.map((info) => (
                            <div className={style.container} key={info.id}>
                                <img src={info.imageUrl} alt="foto" className={style.foto}/>
                                <p>{info.title}</p>
                                <p>{info.newsSite}</p>
                                <p>{info.publishedAt}</p>
                                <p>{info.summary}</p>
                                <a href={info.url}>reade more</a>
                            </div>
                        ))}
                        </div>
                    
                    )}
                    {!news && (
                    <div className={style.circular}>
                        <CircularProgress className={style.lol} />
                    </div>
                    )}
                </div>
                      
            </>
    );
};

export default TitlePage;