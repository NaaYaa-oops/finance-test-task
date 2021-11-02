import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    tickers: []
}
export const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {
        setNewTickers(state, action) {
            state.tickers = action.payload
        }
    }
})

export default tickerSlice.reducer
export const {...tickerActions} = tickerSlice.actions