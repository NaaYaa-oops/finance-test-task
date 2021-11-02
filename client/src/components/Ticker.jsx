import React from 'react'
import {TickerList} from './TickerList'
import {useSockets} from '../hooks/useSockets'


export const Ticker = () => {
    useSockets()

    return (
        <TickerList/>
    )
}

