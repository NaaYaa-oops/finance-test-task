import React from 'react'
import {List} from '@mui/material'
import {useSelector} from 'react-redux'
import TickerItem from './TickerItem'


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

export default TickerList