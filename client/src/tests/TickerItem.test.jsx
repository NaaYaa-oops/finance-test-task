import {screen} from '@testing-library/react'
import {render} from './test-utils'
import TickerItem from '../components/TickerItem'
import {TickerTitle} from '../components/TickerTitle'


const state = {
    'ticker': 'AAPL',
    'exchange': 'NASDAQ',
    'price': 279.29,
    'change': 64.52,
    'change_percent': 0.84,
    'dividend': 0.56,
    'yield': 1.34,
    'last_trade_time': '2021-04-30T11:53:21.000Z'
}

describe('Ticker item component', () => {
    test('Ticker item renders', () => {
        render(<TickerItem/>)
        expect(screen.getByRole('listitem')).toBeInTheDocument()
    })
    test('Ticker item renders with value', () => {
        render(<TickerItem {...state}/>)
        expect(screen.getByText('AAPL')).toBeInTheDocument()
    })
    test('Ticker item snapshot', () => {
        const tickerItem = render(<TickerItem {...state}/>)
        expect(tickerItem).toMatchSnapshot()
    })
    test('Ticker item -> title renders without values', () => {
        render(<TickerTitle/>)
        expect(screen.queryByText((content, element) => {
            return element.tagName.toLowerCase() === 'span' && content.startsWith(
                'APPL')
        })).toBeNull()
    })
})