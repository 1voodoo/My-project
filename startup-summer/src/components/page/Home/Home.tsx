import React, { FC, useEffect, useState } from "react";
import style from './Home.module.scss';
import kitten from '../../image/Vector.jpg'
import imag from '../../image/image.jpg'
import imagBig from '../../image/imageBig.png'
import Union from '../../image/Union.png'
import followers from '../../image/followers.png'
import following from '../../image/following.png'
import Uniondel from '../../image/Uniondel.png'
import getApi, { IUsers } from "../../Api/Api";

const Home: FC = () => {
    const [userName, setUserName] = useState<string>("");
    const [input, setUnput] = useState<string>("");
    const [user, setUser] = useState<IUsers | null>(null);
    console.log(user);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUnput(event.target.value);
    };
    const keyPressHandle = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            setUserName(input)
        };
    };

    const getApiUser = async () => {
        const user = await getApi(userName);
        setUser(user);
    };
    useEffect(() => {
        if (userName) {
            getApiUser();

        }
        if (userName ===  user?.login) {
            getApiUser();

        }
       
    },[userName]);

    return (<>
        <div className={style.home}>
            <div className={style.header}>
                <img className={style.imgGit} src={kitten} alt="icon" />
                <form action="#" className={style.search}>
                    <button type="submit" className={style.btn}>
                        <img className={style.img} src={imag} alt="foto" />
                    </button>
                    <input onKeyPress={keyPressHandle} onChange={handleOnChange} className={style.inputHeader} type="text" placeholder="Enter GitHub username"/>
                </form>     
            </div>
            <div className={style.main}>
                {/* {!user && (<div>Loading...</div>)} */}
                {userName === "" && (<>
                    <img className={style.searchBig} src={imagBig} alt="icon" />
                    <h2 className={style.title}>Start with searching a GitHub user</h2>
                </>)}
                   
                {userName !== "" && userName !==  user?.login &&  (<>
                    <img className={style.Union} src={Union} alt="icon"  />
                    <h2 className={style.titleSecond}>User not found</h2>
                </> )}   
                {userName ===  user?.login && (<div className={style.pageUser}> 
                            <div className={style.userContainer} key={user.id}>
                                <img className={style.imgAvatar} src={user.avatar_url} alt="foto" />
                                <p className={style.userName}>{user.name}</p>
                                <a href={user.html_url} target="_blank" className={style.userLogin}>{user.login}</a>
                                <div className={style.followersContainer}>
                                    <p className={style.followers}>
                                        <img src={followers} alt="icon" />
                                        {user.followers} followers
                                    </p>
                                    <p className={style.following}>
                                        <img src={following} alt="icon" />
                                        {user.following} following
                                    </p>
                                </div> 
                            </div>
                            <div className={style.userInfo}>
                               {user.public_repos 
                               ?
                               <div className={style.containerFull}>
                                    <p className={style.numberRepo}>Repositories({user.public_repos})</p>
                               </div> 
                               
                               : 
                                <div className={style.containerInfoEmty}>
                                    <div className={style.emtyContainer}>
                                        <img className={style.emptyIcon} src={Uniondel} alt="icon" />
                                        <h2 className={style.emptyText}>Repository list is empty</h2>
                                    </div>
                                </div>
                                }
                            </div>
                </div>)}    
            </div>
        </div>
        </>);
    };
export default Home;
