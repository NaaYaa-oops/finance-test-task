import {useEffect, useState} from 'react'


export function useDebounce(initialValue, delay) {
    const [value, setValue] = useState(initialValue)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setValue(initialValue)
        }, delay)
        return () => clearTimeout(timeout)
    }, [initialValue])
    return value
}