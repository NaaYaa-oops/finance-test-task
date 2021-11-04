import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    tickers: [],
    deletedTickers: []
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
        }
    }
})

export const {...tickerActions} = tickerSlice.actions
export default tickerSlice.reducer
