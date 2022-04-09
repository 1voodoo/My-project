import axios from "axios";

export interface IWeather {
    temperature: string;
    wind: string;
    description: string;
}

const getApiWeather = async (name: string): Promise<IWeather> => {
    try {
        const response = await axios.get(`https://goweather.herokuapp.com/weather/${name}`);
        return response.data;
        
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getApiWeather;