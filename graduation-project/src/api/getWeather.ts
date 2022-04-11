import axios from "axios";

export interface IWeather {
    temperature: string;
    wind: string;
    description: string;
    forecast: IWeatherForecast[];
}
export interface IWeatherForecast {
    day: string;
    temperature: string;
    wind: string;
}

const getApiWeather = async (city: string): Promise<IWeather> => {
    try {
        const response = await axios.get(`https://goweather.herokuapp.com/weather/${city}`);
        return response.data;
        
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getApiWeather;