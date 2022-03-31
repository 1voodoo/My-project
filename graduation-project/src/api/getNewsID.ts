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

const getNewsID = async (id: number): Promise<INews | null> => {

    try{
        
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=32');
        const newsDatails  = await response.data.find((news: { id: number }) => news.id === news.id) || null;
        console.log(newsDatails);
        
        return newsDatails;
        
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getNewsID;