import React from 'react'

function useLocalStorage(key, value) {
    // check if arguments are valid
    if (!key || typeof key !== 'string') {
        throw new Error('Invalid Arguments', 'key:', key, 'isString:', typeof key === 'string')
    }

    // set state
    const [val, setVal] = React.useState(()=>{
        // check localStorage
        const localVal = localStorage.getItem(key)
        if (localVal) return JSON.parse(localVal)
        // set to value
        localStorage.setItem(key, JSON.stringify(value))
        return value
    })

    // create update handler
    function updateVal(value) {
        setVal(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [val, updateVal]
}

export default useLocalStorage