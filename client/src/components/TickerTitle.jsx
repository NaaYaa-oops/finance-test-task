import React, {memo} from 'react'
import {ListItemIcon, ListItemText} from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import {tickerStyles} from '../styles/tickerStyles'


export const TickerTitle = memo(({ticker}) => {
    return (
        <>
            <ListItemIcon>
                <MonetizationOnIcon/>
            </ListItemIcon>
            <ListItemText sx={tickerStyles.listItemText}>
                {ticker}
            </ListItemText>
        </>
    )
})

