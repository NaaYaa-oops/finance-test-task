import {render} from './test-utils'
import {Ticker} from '../components/Ticker'
import {screen} from '@testing-library/react'


describe('Ticket component', () => {
    test('Ticker renders', () => {
        render(<Ticker/>)
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
    test('Ticker snapshot', () => {
        const ticker = render(<Ticker/>)
        expect(ticker).toMatchSnapshot()
    })
})