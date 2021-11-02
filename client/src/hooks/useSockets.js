import {useEffect, useState} from 'react'
import {useActions} from './useActions'
import {BASE_URL} from '../helpers/baseUrl'
import io from 'socket.io-client'


export function useSockets(url = BASE_URL) {
    const [socket, setSocket] = useState(null)
    const {setNewTickers} = useActions()
    useEffect(() => {
        const newSocket = io(url)
        setSocket(newSocket)
        return () => newSocket.close()
    }, [])
    useEffect(() => {
        if (socket) {
            socket.emit('start')
            socket.on('ticker', (response) => {
                setNewTickers(response)
            })
        }
    }, [socket])
}