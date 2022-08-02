import axios from "axios";

export interface IWeather {
    temperature: string;
    wind: string;
    description: string;
};

const  ApiWeather = async(): Promise<IWeather | null> => {
    try {
        const respons = await axios.get('https://goweather.herokuapp.com/weather/{Minsk}');
        return respons.data;
    } catch (error) {
        throw(error)
    }
};

export default ApiWeather;
