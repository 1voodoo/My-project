import { Skeleton, Avatar, Typography, Stack } from "@mui/material";
import { FC, useEffect, useState } from "react";
import getBitcoin, { IBitcon } from "../../../api/getBitcoin";
import style from './SiteTicker.module.scss'

const SiteTicker: FC = () => {
    const [bitcoin, setBitcoin] = useState<IBitcon[] | null>(null);

    const getApiBitcoin = async () => {
        const bitcon = await getBitcoin();
        setBitcoin(bitcon)
    }

    useEffect(() => {
        getApiBitcoin();
    }, []);
    return (
        <div>
            <div className={style.MainContainer}>
                {!bitcoin && (
                    <Stack spacing={1} className={style.Sceleton}>
                        <Skeleton className={style.SceletonText} variant="text" width={80} />
                        <Skeleton variant="circular" width={60} height={60} />
                        <Skeleton className={style.SceletonText} variant="text" width={80} />
                        <Skeleton variant="circular" width={60} height={60} />
                        <Skeleton className={style.SceletonText} variant="text" width={80} />
                        <Skeleton variant="circular" width={60} height={60} />
                        <Skeleton className={style.SceletonText} variant="text" width={80} />
                        <Skeleton variant="circular" width={60} height={60} />
                        <Skeleton className={style.SceletonText} variant="text" width={80} />
                        <Skeleton variant="circular" width={60} height={60} />
                        <Skeleton className={style.SceletonText} variant="text" width={80} />
                        <Skeleton variant="circular" width={60} height={60} />
                        <Skeleton className={style.SceletonText} variant="text" width={80} />
                        <Skeleton variant="circular" width={60} height={60} />
                        <Skeleton className={style.SceletonText} variant="text" width={80} />
                        <Skeleton variant="circular" width={60} height={60} />
                    </Stack>
                )}
                </div>
                {bitcoin && (
                    <div className={style.container}>
                        <div className={style.containerOwerflow}>
                            <div className={style.containerCoins}>{bitcoin.map((coin => (
                                <div className={style.allCoins} key={coin.id}>
                                    <img src={coin.image.small} alt="foto" />
                                    <p className={style.nameCoin}>{coin.name}</p>
                                    <p className={style.price}>{coin.market_data.current_price.usd}
                                    <span className={style.dollar}>$</span>
                                    </p>
                                </div>
                                )))}
                            </div>
                        </div>
                    </div>             
                )}
        </div>
    );
};

export default SiteTicker;