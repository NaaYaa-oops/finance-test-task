import {screen} from '@testing-library/react'
import TickerList from '../components/TickerList'
import {render} from './test-utils'


describe('Ticker list component', () => {
    test('Ticker list renders', () => {
        render(<TickerList/>)
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
    test('Ticker list snapshot', () => {
        const tickerList = render(<TickerList/>)
        expect(tickerList).toMatchSnapshot()
    })
})