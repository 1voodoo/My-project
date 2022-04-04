import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { INews } from "../../../api/getNews";
import { RootState } from "../../../store";
import { getAllNews } from "../../../store/News/ActionCreator";
import SiteTicker from "../SiteTicker/SiteTicker";
import style from "./TitlePage.module.scss";


const TitlePage: FC = () => {
    const dispatch = useDispatch();
    const { allNews } = useSelector((state: RootState) => state.GetAllNews);

    const SpaceNews = allNews?.filter(item => item.newsSite === 'SpaceNews');
    const Arstechnica = allNews?.filter(item => item.newsSite === 'Arstechnica');
    const Spaceflight = allNews?.filter(item => item.newsSite === 'Spaceflight Now');
    const Teslarati = allNews?.filter(item => item.newsSite === 'Teslarati');
    const Nasa = allNews?.filter(item => item.newsSite === 'NASA');
    const NasaSpaceflight = allNews?.filter(item => item.newsSite === 'NASA Spaceflight');
    const [news, setNews] = useState(allNews)
    const [news1, setNews1] = useState('')
    console.log(news);
    
    // console.log(SpaceNews);
    // SelectChangeEvent
    const navigate = useNavigate();
    const newsDescription = (id: number) => {
        navigate(`/news/${id}`)
    };
    const handleChange = (event: any) => {
        setNews(event.target.value);
      };

    useEffect(() => {
        dispatch(getAllNews());
    }, []);

    return (<>
                <p>Today {new Date().toISOString().slice(0, 10)}</p>
                <div className={style.wrapper}><h1 className={style.one}>TitlePage</h1></div>
                {allNews && (
                    <Box sx={{ maxWidth: 220 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select news</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={news}
                        label="Select news"
                        onChange={handleChange}
                      >
                        {/* {allNews.filter((info) => {
                            if (info.newsSite === 'SpaceNews')
                            return (
                                <MenuItem
                                    value={allNews}>
                                    allNews
                                </MenuItem>
                            )
                        })} */}
                                {/* <MenuItem
                                    value={allNews}>
                                    allNews
                                </MenuItem> */}
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}
                <div className={style.line}></div> 
                <div className={style.wrapper}> 
                  <SiteTicker/> 
                    {!allNews && (<div className={style.circular}><CircularProgress/></div>)}
                    {allNews && (
                        <div className={style.main}>{allNews!.map((info) => (
                            <div className={style.container} key={info.id}>
                                <p>{info.newsSite}</p>
                                <img src={info.imageUrl} alt="foto" className={style.foto}/>
                                <p className={style.title}>{info.title}</p>
                                <div className={style.box}>
                                    <Button className={style.btn} variant="contained"
                                        onClick={() => newsDescription(info.id)}>
                                        description
                                    </Button>
                                    <p>like</p>
                                <a href={info.url}>reade more</a>
                                </div>
                                <p className={style.newsReleasw}>News release: {info.publishedAt.slice(0, 10)}</p>
                            </div>
                            ))}
                        </div>
                    )}
                </div>          
            </>
            );
};

export default TitlePage;