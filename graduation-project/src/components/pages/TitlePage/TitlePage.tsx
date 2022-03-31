import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getBitcoin, { IBitcon } from "../../../api/getBitcoin";
import { RootState } from "../../../store";
import { getAllNews } from "../../../store/News/ActionCreator";
import style from "./TitlePage.module.scss";


const TitlePage: FC = () => {
    const dispatch = useDispatch();
    const { allNews } = useSelector((state: RootState) => state.GetAllNews);
    console.log(allNews?.filter(item => item.newsSite === 'SpaceNews'));
    
    const navigate = useNavigate();
    const newsDescription = (id: number) => {
        navigate(`/news/${id}`)
    };
    const [age, setAge] = useState('');
    console.log(age);
    
    const handleChange = (event: any) => {
      setAge(event.target.value as string);
    };
    const [bitcoin, setBitcoin] = useState<IBitcon[] | null>(null);
    console.log(bitcoin);
    
    const getApiBitcoin = async () => {
        const bitcon = await getBitcoin();
        setBitcoin(bitcon)
    }

    useEffect(() => {
        dispatch(getAllNews());
        getApiBitcoin();
    }, []);

    return (<>
                <p>Today {new Date().toISOString().slice(0, 10)}</p>
                <div className={style.wrapper}><h1 className={style.one}>TitlePage</h1></div>
                <Box sx={{ maxWidth: 150 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            >
                            {allNews?.map((news) => (
                                <MenuItem
                                value={news.id}>
                                    {news.newsSite}
                               </MenuItem>
                            ))}    
                            
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <p>{age}</p>
                    </FormControl>
                </Box>
                <div className={style.line}></div> 
                <div className={style.wrapper}> 
                    {bitcoin && (
                        <div className={style.containerOwerflow}>
                            <div className={style.containerCoins}>{bitcoin.map((coin => (
                                <div className={style.allCoins} key={coin.id}>
                                    <img src={coin.image.small} alt="foto" />
                                    <p className={style.nameCoin}>{coin.name}</p>
                                    <p className={style.price}>{coin.market_data.current_price.usd}<span className={style.dollar}>$</span></p>
                                </div>
                            )))}
                            </div>
                        </div>
                            
                    )} 
                    {!allNews && (<div className={style.circular}><CircularProgress/></div>)}
                    {allNews && (
                        <div className={style.main}>{allNews!.map((info) => (
                            <div className={style.container} key={info.id}>
                                <img src={info.imageUrl} alt="foto" className={style.foto}/>
                                <p>{info.title}</p>
                                <p>{info.newsSite}</p>
                                <a href={info.url}>reade more</a>
                                <Button className={style.btn} variant="contained" onClick={() => newsDescription(info.id)}>description</Button>
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