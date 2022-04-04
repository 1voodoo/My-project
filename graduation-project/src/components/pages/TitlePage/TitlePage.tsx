import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { Box } from "@mui/system";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { getAllNews } from "../../../store/News/ActionCreator";
import SiteTicker from "../SiteTicker/SiteTicker";
import style from "./TitlePage.module.scss";


const TitlePage: FC = () => {
    const dispatch = useDispatch();
    const { allNews } = useSelector((state: RootState) => state.GetAllNews);
    const handleChange = (event: any) => {
        setNews(event.target.value);
      };
    const SpaceNews = allNews?.filter(item => item.newsSite === 'SpaceNews');
    const Arstechnica = allNews?.filter(item => item.newsSite === 'Arstechnica');
    const Spaceflight = allNews?.filter(item => item.newsSite === 'Spaceflight Now');
    const Teslarati = allNews?.filter(item => item.newsSite === 'Teslarati');
    const Nasa = allNews?.filter(item => item.newsSite === 'NASA');
    const NasaSpaceflight = allNews?.filter(item => item.newsSite === 'NASA Spaceflight');
    const [news, setNews] = useState()
    console.log(news);
    
    // console.log(SpaceNews);
    
    const navigate = useNavigate();
    const newsDescription = (id: number) => {
        navigate(`/news/${id}`)
    };

    useEffect(() => {
        dispatch(getAllNews());
    }, []);

    return (<>
                <p>Today {new Date().toISOString().slice(0, 10)}</p>
                <div className={style.wrapper}><h1 className={style.one}>TitlePage</h1></div>
                <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Choose News</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={news}
                            label="Agedsdasdas"
                            onChange={handleChange}
                          >
                            <MenuItem value={SpaceNews}>SpaceNews</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                <div className={style.line}></div> 
                <div className={style.wrapper}> 
                  <SiteTicker/> 
                    {!allNews && (<div className={style.circular}><CircularProgress/></div>)}
                    {allNews && (
                        <div className={style.main}>{allNews!.map((info) => (
                            <div className={style.container} key={info.id}>
                                <img src={info.imageUrl} alt="foto" className={style.foto}/>
                                <p>{info.title}</p>
                                <p>{info.newsSite}</p>
                                <a href={info.url}>reade more</a>
                                <Button className={style.btn} variant="contained"
                                    onClick={() => newsDescription(info.id)}>
                                    description
                                </Button>
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