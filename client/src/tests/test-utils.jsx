import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {rootReducer} from '../redux/reducers/rootReducer'


function render(
    ui,
    {
        preloadedState,
        store = configureStore({reducer: rootReducer, preloadedState}),
        ...renderOptions
    } = {}
) {
    function Wrapper({children}) {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

export * from '@testing-library/react'
export {render}