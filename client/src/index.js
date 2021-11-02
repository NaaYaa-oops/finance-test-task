import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {store} from './redux'
import {Provider} from 'react-redux'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './styles/global.scss'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
// reportWebVitals();
