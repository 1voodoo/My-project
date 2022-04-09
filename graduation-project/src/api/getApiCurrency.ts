import axios from "axios";

export interface ICurrency {
    date: string;
    eur: {
        byn: number;
        cny: number;
        rub: number;
    };
};

const getApiCurrency = async (): Promise<ICurrency> => {
    try {
        const response = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json');
        
        return response.data; 
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getApiCurrency;
