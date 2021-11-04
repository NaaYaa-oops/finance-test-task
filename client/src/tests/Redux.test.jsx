import reducer from '../redux/reducers/tickerSlice'
import {tickerActions} from '../redux/reducers/tickerSlice'


describe('Redux return initial state', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({tickers: []})
    })
    test('should handle a tickers', () => {
        const previousState = {}
        expect(reducer(previousState,
            tickerActions.setNewTickers([{ticker: 'APPLE'}]))).toEqual({
            tickers: [{ticker: 'APPLE'}]
        })
    })
})