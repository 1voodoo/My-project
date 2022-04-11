import axios from "axios";

export interface ICurrencyUSD {
    base: string;
    date: string;
    rates: {
        AUD: number;
        PLN: number;
        JPY: number;
    }
};

const getApiCurrencyUsd = async (): Promise<ICurrencyUSD> => {
    try {
        const response = await axios.get('https://api.frankfurter.app/latest?from=USD');
        
        return response.data; 
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getApiCurrencyUsd;