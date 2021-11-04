import React from 'react'
import CountUp from 'react-countup'
import {TickerTitle} from './TickerTitle'
import {ListItem, ListItemText} from '@mui/material'
import {
    calculateChangedWorth,
    calculateDividendYield,
    dateToLocaleDate
} from '../helpers'
import cn from 'classnames'
import classes from './tickerItem.module.scss'


const TickerItem = (props) => {
    const {ticker, price, dividend, yield: stockYield, change, change_percent, last_trade_time} = props
    const stocks = cn({
        [classes.stocks_up]: stockYield >= 1,
        [classes.stocks_down]: stockYield < 1
    })
    return (
        <ListItem>
            <TickerTitle ticker={ticker}/>
            <ListItemText>
                <CountUp
                    start={0}
                    end={price}
                    duration={1}
                    separator=" "
                    decimals={2}
                    decimal=","
                    prefix="$ "
                />
            </ListItemText>
            <ListItemText>
                <div className={stocks}>
                    {calculateChangedWorth(price, change, change_percent)}
                </div>
            </ListItemText>
            <ListItemText>
                <div className={stocks}>{calculateDividendYield(price,
                    dividend)}</div>
            </ListItemText>
            <ListItemText>
                {dateToLocaleDate(last_trade_time)}
            </ListItemText>
        </ListItem>
    )
}

export default TickerItem