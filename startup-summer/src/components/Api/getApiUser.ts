import axios from "axios";

export interface IUser {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
};

const getApiUser = async (name: string): Promise<IUser> => {
    try {
        const response = await axios.get(`https://api.github.com/users/${name}`);
        return response.data;

    } catch (e) {
        throw(e);
    } 
}

export default getApiUser;
