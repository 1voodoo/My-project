import axios from "axios";

export interface INews {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;

}

const getNews = async (page: number): Promise<INews[] > => {
    try{
        const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${page}`);

        return response.data;
        
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getNews;
