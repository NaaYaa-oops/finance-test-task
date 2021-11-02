import React from 'react'
import {ListItem, ListItemIcon, ListItemText} from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'


export const TickerItem = (props) => {
    return (
        <ListItem>
            <ListItemIcon>
                <MonetizationOnIcon/>
            </ListItemIcon>
            <ListItemText>
                {props.ticker}
            </ListItemText>
            <ListItemText>
                {`$ ${props.price}`}
            </ListItemText>
            <ListItemText>
                {props.change}
            </ListItemText>
        </ListItem>
    )
}

