import axios from "axios";

export interface IRepo {
    description: string;
    name: string;
    html_url: string;
    id: number;
};

const getApiRepo = async (name: string): Promise<IRepo[] | null> => {
    try {
        const response = await axios.get(`https://api.github.com/users/${name}/repos`);
        
        return response.data; 
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getApiRepo;