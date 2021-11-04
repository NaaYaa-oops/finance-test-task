import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import {BASE_URL} from '../../helpers'


const initialState = {
    tickers: []
}

// export const setFetchInterval = createAsyncThunk('ticker/fetchInterval',
//     async (arg) => {
//         await axios.post(`${BASE_URL}api/set-timer`, {timer: +arg})
//     }) // sry :)

export const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {
        setNewTickers(state, action) {
            state.tickers = action.payload
        },
        deleteTickerByName(state, action) {
            state.tickers = state.tickers.filter(
                ticker => ticker.ticker !== action.payload.ticker)
        }
    }
})

export const {...tickerActions} = tickerSlice.actions
export default tickerSlice.reducer
