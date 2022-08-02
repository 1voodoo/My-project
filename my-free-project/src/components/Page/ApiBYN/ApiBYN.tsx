import axios from "axios";

export interface IBYN {
    USDBYN : {
        high: string;
    }
    
}

const ApiBYN = async(): Promise<IBYN | null> => {
    try {
        const respons = await axios.get("https://economia.awesomeapi.com.br/last/USD-BYN");
        return respons.data;
    } catch (error) {
        throw(error)
    }
};

export default ApiBYN;
