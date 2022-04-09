import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { getAllNews } from "../../../store/News/ActionCreator";
import Currency from "../../Currency/Currency";
import SiteTicker from "../../SiteTicker/SiteTicker";
import Weather from "../../Weather/Weather";
import style from "./TitlePage.module.scss";

const TitlePage: FC = () => {
  const dispatch = useDispatch();
  const { allNews } = useSelector((state: RootState) => state.GetAllNews);
  const [category, setCategory] = useState('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
      };
  const filterdNews = allNews?.filter(item => !category || item.newsSite === category);
  
  const navigate = useNavigate();

  const newsDescription = (id: number) => {
      navigate(`/news/${id}`)
  };

  const handleOnClickHeart = (id: number) => {
    dispatch(id)
  }
  useEffect(() => {
      dispatch(getAllNews());
  }, [dispatch]);

  return (<>
              <div className={style.wrapper}>
                <div className={style.Header}>
                    <img className={style.HeaderFoto} src="https://cdn.shopify.com/s/files/1/2143/6539/files/WP-logo.png?height=628&pad_color=fff&v=1571765552&width=1200" alt="foto"  />
                  </div>
                </div>
                <div className={style.line}></div>
                <SiteTicker/>  
                <div className={style.wrapper}> 
                    {!allNews && (<div className={style.circular}><CircularProgress/></div>)}
                    {allNews && ( <>
                        <div className={style.select}>
                            <Box sx={{ minWidth: 250 }} >
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Select news</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Select news"
                                onChange={handleChange}
                              >
                                <MenuItem value={''}>All News</MenuItem>
                                <MenuItem value={"SpaceNews"}>Space News</MenuItem>
                                <MenuItem value={"Teslarati"}>Teslarati</MenuItem>
                                <MenuItem value={"NASA"}>NASA</MenuItem>
                                <MenuItem value={"Spaceflight Now"}>Spaceflight Now</MenuItem>
                                <MenuItem value={"Arstechnica"}>Arstechnica</MenuItem>
                                <MenuItem value={"NASA Spaceflight"}>NASA Spaceflight</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                          <Weather/>
                          <Currency/>
                        </div>
                        <div className={style.main}>{filterdNews!.map((info) => (
                              <div className={style.container} key={info.id}>
                                  <p className={style.newsSite}>{info.newsSite}</p>
                                  <img src={info.imageUrl} alt="foto" className={style.foto}/>
                                  <p className={style.title}>{info.title}</p>
                                  <div className={style.box}>
                                    <Button className={style.btn} variant="contained"
                                        onClick={() => newsDescription(info.id)}>
                                        description
                                    </Button>
                                    <button onClick={() => handleOnClickHeart(info.id)}>❤</button>
                                    <a href={info.url}>reade more</a>
                                  </div>
                                  <p className={style.newsReleasw}>News release: {info.publishedAt.slice(0, 10)}</p>
                              </div>
                            ))}
                        </div>
                      </>)}
              </div>          
          </>
            );
};

export default TitlePage;
