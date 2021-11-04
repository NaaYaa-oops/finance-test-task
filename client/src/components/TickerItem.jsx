import React, {memo} from 'react'
import CountUp from 'react-countup'
import {TickerTitle} from './TickerTitle'
import {IconButton, ListItem, ListItemText} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import {
    calculateChangedWorth,
    calculateDividendYield,
    dateToLocaleDate
} from '../helpers'
import cn from 'classnames'
import classes from './tickerItem.module.scss'
import {useActions} from '../hooks/useActions'


const TickerItem = (props) => {
    const {ticker, price, dividend, yield: stockYield, change, change_percent, last_trade_time} = props
    const stocks = cn({
        [classes.stocks_up]: stockYield >= 1,
        [classes.stocks_down]: stockYield < 1
    })
    const {deleteTickerByName} = useActions()
    const deleteHandler = event => {
        deleteTickerByName({ticker})
    }
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
            <IconButton edge="end" aria-label="delete" onClick={deleteHandler}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
}

export default memo(TickerItem)