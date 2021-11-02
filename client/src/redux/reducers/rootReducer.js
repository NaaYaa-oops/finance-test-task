import {combineReducers} from '@reduxjs/toolkit'
import tickerSlice from './tickerSlice'


export const rootReducer = combineReducers({
    ticker: tickerSlice
})