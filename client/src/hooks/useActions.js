import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import actionCreators from '../redux'


export function useActions() {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators, dispatch)
}