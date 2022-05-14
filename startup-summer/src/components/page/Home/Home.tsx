import React, { FC, useEffect, useState } from "react";
import style from './Home.module.scss';
import Kitten from '../../image/Vector.svg'
import Imag from '../../image/image.jpg'
import ImagBig from '../../image/imageBig.png'
import Union from '../../image/Union.png'
import Followers from '../../image/followers.png'
import Following from '../../image/following.png'
import Uniondel from '../../image/Uniondel.png'
import getApiRepo, { IRepo } from "../../Api/getApiRepo";
import getApiUser, { IUser }from "../../Api/getApiUser";
// import { CircularProgress, PaginationItem, Stack } from "@mui/material";
import PaginateButton from "../../PaginateButton";


const Home: FC = () => {
    const [userName, setUserName] = useState<string>("");
    const [input, setUnput] = useState<string>("");
    const [user, setUser] = useState<IUser | null>(null);
    const [repo, setRepo] = useState<IRepo[] | null>(null);
    console.log(repo);
    
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUnput(event.target.value);
    };
    const keyPressHandle = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            setUserName(input);
        }
        
    };

    const getApiRepoAll = async () => {
        const repo = await getApiRepo(userName);
        setRepo(repo);
    }

    const getApiUserInfo = async () => {
        const user = await getApiUser(userName);
        setUser(user);
    };
    const hanldeOnChange = () => {

    }

    useEffect(() => {

        if (userName) {
            getApiUserInfo();
            getApiRepoAll();
        }
        if (userName ===  user?.login) {
            getApiUserInfo();
            getApiRepoAll();
            
        }
       
    },[userName]);
 

    return (<>
        <div className={style.home}>
            <div className={style.header}>
                <img className={style.imgGit} src={Kitten} alt="icon" />
                <form action="#" className={style.search}>
                    <button type="submit" className={style.btn}>
                        <img className={style.img} src={Imag} alt="foto" />
                    </button>
                    <input onKeyPress={keyPressHandle} onChange={handleOnChange} className={style.inputHeader} type="text" placeholder="Enter GitHub username"/>
                </form>     
            </div>
            <div className={style.main}>
                {userName === "" && (<>
                    <img className={style.searchBig} src={ImagBig} alt="icon" />
                    <h2 className={style.title}>Start with searching a GitHub user</h2>
                </>)}
                   
                {userName !== "" && userName !==  user?.login &&  (<>
                    <img className={style.Union} src={Union} alt="icon"/>
                    <h2 className={style.titleSecond}>User not found</h2>
                </> )}
              
                {/* {userName !== "" && userName !==  user?.login && }     */}
                {userName ===  user?.login && (<div className={style.pageUser}>             
                            <div key={user.id} className={style.userContainer} >
                                <img className={style.imgAvatar} src={user.avatar_url} alt="foto" />
                                <p className={style.userName}>{user.name}</p>
                                <a href={user.html_url} target="_blank" className={style.userLogin}>{user.login}</a>
                                <div className={style.followersContainer}>
                                    <p className={style.followers}>
                                        <img src={Followers} alt="icon" />
                                        {user.followers > 1000 ? (user.followers/1000).toFixed(1) + 'k' : user.followers} followers
                                    </p>
                                    <p className={style.following}>
                                        <img src={Following} alt="icon" />
                                        {user.following} following
                                    </p>
                                </div> 
                            </div>
                            
                {user.public_repos 
                               ?
                                <div className={style.containerFull}>
                                    <p className={style.numberRepo}>Repositories ({user.public_repos})</p>
                                    {repo && (<>
                                        <div className={style.lol}>
                                            {repo.map(item => (<>
                                                    <div key={item.id} className={style.repo}>
                                                        <a className={style.repoTittle} href={item.html_url} target="_blank">{item.name}</a>
                                                        <p className={style.repoDescription}>{item.description}</p>
                                                    </div>
                                            </>))}
                                                    <PaginateButton 
                                                        initialPage={0}
                                                        pageRangeDisplayed={3}
                                                        pageCount={repo.length/4}
                                                        marginPagesDisplayed={1}
                                                        onChange={hanldeOnChange}
                                                    />
                                        </div>
                                    </>)}
                                </div> 
                               : 
                                <div className={style.containerInfoEmty}>
                                    <div className={style.emtyContainer}>
                                        <img className={style.emptyIcon} src={Uniondel} alt="icon" />
                                        <h2 className={style.emptyText}>Repository list is empty</h2>
                                    </div>
                                </div>
                                }
                </div>)}    
            </div>
        </div>
        </>);
    };
export default Home;
