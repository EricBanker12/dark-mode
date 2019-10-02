import React from 'react'

function useLocalStorage(key, value) {
    // check if arguments are valid
    if (!key || typeof key !== 'string') {
        throw new Error('Invalid Arguments', 'key:', key, 'isString:', typeof key === 'string')
    }

    // set state
    const [val, setVal] = React.useState(value)

    // check/set local storage
    const localVal = localStorage.getItem(key)
    console.log('localVal', localVal)
    if (localVal) setVal(JSON.parse(localVal))
    else localStorage.setItem(key, JSON.stringify(val))

    // create update handler
    function updateVal(value) {
        setVal(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [val, updateVal]
}

export default useLocalStorage