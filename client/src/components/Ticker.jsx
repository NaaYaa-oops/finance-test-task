import React from 'react'
import {useSockets} from '../hooks/useSockets'
import TickerList from './TickerList'


export const Ticker = () => {
    useSockets()
    return (
        <TickerList/>
    )
}

