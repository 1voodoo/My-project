import axios from "axios";

export interface IUsers{
    id: string;
    avatar_url: string;
    name: string;
    login: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
}

const getApi = async (name: string): Promise<IUsers> => {
    try {
        const response = await axios.get(`https://api.github.com/users/${name}`);
        
        return response.data; 
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getApi
