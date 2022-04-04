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
        
        const response = await axios.get<INews>(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
        
        return response.data;
        
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getNewsID;