import React, {memo} from 'react'
import {List} from '@mui/material'
import TickerItem from './TickerItem'
import {useSelector} from 'react-redux'


const TickerList = () => {
    const {tickers} = useSelector(state => state.ticker)

    return (
        <>
            <List>
                {tickers.map(
                    ticker => <TickerItem key={ticker.ticker}{...ticker}/>)}
            </List>
        </>
    )
}

export default memo(TickerList)