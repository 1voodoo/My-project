import axios from "axios";

export interface IBitcon {
    id: string;
    name: string,
    image: {
        small: string
    }
    market_data: {
        current_price: {
            usd:number,
        }
    }   
}

const getBitcoin = async (): Promise<IBitcon[]> => {
    try{
        const response = await axios.get('https://api.coingecko.com/api/v3/coins');

        return response.data;
        
    } catch (e) {
        alert(e);
        throw(e);
    } 
        
}
export default getBitcoin;